/* ==========================================================
   M3ak Morocco — auth-store.js
   Base de comptes d'un front statique.

   Deux sources fusionnées :
     1. /assets/data/users.json  — comptes de départ, lecture seule
     2. localStorage "m3ak.users" — inscriptions faites dans ce
        navigateur. Une page statique ne peut pas réécrire un
        fichier du disque, c'est le contournement assumé.
        downloadJson() régénère le fichier complet pour le
        recopier dans assets/data/users.json.

   Aucun mot de passe n'est stocké en clair nulle part :
   PBKDF2-SHA256, 100 000 itérations, sel aléatoire par compte,
   empreinte de 256 bits en hexadécimal.

   Expose window.M3akAuth.
========================================================== */
(function () {
    "use strict";

    var SOURCE_URL = "/assets/data/users.json";
    var LOCAL_KEY = "m3ak.users";

    var ITERATIONS = 100000;
    var HASH_BITS = 256;
    var SALT_BYTES = 16;

    /* Le même message que le compte existe ou non : distinguer
       « inconnu » de « mauvais mot de passe » permettrait
       d'énumérer les comptes valides. */
    var GENERIC_ERROR = "Those credentials don't match an account.";

    var MIN_PASSWORD_LENGTH = 8;
    var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var NATIONAL_ID_PATTERN = /^[A-Z]{1,2}[0-9]{5,8}$/;

    /* ------------------------------------------------------
       1. Garde-fous d'environnement
    ------------------------------------------------------ */
    function subtle() {
        var crypto = window.crypto || window.msCrypto;
        if (!crypto || !crypto.subtle) {
            throw new Error(
                "Secure hashing is unavailable. Open this project over http://localhost " +
                "(Live Server) instead of file://."
            );
        }
        return crypto.subtle;
    }

    function randomBytes(length) {
        var out = new Uint8Array(length);
        (window.crypto || window.msCrypto).getRandomValues(out);
        return out;
    }

    /* ------------------------------------------------------
       2. Hexadécimal
    ------------------------------------------------------ */
    function toHex(buffer) {
        var bytes = new Uint8Array(buffer);
        var out = "";
        for (var i = 0; i < bytes.length; i++) {
            out += bytes[i].toString(16).padStart(2, "0");
        }
        return out;
    }

    function fromHex(hex) {
        var clean = String(hex || "");
        var bytes = new Uint8Array(clean.length / 2);
        for (var i = 0; i < bytes.length; i++) {
            bytes[i] = parseInt(clean.substr(i * 2, 2), 16);
        }
        return bytes;
    }

    /* ------------------------------------------------------
       3. Dérivation PBKDF2
    ------------------------------------------------------ */
    function derive(password, saltHex, iterations) {
        var api = subtle();
        var material = new TextEncoder().encode(String(password));

        return api
            .importKey("raw", material, { name: "PBKDF2" }, false, ["deriveBits"])
            .then(function (key) {
                return api.deriveBits(
                    {
                        name: "PBKDF2",
                        salt: fromHex(saltHex),
                        iterations: iterations || ITERATIONS,
                        hash: "SHA-256"
                    },
                    key,
                    HASH_BITS
                );
            })
            .then(toHex);
    }

    /* Comparaison à temps constant : un === s'arrête au premier
       caractère différent, la durée de l'échec renseigne alors
       sur le préfixe correct de l'empreinte. */
    function equalsConstantTime(a, b) {
        var left = String(a || "");
        var right = String(b || "");
        var length = Math.max(left.length, right.length);
        var diff = left.length ^ right.length;

        /* charCodeAt hors limites renvoie NaN, que l'opérateur
           binaire ramène à 0 : la boucle parcourt donc toujours
           la longueur maximale, sans sortie anticipée. */
        for (var i = 0; i < length; i++) {
            diff |= (left.charCodeAt(i) | 0) ^ (right.charCodeAt(i) | 0);
        }
        return diff === 0;
    }

    /* ------------------------------------------------------
       4. Sources de comptes
    ------------------------------------------------------ */
    var fileUsers = [];
    var readyPromise = null;

    function loadLocalUsers() {
        try {
            var raw = localStorage.getItem(LOCAL_KEY);
            var parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            return [];
        }
    }

    function saveLocalUsers(users) {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(users));
    }

    function allUsers() {
        return fileUsers.concat(loadLocalUsers());
    }

    function ready() {
        if (readyPromise) return readyPromise;

        readyPromise = fetch(SOURCE_URL, { cache: "no-store" })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Unable to load the account directory (" + response.status + ").");
                }
                return response.json();
            })
            .then(function (data) {
                fileUsers = (data && Array.isArray(data.users)) ? data.users : [];
                return allUsers().length;
            })
            .catch(function (error) {
                /* La base de départ est indisponible, mais les comptes
                   créés dans ce navigateur restent utilisables. */
                fileUsers = [];
                if (location.protocol === "file:") {
                    throw new Error(
                        "The account directory can't be read from file://. " +
                        "Serve the project over http://localhost (Live Server)."
                    );
                }
                throw error;
            });

        return readyPromise;
    }

    /* ------------------------------------------------------
       5. Normalisation et recherche
    ------------------------------------------------------ */
    function normalizeEmail(value) {
        return String(value || "").trim().toLowerCase();
    }

    function normalizeNationalId(value) {
        return String(value || "").trim().toUpperCase().replace(/\s+/g, "");
    }

    function findByEmail(users, email) {
        var target = normalizeEmail(email);
        return users.filter(function (user) {
            return normalizeEmail(user.email) === target;
        })[0] || null;
    }

    function findByNationalId(users, nationalId) {
        var target = normalizeNationalId(nationalId);
        return users.filter(function (user) {
            return normalizeNationalId(user.nationalId) === target;
        })[0] || null;
    }

    function findByIdentifier(users, identifier) {
        var value = String(identifier || "").trim();
        return value.indexOf("@") > -1
            ? findByEmail(users, value)
            : findByNationalId(users, value);
    }

    /* L'objet remis au reste de l'application ne transporte
       jamais le sel ni l'empreinte. */
    function toPublic(user) {
        if (!user) return null;
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            nationalId: user.nationalId,
            role: user.role || "citizen",
            city: user.city || "",
            phone: user.phone || "",
            createdAt: user.createdAt || ""
        };
    }

    /* ------------------------------------------------------
       6. Inscription
    ------------------------------------------------------ */
    function validateRegistration(input) {
        var name = String(input.name || "").trim();
        var email = normalizeEmail(input.email);
        var nationalId = normalizeNationalId(input.nationalId);
        var password = String(input.password || "");

        if (name.length < 2) throw new Error("Enter your full name.");
        if (!EMAIL_PATTERN.test(email)) throw new Error("Enter a valid email address.");
        if (!NATIONAL_ID_PATTERN.test(nationalId)) {
            throw new Error("Enter a valid National ID, for example AB123456.");
        }
        if (password.length < MIN_PASSWORD_LENGTH) {
            throw new Error("Your password needs at least " + MIN_PASSWORD_LENGTH + " characters.");
        }

        return {
            name: name,
            email: email,
            nationalId: nationalId,
            password: password,
            city: String(input.city || "").trim(),
            phone: String(input.phone || "").trim()
        };
    }

    function register(input) {
        return ready()
            .catch(function () { /* base de départ absente : on continue en local */ })
            .then(function () {
                var clean = validateRegistration(input || {});
                var users = allUsers();

                if (findByEmail(users, clean.email)) {
                    throw new Error("An account already uses this email address.");
                }
                if (findByNationalId(users, clean.nationalId)) {
                    throw new Error("An account already uses this National ID.");
                }

                var saltHex = toHex(randomBytes(SALT_BYTES));

                return derive(clean.password, saltHex, ITERATIONS).then(function (hash) {
                    var record = {
                        id: "usr_" + saltHex.slice(0, 10),
                        name: clean.name,
                        email: clean.email,
                        nationalId: clean.nationalId,
                        role: "citizen",
                        city: clean.city,
                        phone: clean.phone,
                        createdAt: new Date().toISOString(),
                        salt: saltHex,
                        iterations: ITERATIONS,
                        passwordHash: hash
                    };

                    saveLocalUsers(loadLocalUsers().concat([record]));
                    return toPublic(record);
                });
            });
    }

    /* ------------------------------------------------------
       7. Connexion
    ------------------------------------------------------ */
    function authenticate(identifier, password) {
        return ready()
            .catch(function () { /* base de départ absente : on continue en local */ })
            .then(function () {
                var value = String(identifier || "").trim();
                var pwd = String(password || "");

                if (!value || !pwd) throw new Error(GENERIC_ERROR);

                var user = findByIdentifier(allUsers(), value);

                /* Aucun compte : on dérive quand même sur un sel factice.
                   Répondre instantanément trahirait que l'identifiant
                   n'existe pas. */
                var target = user || {
                    salt: toHex(randomBytes(SALT_BYTES)),
                    iterations: ITERATIONS,
                    passwordHash: ""
                };

                return derive(pwd, target.salt, target.iterations).then(function (hash) {
                    if (!user || !equalsConstantTime(hash, target.passwordHash)) {
                        throw new Error(GENERIC_ERROR);
                    }
                    return toPublic(user);
                });
            });
    }

    /* ------------------------------------------------------
       8. Export du fichier
    ------------------------------------------------------ */
    function exportJson() {
        return JSON.stringify({ version: 1, users: allUsers() }, null, 2) + "\n";
    }

    function downloadJson() {
        var blob = new Blob([exportJson()], { type: "application/json" });
        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");

        link.href = url;
        link.download = "users.json";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    /* ------------------------------------------------------
       9. Surface publique
    ------------------------------------------------------ */
    window.M3akAuth = {
        ready: ready,
        register: register,
        authenticate: authenticate,
        exportJson: exportJson,
        downloadJson: downloadJson,
        GENERIC_ERROR: GENERIC_ERROR
    };
})();
