/* ==========================================================
   M3ak Morocco — translations.js
   Central dictionary read by /js/i18n.js.

   - The English copy lives in the HTML (it is the source text), so the
     `en` block only holds strings that JavaScript writes at runtime.
   - Every other language mirrors the same keys. To add French, copy the
     `ar` block into `fr`, translate it, and add `fr` to LANGUAGES in i18n.js.
   - Keys are grouped by namespace: shared chrome first (brand, common, nav,
     footer), then one namespace per page.
   - Values may use {name} placeholders, filled by M3akI18n.t(key, vars).
========================================================== */
window.M3akTranslations = {

    /* ------------------------------------------------------
       ENGLISH — runtime strings only
    ------------------------------------------------------ */
    en: {
        common: {
            changeLanguage: "Change language",
            showPassword: "Show password",
            hidePassword: "Hide password",
            next: "Next",
            opening: "Opening {name}…"
        },

        registry: {
            toast: { track: "Checking the status of your pending requests…" }
        },

        interior: {
            toast: { appointment: "Loading available appointment slots…" }
        },

        footer: {
            agadir: "Agadir"
        },

        overview: {
            map: {
                showing: "Showing the live transit network",
                locating: "Locating your position…"
            }
        },

        transport: {
            currentLocation: "Current Location",
            operator: "ALSA City Bus",
            busLine: "Bus {n}",
            nextStop: "Next: {stop}",
            minutes: "{n} min",
            arrow: "→",
            youAreHere: "You are here",
            status: { onTime: "On Time", delay: "+5 min Delay" },
            modeNames: { bus: "bus", tram: "tram", train: "train", taxi: "taxi" },
            stops: {
                talborjt: "Talborjt",
                marina: "Marina d'Agadir",
                founty: "Founty",
                bensergao: "Bensergao",
                dcheira: "Dcheira",
                alHouda: "Al Houda",
                gare: "Gare Routière Agadir"
            },
            alert: {
                line: "Line {n} - Arrival Soon",
                detail: "Arriving in {n} min at {stop}",
                track: "Track Live"
            },
            toast: {
                swapped: "Start and destination swapped",
                noDestination: "Enter a destination to see routes",
                searching: "Searching {mode} routes to {dest}",
                tracking: "Tracking Line L12 in real time",
                noGeolocation: "Geolocation isn't supported on this device",
                locationUnavailable: "Location unavailable — showing {city}",
                passAdded: "Fast Pass added to your basket — 30 MAD",
                ticket: "Opening ticket purchase"
            },
            route: {
                mapTitle: "Google Maps",
                transitTitle: "Public transport route",
                roadTitle: "Road route",
                embedTitle: "Route on Google Maps",
                problemTitle: "No route to show",
                noTransit: "Google Maps has no bus or tram data for this trip, so the road route is shown instead.",
                embedNote: "Add a Google Maps API key in js/config.js to draw the line on this map and list each bus step.",
                loadError: "Google Maps couldn't load — showing the basic map instead.",
                notFound: "No route found from {from} to {to}.",
                error: "The route couldn't be calculated right now. Open it in Google Maps instead.",
                ride: "Ride",
                walk: "Walk",
                toward: "toward {headsign}",
                stops: "{n} stops",
                openInGoogle: "Open in Google Maps",
                clear: "Clear route",
                unavailableTitle: "Not available in Agadir",
                unavailable: "Train and tram services are not currently available in Agadir. Choose Bus or Taxi to plan your trip."
            }
        },

        assistant: {
            you: "You",
            ai: "AI",
            unavailable: "AI assistance is currently unavailable. Please use the options below to view your details.",
            micUnavailable: "Voice assistant unavailable",
            active: "Active",
            available: "Available",
            sessions: {
                identity: "Identity Verification Support",
                identityWhen: "Today, 10:42 AM",
                appointment: "Appointment Rescheduling",
                appointmentWhen: "Yesterday, 14:15 PM",
                length: "{min}m {sec}s"
            },
            toast: {
                mic: "AI voice assistance is currently unavailable",
                langSelected: "{lang} selected for voice",
                playing: "Playing “{title}”…",
                history: "Opening your full voice history…"
            }
        },

        support: {
            toast: {
                chat: "Connecting you to a support agent…",
                ai: "Launching AI Assistant…",
                ticket: "Ticket submitted — we'll respond within 2–4 hours"
            }
        },

        finance: {
            toast: {
                pay: "Secure payment of {amount} — redirecting to Bank Al-Maghrib…",
                download: "Downloading: {name} (certified PDF)",
                history: "Opening full TGR transaction history…"
            }
        },

        onboarding: {
            finish: "Finish Setup",
            fillIn: "Please fill in {field}.",
            thisField: "this field"
        },

        payments: {
            toast: {
                opening: "Opening {name}…",
                topUp: "Opening top-up options for your M3ak Pay wallet",
                history: "Opening your full payment history"
            }
        },

        comingSoon: {
            featureTitle: "{feature} is coming soon",
            featureText: "We're building the {feature} section of the M3ak citizen portal. It isn't available yet, but the rest of the platform is ready for you to explore.",
            featurePageTitle: "{feature} — Coming Soon — M3ak Morocco"
        },

        auth: {
            errors: {
                enterIdentifier: "Enter your National ID or email.",
                invalidEmail: "This email address is not valid.",
                idFormat: "National ID looks like AB123456.",
                passwordLength: "Password must be at least 6 characters.",
                fullName: "Enter your full name.",
                validEmail: "Enter a valid email address.",
                validPhone: "Enter a valid phone number."
            },
            login: { signingIn: "Signing in..." },
            signup: { creating: "Creating account..." },
            forgot: { sending: "Sending reset link..." },
            reset: { redirecting: "Redirecting to Log in..." }
        },

        emergency: {
            sos: {
                holding: "Keep holding… {sec}s",
                sent: "Alert sent"
            },
            map: {
                layers: { hospitals: "hospitals", pharmacies: "pharmacies", police: "police stations" },
                types: { public: "Public", private: "Private" },
                cities: { agadir: "Agadir" },
                kmAway: "{km} km away",
                directions: "Directions",
                none: "No {layer} found near {city}.",
                found: "{count} {layer} found near {city}",
                offline: " · offline data",
                noCity: "Set your city in My Space to see nearby emergency facilities."
            },
            contacts: {
                reachable: "Reachable",
                defaultRole: "Contact"
            },
            toast: {
                keep: "Alert stays active — responders can track your location",
                cancelled: "Alert cancelled",
                contactAdded: "Contact added to your alert list"
            }
        }
        /* en:end */
    },

    /* ------------------------------------------------------
       ARABIC
    ------------------------------------------------------ */
    ar: {
        brand: {
            name: "معاك المغرب",
            short: "معاك",
            logoAlt: "شعار معاك المغرب",
            portal: "بوابة خدمات المواطن",
            kingdom: "المملكة المغربية",
            digitalIdentity: "الهوية الرقمية معاك"
        },

        common: {
            changeLanguage: "تغيير اللغة",
            toggleDarkMode: "تبديل الوضع الداكن",
            lightMode: "الوضع الفاتح",
            darkMode: "الوضع الداكن",
            openMenu: "فتح القائمة",
            closeMenu: "إغلاق القائمة",
            search: "بحث",
            notifications: "الإشعارات",
            yourProfile: "ملفك الشخصي",
            profilePhoto: "صورة الملف الشخصي",
            back: "رجوع",
            next: "التالي",
            cancel: "إلغاء",
            save: "حفظ",
            close: "إغلاق",
            confirm: "تأكيد",
            continue: "متابعة",
            skip: "تخطي",
            seeAll: "عرض الكل",
            viewAll: "عرض الكل",
            learnMore: "اعرف المزيد",
            showPassword: "إظهار كلمة المرور",
            hidePassword: "إخفاء كلمة المرور",
            backToHome: "العودة إلى الرئيسية",
            select: "اختر…",
            opening: "جارٍ فتح {name}…",
            mad: "درهم"
        },

        profile: {
            dob: "تاريخ الازدياد",
            gender: "الجنس",
            weight: "الوزن",
            motherTongue: "اللغة الأم",
            country: "بلد الإقامة",
            city: "المدينة",
            bloodType: "فصيلة الدم",
            allergies: "الحساسية",
            medications: "الأدوية الحالية",
            emergencyName: "اسم جهة الاتصال في حالات الطوارئ",
            relationship: "صلة القرابة",
            contactPhone: "هاتف جهة الاتصال",
            values: {
                female: "أنثى",
                male: "ذكر",
                preferNot: "أفضّل عدم الإفصاح",
                arabic: "العربية",
                amazigh: "الأمازيغية (تمازيغت)",
                french: "الفرنسية",
                english: "الإنجليزية",
                other: "أخرى",
                morocco: "المغرب",
                france: "فرنسا",
                spain: "إسبانيا",
                unknown: "غير معروفة"
            }
        },

        onboarding: {
            pageTitle: "أكمل ملفك الشخصي — معاك المغرب",
            title: "أكمل ملفك الشخصي",
            welcome: "مرحباً،",
            welcomeRest: "— لن يستغرق الأمر سوى دقيقة، ولن يُطلب منك ذلك مرة أخرى.",
            personal: "المعلومات الشخصية",
            weightPlaceholder: "مثال: 70 كلغ",
            location: "الموقع",
            cityPlaceholder: "مثال: أكادير",
            cityNote: "تُخصِّص مدينتك الخدمات عبر معاك — بما في ذلك خريطة صفحة الطوارئ للمستشفيات والصيدليات ومراكز الشرطة القريبة.",
            medical: "البطاقة الطبية وجهة الاتصال في حالات الطوارئ",
            allergiesPlaceholder: "مثال: البنسلين (اتركه فارغاً إن لم توجد)",
            medicationsPlaceholder: "مثال: لا شيء",
            relationPlaceholder: "مثال: الأم",
            phoneHint: "أرقام فقط — يمكنك استخدام + ( ) والمسافات والشرطات",
            skip: "تخطَّ الآن",
            finish: "إنهاء الإعداد",
            fillIn: "يرجى ملء حقل «{field}».",
            thisField: "هذا الحقل"
        },

        region: {
            pageTitle: "المنطقة غير مدعومة — معاك المغرب",
            title: "معاك متاح في المغرب فقط",
            text: "بناءً على البلد الذي اخترته في ملفك الشخصي، فإن خدمات المواطن في معاك المغرب غير متاحة لك بعد. لم يُحذف حسابك — يمكنك تحديث بلد إقامتك إن كان ذلك خطأً، أو تسجيل الخروج.",
            update: "تحديث بلدي",
            signOut: "تسجيل الخروج"
        },

        compte: {
            pageTitle: "جارٍ التوجيه إلى فضائي — معاك المغرب",
            moved: "نُقلت هذه الصفحة. جارٍ التوجيه إلى"
        },

        comingSoon: {
            pageTitle: "قريباً — معاك المغرب",
            title: "هذه الخدمة ستتوفر قريباً",
            text: "نعمل على إنشاء هذا الجزء من بوابة المواطن معاك. إنه غير متاح بعد، لكن باقي المنصة جاهز لتستكشفه.",
            backToMySpace: "العودة إلى فضائي",
            goBack: "رجوع",
            featureTitle: "«{feature}» قريباً",
            featureText: "نعمل على إنشاء قسم «{feature}» في بوابة المواطن معاك. إنه غير متاح بعد، لكن باقي المنصة جاهز لتستكشفه.",
            featurePageTitle: "{feature} — قريباً — معاك المغرب",
            features: {
                doctorDirectory: "دليل الأطباء",
                services: "الخدمات",
                allHousingServices: "جميع خدمات السكن"
            }
        },

        registry: {
            pageTitle: "الحالة المدنية — معاك المغرب",
            title: "الحالة المدنية",
            subtitle: "اطلب عقود الازدياد والزواج وشواهد السكنى، ودبِّر الدفتر العائلي لأسرتك.",
            searchLabel: "ابحث في خدمات الحالة المدنية",
            searchPlaceholder: "ابحث عن الشواهد والسجلات...",
            empty: "لا توجد خدمات تطابق بحثك.",
            ctaTitle: "تحتاجها بسرعة؟",
            ctaText: "تكون معظم الشواهد جاهزة للاستلام خلال 48 ساعة من تقديم طلبك.",
            ctaBtn: "تتبُّع طلبي",
            cards: {
                birth: "عقد الازدياد",
                birthText: "اطلب نسخة كاملة أو موجزاً رسمياً من عقد الازدياد.",
                marriage: "عقد الزواج",
                marriageText: "اطلب عقود الزواج وتحيين الدفتر العائلي.",
                residence: "شهادة السكنى",
                residenceText: "إثبات السكنى للإجراءات الإدارية والبنكية.",
                death: "شهادة الوفاة",
                deathText: "اطلب شواهد الوفاة للإجراءات القانونية وقضايا الإرث.",
                booklet: "الدفتر العائلي",
                bookletText: "حيِّن أو جدِّد دفترك العائلي الرسمي (Livret de Famille).",
                idRenewal: "تجديد البطاقة الوطنية",
                idRenewalText: "جدِّد أو عوِّض بطاقتك الوطنية للتعريف الإلكترونية CNIE.",
                nameChange: "طلبات تغيير الاسم",
                nameChangeText: "قدِّم طلبات قانونية لتصحيح بيانات الحالة المدنية.",
                archive: "أرشيف الحالة المدنية",
                archiveText: "ابحث في الأرشيف التاريخي للحالة المدنية والسجلات القديمة."
            },
            toast: { track: "جارٍ التحقق من حالة طلباتك قيد المعالجة…" }
        },

        interior: {
            pageTitle: "الداخلية — معاك المغرب",
            backToServices: "العودة إلى دليل الخدمات",
            title: "الداخلية",
            subtitle: "خدمات البطاقة الوطنية وجوازات السفر وبطاقات الإقامة التابعة لوزارة الداخلية.",
            searchLabel: "ابحث في خدمات الداخلية",
            searchPlaceholder: "ابحث في خدمات الداخلية...",
            ctaTitle: "تجدِّد جواز سفرك؟",
            ctaText: "احجز موعداً في أقرب عمالة إليك لتفادي الانتظار.",
            ctaBtn: "احجز موعداً",
            cards: {
                passport: "طلب جواز السفر",
                passportText: "اطلب جواز سفر بيومترياً جديداً أو جدِّد جوازك الحالي.",
                residence: "بطاقات الإقامة",
                residenceText: "طلبات بطاقة الإقامة (Carte de séjour) وتجديدها للمقيمين الأجانب.",
                nationalId: "البطاقة الوطنية للتعريف (CNIE)",
                nationalIdText: "الإصدار لأول مرة وتتبُّع حالة بطاقتك CNIE.",
                localAuth: "التسجيل لدى السلطة المحلية",
                localAuthText: "سجِّل أسرتك لدى جماعتك أو مقاطعتك.",
                gathering: "تراخيص التجمعات العمومية",
                gatheringText: "طلبات الترخيص للتظاهرات والتجمعات العمومية.",
                civilProtection: "الوقاية المدنية",
                civilProtectionText: "معاينات السلامة من الحرائق وطلبات خدمات الوقاية المدنية."
            },
            toast: { appointment: "جارٍ تحميل المواعيد المتاحة…" }
        },

        housing: {
            pageTitle: "خدمات السكن والعقار — معاك المغرب",
            title: "خدمات السكن والعقار",
            subtitle: "استفد من برامج الدعم الحكومي للسكن، والرسوم العقارية، وخدمات التعمير في جميع أنحاء المغرب.",
            verified: "مزوِّد رسمي للخدمة العمومية • موثَّق من العمران والوكالة الوطنية للمحافظة العقارية",
            filters: {
                all: "جميع الخدمات",
                aid: "دعم السكن (الدعم المباشر)",
                deeds: "المحافظة العقارية والرسوم العقارية",
                leases: "عقود الكراء المصادق عليها",
                permits: "رخص البناء ومنصة رخص"
            },
            directAid: "دعم مباشر من الدولة",
            daamHeading: "دعم السكن <span class=\"feature-heading-sub\">(Daam Sakane)</span>",
            daamText: "تحقَّق من أهليتك للحصول على دعم مالي مباشر يصل إلى 100,000 درهم لاقتناء السكن الرئيسي في جميع جهات المملكة.",
            applySubsidy: "قدِّم طلب الدعم",
            conservation: "المحافظة العقارية",
            muhafadatiHeading: "محافظتي <span class=\"feature-heading-sub\">(Muhafadati)</span> — ANCFCC",
            muhafadatiText: "احمِ عقارك بإشعارات فورية عبر الرسائل القصيرة أو البريد الإلكتروني عند أي معاملة على الرسم العقاري أو تقييد رهن أو تعديل مساحي.",
            manageDeeds: "تدبير الرسوم العقارية",
            essentialTitle: "الخدمات الأساسية للعقار والسكن",
            essentialSub: "إجراءات رسمية معتمدة من الوزارات والجماعات المغربية",
            seeAll: "عرض الكل (18)",
            empty: "لا توجد خدمات تطابق هذا التصنيف.",
            cards: {
                aidRating: "4.9 موثَّق",
                aid: "دعم السكن الرئيسي",
                aidMeta: "تغطية وطنية • العمران",
                aidAmount: "مبلغ الدعم",
                aidBtn: "محاكاة الدعم",
                deedsCat: "المسح العقاري والرسوم",
                deeds: "شهادة الملكية الإلكترونية",
                deedsMeta: "إصدار عبر الإنترنت • حجية قانونية",
                deedsFee: "الرسم الرسمي",
                deedsBtn: "اطلب نسخة PDF",
                permitsRating: "4.8 رخص",
                permitsCat: "التعمير",
                permits: "رخصة البناء والإصلاح",
                permitsMeta: "الجماعة والوكالة الحضرية",
                permitsProcessing: "مدة المعالجة",
                days: "يوماً",
                permitsBtn: "تتبُّع الملف",
                leasesRating: "4.9 قانوني",
                leasesCat: "سجل الكراء",
                leases: "عقد كراء مصادق عليه",
                leasesMeta: "حماية ضريبية وقانونية",
                leasesStamp: "الختم القانوني",
                digital: "رقمي",
                eSignature: "توقيع إلكتروني",
                leasesBtn: "سجِّل عقد الكراء"
            },
            partnersTitle: "شركاء مؤسساتيون موثَّقون",
            partnersText: "بتنسيق مع مجموعة العمران، والوكالة الوطنية للمحافظة العقارية والمسح العقاري والخرائطية، ووزارة إعداد التراب الوطني والتعمير والإسكان وسياسة المدينة.",
            pills: {
                privacy: "حماية المعطيات (القانون 09-08)",
                legal: "الحجية القانونية (القانون 43-20)",
                payment: "أداء آمن عبر CMI"
            },
            actions: {
                subsidy: "طلب دعم السكن",
                deeds: "تتبُّع الرسوم العقارية عبر محافظتي",
                simulate: "محاكاة دعم السكن",
                pdf: "طلب شهادة الملكية بصيغة PDF",
                permit: "تتبُّع ملف الرخصة عبر رخص",
                lease: "تسجيل عقد الكراء المصادق عليه"
            }
        },

        home: {
            pageTitle: "الرئيسية — معاك المغرب",
            primaryNav: "القائمة الرئيسية",
            primaryNavMobile: "القائمة الرئيسية للهاتف",
            about: "حول المنصة",
            features: "المزايا",
            services: "الخدمات",
            help: "المساعدة",
            myProfile: "ملفي الشخصي",
            myDocuments: "وثائقي",
            settings: "الإعدادات",
            badge: "جديد: دمج الهوية الرقمية",
            heroTitle: "بوابتك إلى",
            heroAccent: "المغرب الرقمي.",
            heroText: "استفد من الخدمات الحكومية، ودبِّر أداءاتك، وابقَ على تواصل مع مجتمعك عبر تجربة مواطن سلسة ومتميزة مصمَّمة للمستقبل.",
            howItWorks: "كيف تعمل المنصة",
            viewAllServices: "عرض جميع الخدمات",
            trust: "يثق بها ملايين المواطنين في جميع أنحاء المملكة.",
            heroAlt: "المغرب الرقمي",
            lastTransaction: "آخر معاملة",
            lastAmount: "⁦+1,240⁩ درهم",
            stats: {
                users: "مستخدم نشط",
                services: "خدمة عمومية",
                uptime: "موثوقية التشغيل",
                support: "دعم متخصص"
            },
            superTitle: "كل ما تحتاجه في تطبيق واحد شامل",
            superText: "وحَّدنا تجربة المواطن بجمع الخدمات المتفرقة في منظومة واحدة عالية الأداء.",
            idTitle: "هوية رقمية آمنة",
            idText: "يضمن معيار الهوية المغربية حماية بياناتك بأحدث تقنيات التشفير والتحقق البيومتري.",
            learnSecurity: "تعرَّف على الأمان",
            payTitle: "أداءات فورية",
            payText: "أدِّ فواتير الخدمات والضرائب والرسوم الدراسية في أقل من 10 ثوانٍ مع M3ak Pay.",
            transportTitle: "نقل ذكي",
            transportText: "تتبُّع آني لقطارات ONCF وحافلات CTM والحافلات الحضرية في كل المدن الكبرى.",
            healthTitle: "صحة مندمجة",
            healthText: "زامِن ملفك الطبي مع AMO/CNOPS واحجز مواعيدك فوراً لدى مقدِّمي الخدمات الصحية الوطنيين.",
            exploreHealth: "استكشف بوابة الصحة",
            servicesTitle: "استكشف الخدمات العمومية",
            servicesText: "وصول مباشر إلى أكثر من 180 إجراءً إدارياً وخدمة للمواطن.",
            reviewsTitle: "ماذا يقول المواطنون",
            viewReviews: "عرض جميع الآراء",
            fiveStars: "5 من أصل 5 نجوم",
            quote1: "«أخيراً تطبيق يعمل بكفاءة مثلنا. لم يكن أداء الفواتير وتجديد جواز سفري بهذه السهولة من قبل.»",
            quote2: "«ميزة الهوية الرقمية نقلة نوعية لطلبة الجامعات. كل شيء صار في جيبي الآن.»",
            reviewers: {
                ahmed: "أحمد ر.",
                ahmedRole: "مقيم في الدار البيضاء",
                sara: "سارة ب.",
                saraRole: "طالبة، الرباط",
                nora: "نورة ب.",
                noraRole: "طالبة، طنجة",
                hafid: "حفيظ ك.",
                hafidRole: "طالب، أكادير"
            }
        },

        overview: {
            pageTitle: "فضائي — معاك المغرب",
            menu: {
                personal: "المعلومات الشخصية",
                account: "إعدادات الحساب"
            },
            welcome: "مرحباً بعودتك،",
            welcomeRest: ". خدماتك وطلباتك ومواعيدك وحسابك في مكان واحد.",
            tabsLabel: "أقسام فضائي",
            tabs: {
                dashboard: "لوحة القيادة",
                requests: "طلباتي",
                appointments: "المواعيد",
                personal: "المعلومات الشخصية",
                account: "الحساب"
            },
            kpi: {
                requests: "الطلبات الجارية",
                paid: "المؤدّى هذا الشهر",
                paidValue: "691 درهم",
                appointments: "المواعيد القادمة",
                documents: "الوثائق"
            },
            transport: {
                title: "الحالة المباشرة للنقل العمومي",
                viewMap: "عرض الخريطة",
                live: "مباشر الآن",
                tram: "ترامواي T1",
                tramTowards: "الاتجاه: الحسن الثاني",
                boraq: "البراق 104",
                boraqTowards: "الاتجاه: طنجة المدينة",
                arriving: "يصل الآن",
                min: "د"
            },
            map: {
                title: "خريطة الشبكة المباشرة",
                waiting: "في انتظار تحديد موقعك…",
                close: "إغلاق الخريطة",
                locate: "حدِّد موقعي",
                follow: "تتبُّع موقعي",
                external: "فتح في خرائط Google",
                showing: "عرض شبكة النقل المباشرة",
                locating: "جارٍ تحديد موقعك…"
            },
            nextAppt: "الموعد القادم",
            activity: {
                title: "نشاطك",
                sub: "التفاعلات مع الخدمات العمومية · آخر 7 أيام",
                total: "24 إجمالاً"
            },
            openWallet: "فتح المحفظة",
            requestsShort: "الطلبات",
            open: "فتح",
            quick: {
                title: "خدمات سريعة للمواطن",
                civil: "الحالة المدنية",
                driving: "رخصة السياقة",
                tax: "الضريبة العقارية",
                social: "الضمان الاجتماعي"
            },
            requests: {
                title: "طلبات الخدمات",
                sub: "كل طلب إداري فتحته عبر معاك.",
                "new": "طلب جديد"
            },
            appointments: {
                sub: "الزيارات القادمة للإدارات العمومية والمصحات.",
                add: "إضافة موعد",
                none: "لا يوجد موعد قادم."
            },
            fields: { address: "العنوان البريدي" },
            edit: {
                fullName: "تعديل الاسم الكامل",
                email: "تعديل البريد الإلكتروني",
                phone: "تعديل رقم الهاتف",
                address: "تعديل العنوان البريدي",
                city: "تعديل المدينة",
                country: "تعديل البلد"
            },
            saveChanges: "حفظ التغييرات",
            cin: {
                title: "بطاقة التعريف الرقمية",
                active: "نشطة",
                number: "رقم البطاقة",
                expiry: "تاريخ انتهاء الصلاحية",
                details: "عرض التفاصيل",
                renew: "تجديد الوثيقة"
            },
            security: {
                title: "الأمان",
                lastChanged: "آخر تغيير قبل 3 أشهر",
                update: "تحديث",
                updatePassword: "تحديث كلمة المرور",
                twoFactor: "المصادقة الثنائية (2FA)",
                enabled: "مفعَّلة",
                manage: "تدبير",
                manage2fa: "تدبير المصادقة الثنائية",
                biometric: "الدخول البيومتري",
                biometricSub: "Face ID أو البصمة",
                toggleBiometric: "تفعيل أو إيقاف الدخول البيومتري"
            },
            preferences: {
                title: "التفضيلات",
                language: "لغة المنصة",
                email: "إشعارات البريد الإلكتروني",
                sms: "تنبيهات الرسائل القصيرة",
                push: "الإشعارات الفورية"
            },
            signout: {
                title: "تسجيل الخروج من هذا الجهاز",
                sub: "ستحتاج إلى تسجيل الدخول مجدداً للوصول إلى فضائك."
            },
            status: {
                confirmed: "مؤكَّد",
                pending: "قيد الانتظار",
                cancelled: "ملغى",
                approved: "مقبول",
                inReview: "قيد الدراسة",
                pendingDocs: "وثائق ناقصة",
                rejected: "مرفوض",
                actionNeeded: "يتطلب إجراءً"
            },
            months: { OCT: "أكتوبر", NOV: "نونبر" },
            days: { Mon: "الإثنين", Tue: "الثلاثاء", Wed: "الأربعاء", Thu: "الخميس", Fri: "الجمعة", Sat: "السبت", Sun: "الأحد" },
            appts: {
                a1: { title: "تجديد البطاقة الوطنية", place: "مكتب العمالة" },
                a2: { title: "فحص طبي", place: "مستشفى ابن سينا" },
                a3: { title: "صورة جواز السفر", place: "الملحقة الإدارية" }
            },
            payments: {
                p1: { label: "ريضال — الماء والكهرباء", date: "12 أكتوبر 2026" },
                p2: { label: "اتصالات المغرب", date: "05 أكتوبر 2026" },
                p3: { label: "تذاكر الجامعة الملكية المغربية لكرة القدم", date: "28 شتنبر 2026" }
            },
            requestsData: {
                r1: { title: "تجديد البطاقة الوطنية", dept: "الداخلية — الحالة المدنية", date: "18 أكتوبر 2026" },
                r2: { title: "طلب دعم السكن", dept: "السكن", date: "09 أكتوبر 2026" },
                r3: { title: "منحة جامعية", dept: "التعليم", date: "28 شتنبر 2026" },
                r4: { title: "رخصة تجارية", dept: "المالية", date: "15 شتنبر 2026" }
            },
            toast: {
                locating: "جارٍ تحديد موقعك",
                following: "جارٍ تتبُّع موقعك",
                stopFollowing: "تم إيقاف تتبُّع موقعك",
                apptAdded: "تمت إضافة الموعد إلى جدولك",
                newRequest: "جارٍ فتح استمارة طلب خدمة جديدة",
                comingSoon: "{name} — قريباً",
                saved: "تم حفظ المعلومات الشخصية"
            }
        },

        jobs: {
            pageTitle: "بوابة التشغيل — معاك المغرب",
            topSearchLabel: "ابحث في الخدمات أو الملفات أو السجلات",
            topSearchPlaceholder: "ابحث في الخدمات أو الملفات أو السجلات…",
            breadcrumb: "التشغيل العمومي والمباريات",
            breadcrumbHere: "البوابة الوطنية للتوظيف",
            title: "بوابة التشغيل والتوظيف",
            subtitle: "استفد من مباريات الوظيفة العمومية المغربية وفرص القطاع الخاص الموثَّقة بهويتك الرقمية المصادق عليها CNIE.",
            digitalCv: "سيرة ذاتية رقمية مصادق عليها",
            jobAlert: "إنشاء تنبيه وظيفي",
            keywordLabel: "المسمى الوظيفي أو كلمة مفتاحية",
            keywordPlaceholder: "مهندس دولة، موظف عمومي، مطوِّر…",
            region: "الجهة",
            allRegions: "جميع الجهات",
            regions: {
                rabat: "الرباط - سلا - القنيطرة",
                casablanca: "الدار البيضاء - سطات",
                tangier: "طنجة - تطوان - الحسيمة",
                marrakech: "مراكش - آسفي",
                remote: "عن بُعد"
            },
            sector: "القطاع",
            allSectors: "جميع القطاعات",
            categories: {
                publicService: "الوظيفة العمومية (المباريات)",
                tech: "التكنولوجيا والاتصالات",
                health: "الصحة العمومية",
                finance: "المالية والجمارك",
                transport: "النقل واللوجستيك",
                education: "التربية والتعليم",
                civil: "الأمن المدني والموارد البشرية"
            },
            filter: "تصفية",
            popularTags: "وسوم شائعة",
            tags: {
                mef: "مباراة وزارة الاقتصاد والمالية",
                grade11: "السلم 11 / مهندسو الدولة",
                administrators: "متصرفون من الدرجة الثانية",
                health: "مهن الصحة",
                oneClick: "الترشُّح بنقرة واحدة"
            },
            concours: {
                badge: "الوظيفة العمومية + التشغيل",
                tag: "محدَّث",
                title: "المباراة الوطنية الموحَّدة للتوظيف",
                text: "ترشَّح لمناصب الوظيفة العمومية عبر البوابة الوطنية — ترشيح واحد وتحقُّق بيومتري بالبطاقة الوطنية.",
                positions: "منصب مفتوح",
                deadlineValue: "15 نونبر",
                deadline: "آخر أجل 2026",
                eligible: "مؤهَّل بالبطاقة الوطنية",
                validation: "حالة المصادقة",
                open: "افتح ترشيحي",
                guide: "عرض الدليل المرجعي"
            },
            accelerator: {
                badge: "شراكة مع القطاع الخاص",
                tag: "موثَّق",
                title: "مسرِّع التشغيل والأجور الموثَّقة",
                text: "عقود دائمة موثَّقة، وأجور شفافة، واشتراكات مضمونة في الصندوق الوطني للضمان الاجتماعي لدى شركائنا المعتمدين.",
                offers: "عرض موثَّق",
                salary: "متوسط الأجر (درهم)",
                permanent: "دائم 100%",
                cnss: "مصرَّح به في CNSS",
                explore: "استكشف العروض المعتمدة"
            },
            latest: "أحدث الفرص الموثَّقة",
            matchCount: " منصباً يطابق بحثك",
            sortBy: "ترتيب حسب",
            sort: {
                relevance: "الأهمية (افتراضي)",
                salary: "الأجر (الأعلى أولاً)",
                recent: "تاريخ النشر"
            },
            tabs: {
                label: "التصفية حسب نوع المشغِّل",
                all: "الكل",
                public: "المباريات العمومية",
                private: "القطاع الخاص والشركات متعددة الجنسيات"
            },
            pagination: "ترقيم الصفحات",
            rail: {
                applications: "ترشيحاتي الجارية",
                inProgress: "3 قيد المعالجة",
                history: "عرض السجل الكامل للمباريات",
                tools: "أدوات التحضير لمباريات الوظيفة العمومية"
            },
            skills: {
                title: "جواز كفاءاتي CNIE",
                text: "يتم التحقق من سجلاتك الأكاديمية والمهنية مباشرة من طرف السجلات الحكومية الرسمية.",
                diploma: "دبلوم مهندس دولة",
                diplomaSub: "موثَّق من طرف وزارة التعليم العالي",
                record: "مستخرج السجل العدلي (البطاقة رقم 3)",
                recordSub: "سجل نظيف، مصادق عليه من طرف وزارة العدل",
                cnss: "شهادة CNSS وسجل الأجور",
                cnssSub: "62 شهراً من الاشتراكات الموثَّقة",
                qr: "إنشاء رمز QR للتحقق لدى المشغِّل"
            },
            sectorsTitle: "استكشف المهن حسب الوزارة والقطاع",
            sectorsMeta: "12 قطاعاً وزارياً مرتبطاً",
            jobTags: {
                open: "منصب مفتوح",
                cnie: "البطاقة الوطنية مطلوبة",
                master: "الماستر مطلوب",
                noOral: "بدون مقابلة شفوية",
                "new": "جديد",
                permanent: "عقد دائم موثَّق",
                hybrid: "عمل هجين عن بُعد"
            },
            card: {
                applyPublic: "ترشَّح الآن",
                applyPrivate: "ترشَّح بملف معاك",
                perMonth: "درهم / شهرياً",
                cnie: "ترشَّح بنقرة واحدة عبر البطاقة الوطنية",
                cnss: "مصرَّح به 100% في CNSS",
                save: "حفظ",
                contests: "{n} مباراة",
                empty: "لا توجد مناصب تطابق معايير التصفية حالياً.",
                showing: "عرض {from} إلى {to} من أصل {total} فرصة نشطة",
                previous: "السابق"
            },
            data: {
                j1: {
                    org: "وزارة الاقتصاد والمالية",
                    title: "مهندس دولة رئيس — أمن نظم المعلومات والسحابة السيادية",
                    desc: "قيادة استراتيجية الأمن السيبراني والانتقال إلى السحابة السيادية المغربية للأنظمة الوزارية الحيوية.",
                    salaryNote: "السلم 11 · الرقم الاستدلالي 509",
                    pill: "يُغلق خلال 4 أيام (10 نونبر 2026)",
                    ref: "مرجع المباراة: MEF-2026-ING-04",
                    posted: "نُشر قبل يومين",
                    deadline: "ترشَّح قبل 20 نونبر",
                    location: "الرباط · الحي الإداري"
                },
                j2: {
                    org: "وزارة الصحة والحماية الاجتماعية",
                    title: "طبيب أخصائي من الدرجة الأولى — المركز الاستشفائي الجامعي ابن سينا والمركز الاستشفائي الجامعي بطنجة",
                    desc: "منصب طبيب أخصائي رسمي ملحق بشبكة المستشفيات الجامعية، مع إمكانية التعيين المزدوج.",
                    salaryNote: "النظام الأساسي الخاص بالأطباء",
                    pill: "مفتوح حتى 28 نونبر 2026",
                    ref: "مرجع المباراة: MSPS-CHU-2026",
                    posted: "نُشر قبل 4 أيام",
                    deadline: "ترشَّح قبل 28 نونبر",
                    location: "الرباط · المركز الاستشفائي الجامعي ابن سينا"
                },
                j3: {
                    org: "القطب المالي للدار البيضاء — القطب التكنولوجي",
                    title: "قائد تقني أول Fullstack (React، Node.js، Go) — قطب التكنولوجيا المالية",
                    desc: "قيادة فريق منتج Fullstack داخل قطب للتكنولوجيا المالية معتمد من القطب المالي للدار البيضاء، مع أجر وامتيازات مصرَّح بها بالكامل في CNSS.",
                    salaryNote: "حزمة سنوية مضمونة",
                    pill: "قطاع خاص موثَّق من معاك",
                    posted: "نُشر قبل 6 ساعات",
                    deadline: "الترشيحات مفتوحة",
                    location: "الدار البيضاء · برج CFC"
                },
                j4: {
                    org: "غرفة الجمارك — اللوجستيك الدولي",
                    title: "مدير العمليات المينائية وسلسلة الإمداد البحرية",
                    desc: "الإشراف على العمليات المينائية وسلسلة اللوجستيك الدولية لدى فاعل رئيسي في التجارة البحرية.",
                    salaryNote: "حزمة الأطر العليا",
                    pill: "عقد دائم فوري (CDI)",
                    posted: "نُشر قبل يوم",
                    deadline: "ترشَّح قبل 5 دجنبر",
                    location: "طنجة المتوسط · المنطقة المينائية"
                }
            },
            applications: {
                a1: {
                    org: "وزارة المالية",
                    title: "مدير مشروع الرقمنة",
                    meta: "المقابلة: 18 نونبر 2026 بالرباط",
                    status: "الامتحان الشفوي",
                    action: "استدعاء PDF"
                },
                a2: {
                    org: "الوكالة الوطنية للموانئ (ANP)",
                    title: "مدقِّق نظم المعلومات",
                    meta: "انتقاء أولي مُصادَق عليه على أساس الشهادة",
                    status: "ملف مقبول",
                    action: "تتبُّع"
                },
                a3: {
                    org: "اتصالات المغرب",
                    title: "مهندس حلول سحابية",
                    meta: "أُحيل على القسم التقني",
                    status: "دراسة الموارد البشرية",
                    action: "التفاصيل"
                }
            },
            tools: {
                pastPapers: "امتحانات سابقة وأسئلة متعددة الاختيارات (السلم 10 و11)",
                simulator: "محاكي المقابلة الشفوية بالذكاء الاصطناعي من معاك",
                law: "القانون الإداري والدستور المغربي"
            },
            toast: {
                opening: "جارٍ فتح — {name}…",
                apply: "تم إطلاق ترشيح آمن لـ«{title}» — جارٍ التحقق عبر البطاقة الوطنية…",
                saved: "تمت إضافة «{title}» إلى مفضلتك",
                matches: "{n} منصباً يطابق بحثك",
                filtering: "التصفية حسب {name}",
                cv: "جارٍ إنشاء سيرتك الذاتية الرقمية المصادق عليها…",
                alert: "تم إنشاء التنبيه — سنُعلمك بالعروض المطابقة",
                sector: "عرض قطاع {name}",
                history: "جارٍ فتح السجل الكامل لترشيحاتك…",
                qr: "جارٍ إنشاء رمز QR آمن للتحقق…",
                concours: "جارٍ فتح ترشيحك في المباراة الوطنية الموحَّدة…",
                referentiel: "جارٍ فتح الدليل المرجعي لمناصب المباراة…",
                accelerator: "جارٍ فتح عروض القطاع الخاص المعتمدة…",
                more: "تعرَّف أكثر على مسرِّع التشغيل…"
            }
        },

        education: {
            pageTitle: "التعليم — معاك المغرب",
            ministry: "وزارة التربية الوطنية والتعليم الأولي والرياضة · MESRSI",
            portalBadge: "البوابة الوطنية الموحَّدة مسار ومنحتي",
            legalRef: "المرجع القانوني: الظهير رقم 1-20-80 (القانون 43-20)",
            citizenSpace: "فضاء المواطن · التعليم الوطني والعالي",
            title: "خدمات التعليم والتعليم العالي",
            subtitle: "بوابة موحَّدة للتسجيل المدرسي الوطني، وتتبُّع التلاميذ عبر مسار، والتسجيل القبلي بالجامعات، والمنح (منحتي)، والشهادات المصادق عليها من بريد المغرب.",
            bacCert: "شهادة البكالوريا",
            newDossier: "ملف جديد",
            session: "دورة 2026/2027 · مفتوحة",
            rsuConnected: "مرتبط بالسجل الاجتماعي الموحَّد",
            minhatyTitle: "المنحة الوطنية منحتي (Minhaty)",
            minhatyText: "تقديم مباشر للطلب وتتبُّع آلي للأهلية لمنح التعليم العالي حتى 6,334 درهم سنوياً، بالاعتماد على السجل الاجتماعي الموحَّد (RSU).",
            deadline: "آخر أجل للإيداع",
            deadlineValue: "31 يوليوز 2027",
            eligibility: "شروط الأهلية",
            apply: "تحقَّق من الأهلية وقدِّم طلبك",
            schoolYear: "الموسم الدراسي 2026–2027",
            massarSynced: "رمز مسار متزامن",
            massarTitle: "بوابة التلميذ مسار وتوجيهي",
            massarText: "كشوف النقط الرسمية، والمراقبة المستمرة، وتتبُّع البكالوريا الوطنية، والتوجيه الجامعي الآلي.",
            preBac: "طلبات ما قبل البكالوريا",
            wishes: "4 رغبات مقدَّمة",
            transcripts: "كشوف النقط والنتائج",
            dossier: "ولوج ملف التلميذ",
            student: {
                name: "ياسين العلوي",
                active: "نشط",
                meta: "رمز مسار: R130094821 · ثانوية ابن زهر، أكادير",
                cnie: "البطاقة الوطنية موثَّقة (BE492019)",
                year: "السنة الثانية",
                cycle: "السلك الدراسي · البكالوريا، العلوم الرياضية أ",
                average: "المعدل العام (الأسدس 1) · الميزة: حسن جداً",
                validated: "مُصادَق عليها",
                scholarship: "منحة منحتي · المؤدّى: 1,900 درهم (الدفعة الأولى)"
            },
            progress: {
                title: "تقدُّم القبول في توجيهي 2027",
                status: "المرحلة 3 من 4 · تأكيد اللائحة الرئيسية",
                filed: "إيداع الطلب",
                review: "دراسة الملف",
                confirmation: "تأكيد المقعد",
                registration: "التسجيل الإداري"
            },
            calendar: {
                title: "الأجندة الدراسية",
                official: "رسمي",
                jun: "يونيو",
                jul: "يوليوز",
                aug: "غشت",
                bac: "امتحانات البكالوريا الوطنية",
                bacSub: "جميع المسالك، الدورة العادية",
                ensa: "مباريات ولوج ENSA / ENSAM / ENCG",
                ensaSub: "منصة الانتقاء الأولي الموحَّدة",
                ofppt: "آخر أجل للتسجيل في OFPPT ومدن المهن",
                ofpptSub: "برامج التكوين المهني التأهيلية",
                sync: "مزامنة الأجندة الحكومية"
            },
            servicesTitle: "أهم الخدمات الإدارية للتعليم",
            servicesSub: "بوابات حكومية رسمية مترابطة عبر الإطار الوطني للهوية الرقمية.",
            cnieRequired: "يتطلب المصادقة بالبطاقة الوطنية",
            services: {
                enrollment: "التسجيل المدرسي (مسار)",
                enrollmentText: "سجِّل التلاميذ الجدد في المؤسسات العمومية الابتدائية والثانوية وانقل الملفات الدراسية بين المديريات الإقليمية.",
                enrollmentLink: "بوابة الابتدائي والإعدادي",
                equivalence: "المعادلة والشهادات",
                equivalenceText: "التحقق الرقمي من الشهادات، والمصادقة بالأبوستيل، ومعادلة الشهادات الأجنبية مع رموز QR رسمية من بريد المغرب.",
                equivalenceLink: "ختم إلكتروني آمن",
                university: "التسجيل القبلي بالجامعات",
                universityText: "طلبات موحَّدة للجامعات العمومية المغربية، ومدارس المهندسين (ENSA، ENSAM)، وكليات الطب (FMP/FMD)، ومدارس التجارة (ENCG).",
                vocational: "التكوين المهني (OFPPT)",
                vocationalText: "التسجيل في دبلومات التقني المتخصص (TS)، ومدن المهن والكفاءات (CMC)، والمؤهلات المهنية المعترف بها.",
                vocationalLink: "OFPPT تكوين 2027"
            },
            requestsTitle: "الطلبات الجارية والسجلات الدراسية الرقمية",
            requestsSub: "مرتبط مباشرة بالمنظومة المعلوماتية للتربية الوطنية (منظومة مسار).",
            showing: "المعروض: جميع الإجراءات (3)",
            table: {
                reference: "الملف / المرجع",
                beneficiary: "المستفيد",
                service: "نوع الخدمة",
                date: "تاريخ الإيداع",
                status: "الحالة",
                action: "الإجراء",
                son: "ياسين العلوي (الابن)",
                holder: "مريم العلوي (صاحبة الشهادة)",
                r1Service: "المنحة الوطنية منحتي – السلك الأول",
                r1Date: "14 يناير 2027",
                r1Status: "مُصادَق عليها + تحويل بنكي",
                consult: "اطلاع",
                r2Service: "معادلة الماستر المتخصص (MESRSI)",
                r2Date: "03 دجنبر 2026",
                r2Status: "الشهادة الرقمية جاهزة",
                downloadQr: "تحميل رمز QR",
                r3Service: "طلب ولوج ENSA الرباط / طنجة",
                r3Date: "18 فبراير 2027",
                r3Status: "في انتظار نقط الأسدس الثاني للبكالوريا",
                editWishes: "تعديل الرغبات"
            },
            disclaimer: "بوابة تُسيَّر تحت الإشراف المشترك للدولة المغربية، ومطابقة للقانون رقم 09-08 المتعلق بحماية المعطيات الشخصية (CNDP) والقانون رقم 43-20 المتعلق بخدمات الثقة بشأن المعاملات الإلكترونية.",
            cndpRef: "مرجع CNDP: A-S-102/2023",
            assistance: "المساعدة المخصَّصة 0800",
            actions: {
                bac: "جارٍ إعداد شهادة البكالوريا…",
                newDossier: "جارٍ إنشاء ملف جديد…",
                eligibility: "جارٍ فتح شروط الأهلية…",
                minhaty: "جارٍ فتح طلب منحتي…",
                transcripts: "جارٍ فتح كشوف النقط والنتائج…",
                dossier: "جارٍ فتح ملف التلميذ…",
                sync: "جارٍ مزامنة أجندتك الحكومية…",
                enrollment: "جارٍ فتح التسجيل المدرسي (مسار)…",
                equivalence: "جارٍ فتح المعادلة والشهادات…",
                university: "جارٍ فتح التسجيل القبلي بالجامعات…",
                vocational: "جارٍ فتح التكوين المهني (OFPPT)…",
                consult: "جارٍ فتح الملف MHT-2027-89412…",
                qr: "جارٍ تحميل شهادة QR للملف EQV-2026-55021…",
                wishes: "جارٍ تعديل الرغبات للملف TWJ-2027-01039…",
                assistance: "جارٍ توصيلك بالمساعدة المخصَّصة…"
            }
        },

        transport: {
            pageTitle: "النقل — معاك المغرب",
            whereTo: "إلى أين؟",
            swap: "تبديل نقطة الانطلاق والوجهة",
            startingPoint: "نقطة الانطلاق",
            currentLocationAlt: "الموقع الحالي",
            currentLocation: "موقعي الحالي",
            destination: "الوجهة",
            destinationPlaceholder: "الوجهة — أو مثلاً: إنزكان إلى السلام",
            modes: { bus: "حافلة", tram: "ترامواي", train: "قطار", taxi: "طاكسي" },
            modeNames: { bus: "الحافلة", tram: "الترامواي", train: "القطار", taxi: "الطاكسي" },
            findRoutes: "ابحث عن المسارات",
            chips: { home: "المنزل", office: "المكتب", marina: "مارينا مول" },
            liveTracking: "التتبُّع المباشر",
            liveTrackingSub: "المسارات النشطة في منطقتك",
            fastPass: "بطاقة التنقل السريع",
            fastPassSub: "تنقُّل غير محدود لمدة 24 ساعة",
            buyNow: "اشترِ الآن",
            buyTicket: "اشترِ تذكرة",
            operator: "حافلات ألزا الحضرية",
            busLine: "حافلة {n}",
            nextStop: "المحطة التالية: {stop}",
            minutes: "{n} د",
            arrow: "←",
            youAreHere: "أنت هنا",
            status: { onTime: "في الموعد", delay: "تأخير 5 د" },
            stops: {
                talborjt: "تالبرجت",
                marina: "مارينا أكادير",
                founty: "فونتي",
                bensergao: "بنسركاو",
                dcheira: "الدشيرة",
                alHouda: "الهدى",
                gare: "المحطة الطرقية أكادير"
            },
            alert: {
                line: "الخط {n} — الوصول قريباً",
                detail: "يصل خلال {n} د إلى {stop}",
                track: "تتبَّع مباشرة"
            },
            toast: {
                swapped: "تم تبديل نقطة الانطلاق والوجهة",
                noDestination: "أدخل وجهة لعرض المسارات",
                searching: "جارٍ البحث عن مسارات {mode} نحو {dest}",
                tracking: "جارٍ تتبُّع الخط L12 مباشرة",
                noGeolocation: "تحديد الموقع غير مدعوم على هذا الجهاز",
                locationUnavailable: "الموقع غير متاح — عرض {city}",
                passAdded: "تمت إضافة بطاقة التنقل السريع إلى سلتك — 30 درهم",
                ticket: "جارٍ فتح شراء التذاكر"
            },
            route: {
                mapTitle: "خرائط Google",
                transitTitle: "مسار بالنقل العمومي",
                roadTitle: "مسار عبر الطريق",
                embedTitle: "المسار على خرائط Google",
                problemTitle: "لا يوجد مسار لعرضه",
                noTransit: "لا تتوفر خرائط Google على بيانات الحافلات أو الترامواي لهذه الرحلة، لذلك يُعرض المسار عبر الطريق.",
                embedNote: "أضف مفتاح Google Maps API في الملف js/config.js لرسم الخط على هذه الخريطة وعرض مراحل الحافلة.",
                loadError: "تعذّر تحميل خرائط Google — تُعرض الخريطة البسيطة بدلاً منها.",
                notFound: "لم يُعثر على مسار من {from} إلى {to}.",
                error: "تعذّر حساب المسار حالياً. افتحه في خرائط Google بدلاً من ذلك.",
                ride: "ركوب",
                walk: "مشي",
                toward: "في اتجاه {headsign}",
                stops: "عدد المحطات: {n}",
                openInGoogle: "افتح في خرائط Google",
                clear: "مسح المسار",
                unavailableTitle: "غير متوفر في أكادير",
                unavailable: "خدمات القطار والترامواي غير متوفرة حالياً في أكادير. اختر الحافلة أو الطاكسي لتخطيط رحلتك."
            }
        },

        assistant: {
            pageTitle: "المساعد الذكي — معاك المغرب",
            title: "المساعد الصوتي الذكي",
            subtitle: "تحدَّث بشكل طبيعي مع معاك لتدبير هويتك الرقمية وخدماتك.",
            chips: {
                profile: "افتح ملفي الشخصي",
                identity: "حالة الهوية الرقمية",
                transactions: "اعرض آخر المعاملات"
            },
            startVoice: "ابدأ محادثة صوتية",
            micUnavailable: "المساعد الصوتي غير متاح",
            stats: {
                conversations: "محادثة",
                talkTimeValue: "2.4 س",
                talkTime: "مدة المحادثة",
                satisfaction: "نسبة الرضا"
            },
            transcript: "النص المباشر لمحادثة معاك",
            placeholder: "اكتب رسالة أو تحدَّث…",
            speak: "تحدَّث",
            send: "إرسال",
            spokenLanguages: "اللغات المنطوقة",
            active: "مفعَّلة",
            available: "متاحة",
            capabilities: "قدرات الذكاء الاصطناعي",
            navTitle: "تنقُّل حسب السياق",
            navText: "اطلب فتح أقسام محددة من لوحة التحكم مباشرة.",
            docsTitle: "الاستعلام عن الوثائق",
            docsText: "اطلب ملخصات أو بيانات محددة من الوثائق المرفوعة.",
            recentSessions: "آخر الجلسات الصوتية",
            footnote: "تفضِّل التحدث إلى شخص؟",
            footnoteLink: "انتقل إلى مركز المساعدة ←",
            you: "أنت",
            unavailable: "المساعدة بالذكاء الاصطناعي غير متاحة حالياً. يرجى استعمال الخيارات أدناه للاطلاع على بياناتك.",
            sessions: {
                identity: "دعم التحقق من الهوية",
                identityWhen: "اليوم، 10:42 صباحاً",
                appointment: "إعادة جدولة موعد",
                appointmentWhen: "أمس، 14:15",
                length: "{min} د {sec} ث"
            },
            toast: {
                mic: "المساعدة الصوتية بالذكاء الاصطناعي غير متاحة حالياً",
                langSelected: "تم اختيار {lang} للمساعد الصوتي",
                playing: "جارٍ تشغيل «{title}»…",
                history: "جارٍ فتح سجلك الصوتي الكامل…"
            }
        },

        support: {
            pageTitle: "الدعم — معاك المغرب",
            searchLabel: "ابحث في مقالات المساعدة",
            searchPlaceholder: "ابحث عن مساعدة...",
            heroAlt: "فريق دعم معاك يساعد المواطنين",
            heroTitle: "كيف يمكننا مساعدتك اليوم؟",
            heroText: "دعم معاك متاح للتحقق من الهوية ومشاكل الحساب والمساعدة التقنية. أمنك الرقمي أولويتنا القصوى.",
            liveChat: "الدردشة المباشرة",
            liveChatText: "تحدَّث فوراً مع أخصائي دعم.",
            startChat: "ابدأ الدردشة المباشرة",
            aiText: "تحدَّث إلى المساعد الصوتي الذكي لمعاك للحصول على مساعدة فورية.",
            openAi: "افتح المساعد الذكي",
            createAccount: "أنشئ حساباً لاستخدامه",
            ticketTitle: "تقديم تذكرة",
            ticketText: "سيرد فريقنا على استفسارك خلال 24 ساعة.",
            createTicket: "إنشاء تذكرة",
            subject: "الموضوع",
            describe: "صف مشكلتك...",
            submitTicket: "إرسال التذكرة",
            eyebrow: "في خدمتك",
            quickHelp: "مساعدة سريعة",
            browseAll: "تصفَّح جميع الفئات",
            quick: {
                identity: "التحقق من الهوية",
                identityText: "مشاكل في مسح هويتك أو التحقق منها",
                recover: "استرجاع الحساب",
                recoverText: "نسيت كلمة المرور أو فقدت الوصول إلى حسابك",
                report: "الإبلاغ عن مشكلة",
                reportText: "وجدت خللاً أو تواجه عطلاً تقنياً في معاك",
                payment: "مشاكل الأداء",
                paymentText: "دبِّر فواتيرك واشتراكاتك",
                business: "حساب المقاولة",
                businessText: "حلول المقاولات وصلاحيات الفريق",
                privacy: "الخصوصية والأمان",
                privacyText: "كيف نحمي بياناتك الشخصية ونستعملها"
            },
            faqTitle: "الأسئلة الشائعة",
            faqSubtitle: "إجابات سريعة عن الأسئلة الشائعة حول منصة الهوية الرقمية معاك.",
            faq: {
                q1: "كيف أتحقق من بطاقتي الوطنية المغربية؟",
                a1: "التحقق بسيط. انتقل إلى «الهوية» في إعدادات حسابك، ثم اتبع الخطوات الموجَّهة لمسح بطاقتك CNIE وتأكيد بياناتك البيومترية.",
                q2: "ماذا يحدث إذا أضعت هاتفي؟",
                a2: "يمكنك استرجاع حسابك باستعمال بريدك الإلكتروني المسجَّل. من صفحة تسجيل الدخول، اختر «نسيت كلمة المرور؟» واتبع خطوات إعادة التعيين لاستعادة الوصول.",
                q3: "هل بياناتي البيومترية آمنة؟",
                a3: "نعم. جميع البيانات البيومترية مشفَّرة من طرف إلى طرف ومخزَّنة وفق معايير حماية المعطيات الشخصية في المملكة المغربية، ولا تُشارَك أبداً مع أطراف ثالثة."
            },
            stillTitle: "ما زلت تحتاج إلى مساعدة؟",
            stillText: "فريق الدعم المتميز لدينا مستعد لمساعدتك الآن.",
            stillAlt: "نوفو، مرشد الدعم في معاك",
            toast: {
                chat: "جارٍ توصيلك بأحد أعوان الدعم…",
                ai: "جارٍ تشغيل المساعد الذكي…",
                ticket: "تم إرسال التذكرة — سنرد خلال 2 إلى 4 ساعات"
            }
        },

        finance: {
            pageTitle: "المالية والخزينة — معاك المغرب",
            cnie: "البطاقة الوطنية: A749102",
            upToDate: "وضعية سليمة لدى TGR وDGI",
            totalLabel: "إجمالي المبالغ المستحقة",
            heroCur: ".00 درهم",
            dueSoon: "دفعتان مستحقتان قريباً",
            heroMeta: "ضريبة السيارات 2026 (700 درهم) • فاتورة ريضال الرباط (342.50 درهم) • اقتطاع مباشر آمن عبر بنك المغرب",
            payAll: "أدِّ الكل (1,420 درهم)",
            historyAria: "سجل الأداءات",
            due: "مستحق",
            vehicleTax: "DGI • ضريبة السيارات 2026",
            dh: "درهم",
            dueDate: "آخر أجل: 31 يناير",
            pay: "أدِّ ←",
            oct28: "28 أكتوبر",
            redalIam: "ريضال وألياف اتصالات المغرب",
            redalIamSplit: "ريضال: 342.50 • اتصالات المغرب: 199",
            account: "الحساب: 9812-004",
            paymentsActive: "الدفعات جارية",
            benefits: "الدعم الاجتماعي المباشر وAMO",
            perMonth: "درهم/شهرياً",
            children: "طفلان • AMO تضامن",
            nextPayment: "الدفعة القادمة: 15 نونبر",
            settled: "مسدَّد بالكامل",
            tgr: "الخزينة العامة للمملكة (TGR)",
            dhDue: "درهم مستحقة",
            housingTaxPaid: "رسم السكن (TH) مؤدّى",
            fiscalYear: "السنة المالية 2026/27",
            receipt: "الإيصال ↓",
            latest: "آخر المعاملات المصادَق عليها من الخزينة العامة",
            viewHistory: "عرض السجل ←",
            downloadReceipt: "تحميل الإيصال",
            downloadNotice: "تحميل الإشعار",
            legal1: "✓ مطابق للقانون 43-20 • توقيع إلكتروني مؤهَّل للدولة المغربية",
            legal2: "المملكة المغربية • الخزينة العامة للمملكة • المديرية العامة للضرائب",
            rows: {
                businessTax: "المديرية العامة للضرائب (DGI) • الرسم المهني",
                businessTaxMeta: "15 أكتوبر 2026 • المرجع: 2026-TX-984128 • مختوم من الخزينة العامة",
                businessTaxAmount: "2,450.00 درهم",
                redal: "ريضال الرباط-سلا • الماء والكهرباء",
                redalMeta: "28 شتنبر 2026 • المرجع: RDL-7729-1102 • صدر الإيصال",
                redalAmount: "312.00 درهم",
                asd: "الدعم الاجتماعي المباشر (ASD) • الدفعة الشهرية",
                asdMeta: "15 شتنبر 2026 • المرجع: ASD-SEP-2026 • تم الإيداع",
                asdAmount: "⁦+500.00⁩ درهم"
            },
            payLabels: {
                all: "1,420 درهم",
                vehicle: "700 درهم — ضريبة السيارات 2026",
                redal: "541.50 درهم — ريضال واتصالات المغرب"
            },
            downloads: {
                housingTax: "إيصال رسم السكن",
                businessTax: "إيصال الرسم المهني",
                redal: "إيصال ريضال",
                asd: "إشعار إيداع الدعم الاجتماعي المباشر"
            },
            toast: {
                pay: "أداء آمن لمبلغ {amount} — جارٍ التوجيه إلى بنك المغرب…",
                download: "جارٍ التحميل: {name} (PDF مصادَق عليه)",
                history: "جارٍ فتح السجل الكامل لمعاملات الخزينة العامة…"
            }
        },

        payments: {
            pageTitle: "الأداءات — معاك المغرب",
            title: "الأداءات والمحفظة",
            subtitle: "أدِّ الرسوم الإدارية وفواتير الخدمات من محفظة واحدة موحَّدة.",
            balanceLabel: "رصيد M3ak Pay",
            balanceSub: "مقبول لدى جميع الإدارات المرتبطة",
            addFunds: "إضافة رصيد",
            history: "السجل",
            recent: "آخر الأداءات",
            payBill: "أداء فاتورة",
            items: {
                redal: "ريضال — الماء والكهرباء",
                redalDate: "12 أكتوبر 2026",
                redalAmount: "⁦- 342.50⁩ درهم",
                telecom: "اتصالات المغرب",
                telecomDate: "05 أكتوبر 2026",
                telecomAmount: "⁦- 199.00⁩ درهم",
                propertyTax: "الضريبة العقارية 2026",
                propertyTaxDate: "28 شتنبر 2026",
                propertyTaxAmount: "⁦- 850.00⁩ درهم"
            },
            cards: {
                utility: "فواتير الخدمات",
                utilityText: "فواتير الماء والكهرباء والاتصالات في مكان واحد.",
                govFees: "الرسوم الإدارية",
                govFeesText: "الرسوم الإدارية للرخص والوثائق الرسمية.",
                tax: "أداء الضرائب",
                taxText: "الضريبة على الدخل والضريبة العقارية وتصريحات الضريبة على القيمة المضافة.",
                fines: "مخالفات السير",
                finesText: "ابحث عن مخالفات السير غير المؤدّاة وسدِّدها.",
                insurance: "التأمين",
                insuranceText: "التغطية الصحية AMO وتجديد تأمين المركبات.",
                subscriptions: "الاشتراكات",
                subscriptionsText: "دبِّر اشتراكاتك الدورية في النقل العمومي والخدمات."
            },
            toast: {
                opening: "جارٍ فتح {name}…",
                topUp: "جارٍ فتح خيارات شحن محفظة M3ak Pay",
                history: "جارٍ فتح سجل أداءاتك الكامل"
            }
        },

        health: {
            pageTitle: "ابحث عن طبيبك المختص — معاك المغرب",
            title: "ابحث عن طبيبك المختص",
            subtitle: "استفد فوراً من خدمات صحية عالية الجودة في جميع أنحاء المغرب.",
            official: "مزوِّد رسمي للخدمة العمومية",
            searchPlaceholder: "ابحث عن أطباء أو تخصصات أو مصحات...",
            allDoctors: "جميع الأطباء",
            cardiology: "أمراض القلب",
            psychiatry: "الطب النفسي",
            pediatrics: "طب الأطفال",
            ophthalmology: "طب العيون",
            teleTitle: "استشارة عن بُعد",
            teleText: "تواصل مع أفضل الأطباء تقييماً عبر مكالمات فيديو فورية وآمنة من أي مكان.",
            teleBtn: "ابدأ الاستشارة",
            visitTitle: "زيارة منزلية",
            visitText: "رعاية طبية مهنية عند باب منزلك. أطباء أكفاء متاحون للزيارات المنزلية.",
            visitBtn: "اطلب زيارة",
            nearby: "أطباء بالقرب منك",
            book: "احجز",
            verifiedTitle: "مهنيون موثَّقون",
            verifiedText: "جميع الممارسين على معاك مرخَّصون وموثَّقون من طرف وزارة الصحة.",
            privacy: "خصوصية البيانات مضمونة",
            securePayment: "أداء آمن",
            doctors: {
                sofia: "د. صوفيا العمراني",
                yasmine: "د. ياسمين الإدريسي",
                jack: "د. جاك وُمور",
                nina: "د. نينا أوليفيا",
                cardiologist: "أخصائية أمراض القلب",
                dermatologist: "أخصائية الأمراض الجلدية",
                pediatrician: "طبيب أطفال",
                ophthalmologist: "أخصائية طب العيون",
                talborjt: "أكادير، تالبرجت (1.2 كلم)",
                founty: "أكادير، فونتي (0.8 كلم)",
                nouveauTalborjt: "أكادير، تالبرجت الجديدة (2.5 كلم)",
                charaf: "أكادير، الشرف (3.0 كلم)"
            }
        },

        nav: {
            mySpace: "فضائي",
            transport: "النقل",
            housing: "السكن",
            jobs: "التشغيل",
            education: "التعليم",
            healthcare: "الصحة",
            payments: "الأداءات",
            finance: "المالية",
            emergencySupport: "دعم الطوارئ",
            helpCenter: "مركز المساعدة",
            aiAssistant: "المساعد الذكي",
            logout: "تسجيل الخروج",
            registry: "الحالة المدنية",
            interior: "الداخلية"
        },

        footer: {
            label: "تذييل الصفحة",
            privacy: "سياسة الخصوصية",
            terms: "شروط الخدمة",
            legal: "الإشعار القانوني",
            security: "الإفصاح الأمني",
            helpCenter: "مركز المساعدة",
            rights: "© 2026 الهوية الرقمية معاك. جميع الحقوق محفوظة.",
            address: "Vala Bleu · أكادير، المغرب",
            hoursCompact: "الإثنين–الجمعة 8:00–20:00 · السبت 10:00–16:00 · الأحد مغلق",
            copyCompact: "© 2026 الهوية الرقمية معاك · جميع الأوقات بتوقيت GMT+1",
            contactUs: "اتصل بنا",
            workingHours: "أوقات العمل",
            weekdays: "الإثنين - الجمعة: 8:00 - 20:00",
            saturday: "السبت: 10:00 - 16:00",
            sunday: "الأحد: مغلق",
            timezone: "جميع الأوقات بتوقيت GMT+1",
            hq: "المقر الرئيسي",
            agadir: "أكادير",
            morocco: "المغرب"
        },

        landing: {
            pageTitle: "معاك المغرب",
            cardAlt: "بطاقة الهوية الرقمية",
            status: "الحالة",
            secured: "مؤمَّنة",
            statusSecured: "الحالة: مؤمَّنة",
            heroTitle: "هويتك الرقمية",
            heroHighlight: "الموحَّدة",
            heroText: "ادخل بأمان إلى جميع الخدمات الحكومية عبر ملف مواطن واحد محمي ببصمتك الحيوية. مصمَّم لتجربة مغربية عصرية.",
            getStarted: "ابدأ الآن",
            haveAccount: "لديك حساب بالفعل؟",
            logIn: "تسجيل الدخول",
            biometric: "أمان بيومتري",
            encryption: "معيار التشفير",
            trouble: "تواجه مشكلة؟",
            chatSupport: "تحدث مع الدعم",
            whyTitle: "لماذا تختار معاك؟",
            securityTitle: "أعلى مستويات الأمان",
            securityText: "تشفير بيومتري بمعايير حكومية يُبقي هويتك محمية في كل وقت.",
            securityTextAlt: "تشفير بيومتري بمعايير حكومية يضمن أن تبقى هويتك ملكك وحدك.",
            accessTitle: "وصول فوري",
            accessText: "وداعاً للطوابير. ادخل إلى جميع البوابات الحكومية المغربية فوراً بتسجيل دخول واحد.",
            cloudTitle: "سحابة موحَّدة",
            cloudText: "وثائقك متزامنة دائماً وجاهزة أينما احتجت لإثبات وضعيتك.",
            cloudTextAlt: "وثائقك متزامنة دائماً وجاهزة كلما احتجت لإثبات وضعيتك.",
            contactTitle: "اتصل بنا",
            emailSupport: "الدعم عبر البريد الإلكتروني"
        },

        auth: {
            identifierLabel: "رقم البطاقة الوطنية أو البريد الإلكتروني",
            identifierPlaceholder: "مثال: AB123456",
            password: "كلمة المرور",
            email: "البريد الإلكتروني",
            phone: "رقم الهاتف",
            backToLogin: "العودة إلى تسجيل الدخول",
            contact: "اتصل بنا",
            assistance: "المساعدة",
            errors: {
                enterIdentifier: "أدخل رقم بطاقتك الوطنية أو بريدك الإلكتروني.",
                invalidEmail: "عنوان البريد الإلكتروني هذا غير صالح.",
                idFormat: "يكون رقم البطاقة الوطنية على شكل AB123456.",
                passwordLength: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
                fullName: "أدخل اسمك الكامل.",
                validEmail: "أدخل عنوان بريد إلكتروني صالحاً.",
                validPhone: "أدخل رقم هاتف صالحاً."
            },
            login: {
                pageTitle: "تسجيل الدخول | معاك المغرب",
                subtitle: "ادخل إلى بوابتك الموحَّدة للمواطن",
                forgot: "نسيت كلمة المرور؟",
                signIn: "تسجيل الدخول",
                signingIn: "جارٍ تسجيل الدخول...",
                orContinue: "أو تابع باستخدام",
                noAccount: "ليس لديك حساب؟",
                createId: "أنشئ هويتك"
            },
            signup: {
                pageTitle: "إنشاء حساب — معاك المغرب",
                previewAlt: "معاينة الهوية الرقمية",
                securityStatus: "حالة الأمان",
                advancedProtection: "حماية متقدمة",
                heroTitle: "أمِّن هويتك الرقمية",
                heroText: "انضم إلى آلاف المواطنين المغاربة الذين يصلون إلى الخدمات الحكومية بسهولة وسرعة، مع أمان بيومتري من أعلى المستويات.",
                secured: "مؤمَّن",
                title: "إنشاء حساب",
                subtitle: "ابدأ رحلتك في المنظومة الرقمية المغربية.",
                fullName: "الاسم الكامل",
                fullNamePlaceholder: "محمد الإدريسي",
                cni: "رقم البطاقة الوطنية (CNI)",
                creating: "جارٍ إنشاء الحساب...",
                encrypted: "آمن ومشفَّر بمعيار AES 256-bit",
                terms: "بإنشائك حساباً، فإنك توافق على شروط الخدمة وسياسة الخصوصية. © 2026 الخدمات الرقمية للمملكة المغربية."
            },
            forgot: {
                pageTitle: "نسيت كلمة المرور | معاك المغرب",
                title: "نسيت كلمة المرور",
                subtitle: "أدخل بريدك الإلكتروني أو رقم بطاقتك الوطنية (CNI) لتلقي رمز التحقق.",
                label: "البريد الإلكتروني أو رقم البطاقة الوطنية (CNI)",
                placeholder: "مثال: AB123456 أو name@example.com",
                submit: "إرسال رابط إعادة التعيين",
                sending: "جارٍ إرسال الرابط...",
                needHelp: "تحتاج إلى مساعدة فورية؟",
                contactSupport: "تواصل مع الدعم",
                agent: "تحدث إلى موظف حكومي"
            },
            reset: {
                pageTitle: "إنشاء كلمة مرور جديدة — معاك المغرب",
                digitalId: "الهوية الرقمية",
                asideTitle: "تعيين كلمة مرور جديدة",
                asideText: "أنشئ كلمة مرور قوية وآمنة لحماية هويتك الرقمية والوصول إلى الخدمات الحكومية.",
                title: "إنشاء كلمة مرور جديدة",
                subtitle: "يرجى إدخال كلمة المرور الجديدة وتأكيدها أدناه.",
                newPassword: "كلمة المرور الجديدة",
                confirmPassword: "تأكيد كلمة المرور الجديدة",
                mismatch: "كلمتا المرور غير متطابقتين.",
                requirements: "متطلبات كلمة المرور",
                ruleLength: "8 أحرف على الأقل",
                ruleNumber: "رقم واحد على الأقل",
                ruleSpecial: "رمز خاص واحد على الأقل (!@#$%^&*)",
                submit: "إعادة تعيين كلمة المرور",
                redirecting: "جارٍ التوجيه إلى تسجيل الدخول...",
                needHelp: "تحتاج إلى مساعدة؟",
                contactSupport: "تواصل مع دعم معاك"
            }
        },

        emergency: {
            pageTitle: "مركز الطوارئ — معاك المغرب",
            title: "مركز الطوارئ",
            subtitle: "مركز قيادة للمساعدة الفورية والموارد الحيوية.",
            countrySuffix: "، المغرب",
            sos: {
                title: "تحتاج إلى مساعدة طارئة؟",
                text: "اضغط مطولاً على الزر لمدة 3 ثوانٍ لإرسال تنبيه استغاثة إلى جميع مصالح الطوارئ وجهات الاتصال الرئيسية.",
                idle: "اضغط مطولاً للتفعيل",
                holding: "واصل الضغط… {sec} ث",
                sent: "تم إرسال التنبيه"
            },
            calls: {
                police: "الشرطة",
                policeSub: "خط الطوارئ الوطني",
                ambulance: "الإسعاف",
                ambulanceSub: "المطافئ والإسعاف الطبي",
                gendarmerie: "الدرك الملكي",
                gendarmerieSub: "خط الطوارئ بالعالم القروي",
                firefighters: "رجال المطافئ",
                firefightersSub: "الوقاية المدنية • الإطفاء والإنقاذ",
                quickDial: "اتصال سريع"
            },
            map: {
                title: "خريطة الطوارئ المباشرة ·",
                hospitals: "المستشفيات",
                pharmacies: "الصيدليات",
                police: "مراكز الشرطة",
                loading: "جارٍ تحميل المرافق القريبة…",
                layers: { hospitals: "المستشفيات", pharmacies: "الصيدليات", police: "مراكز الشرطة" },
                types: { public: "عمومي", private: "خاص" },
                cities: { agadir: "أكادير" },
                kmAway: "على بعد {km} كلم",
                directions: "الاتجاهات",
                none: "لم يُعثر على أي نتيجة في فئة «{layer}» بالقرب من {city}.",
                found: "عدد {layer} بالقرب من {city}: {count}",
                offline: " · بيانات محفوظة دون اتصال",
                noCity: "حدّد مدينتك في «فضائي» لعرض مرافق الطوارئ القريبة منك."
            },
            medical: {
                title: "البطاقة الطبية",
                edit: "تعديل البطاقة الطبية",
                bloodType: "فصيلة الدم",
                weight: "الوزن",
                allergies: "الحساسية",
                medications: "الأدوية"
            },
            contacts: {
                title: "جهات الاتصال في حالات الطوارئ",
                mother: "الأم",
                brother: "الأخ",
                physician: "الطبيب المعالج",
                drTazi: "د. سارة التازي",
                reachable: "متاح",
                unreachable: "غير متاح",
                add: "إضافة جهة اتصال",
                fullName: "الاسم الكامل",
                relationship: "صلة القرابة (مثال: الأخت)",
                save: "حفظ جهة الاتصال",
                defaultRole: "جهة اتصال"
            },
            procedures: {
                title: "إجراءات الطوارئ",
                subtitle: "اتبع هذه الإجراءات في انتظار وصول المساعدة المختصة.",
                firstAid: "الإسعافات الأولية",
                firstAidText: "تعليمات الإنعاش القلبي الرئوي، والعناية بالجروح، والتعامل مع حالات الاختناق.",
                fire: "السلامة من الحرائق",
                fireText: "مسارات الإخلاء، واستعمال مطفأة الحريق، واحتواء النيران.",
                earthquake: "الزلازل",
                earthquakeText: "إجراءات «انخفض، احتمِ، تمسّك» أثناء الهزات الأرضية.",
                road: "حوادث السير",
                roadText: "تأمين مكان الحادث والتقييم الأولي لحالة المصابين."
            },
            dialogs: {
                policeTitle: "الاتصال بالشرطة",
                policeText: "أنت على وشك الاتصال بالشرطة على الرقم 19. لا تؤكد إلا إذا كنت بحاجة إلى مساعدة طارئة.",
                ambulanceTitle: "الاتصال بالإسعاف",
                ambulanceText: "أنت على وشك الاتصال بالإسعاف على الرقم 15. لا تؤكد إلا إذا كنت بحاجة إلى مساعدة طارئة.",
                gendarmerieTitle: "الاتصال بالدرك الملكي",
                gendarmerieText: "أنت على وشك الاتصال بالدرك الملكي على الرقم 177. لا تؤكد إلا إذا كنت بحاجة إلى مساعدة طارئة.",
                firefightersTitle: "الاتصال برجال المطافئ",
                firefightersText: "أنت على وشك الاتصال بالوقاية المدنية (الإطفاء والإنقاذ) على الرقم 15. لا تؤكد إلا إذا كنت بحاجة إلى مساعدة طارئة.",
                notNow: "ليس الآن",
                call19: "اتصل بـ 19",
                call15: "اتصل بـ 15",
                call177: "اتصل بـ 177",
                sosTitle: "تنبيه استغاثة (SOS)",
                sosText: "تم تفعيل تنبيه الطوارئ الخاص بك. ستتم مشاركة موقعك مع مصالح الطوارئ وجهات الاتصال الرئيسية.",
                cancelAlert: "إلغاء التنبيه",
                keepAlert: "إبقاء التنبيه مفعّلاً"
            },
            toast: {
                keep: "يبقى التنبيه مفعّلاً — يمكن لفرق التدخل تتبّع موقعك",
                cancelled: "تم إلغاء التنبيه",
                contactAdded: "تمت إضافة جهة الاتصال إلى قائمة التنبيه"
            }
        }
        /* ar:end */
    }
};
