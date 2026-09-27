/* ==========================================================
   M3ak Morocco — translations.js
   Central dictionary read by /js/i18n.js.

   - The English copy lives in the HTML (it is the source text), so the
     `en` block only holds strings that JavaScript writes at runtime.
   - Every other language (`ar`, `fr`) mirrors the same keys. To add one,
     copy the `fr` block, translate it, and add it to LANGUAGES in i18n.js.
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
    },

    /* ------------------------------------------------------
       FRENCH
    ------------------------------------------------------ */
    fr: {
        brand: {
            name: "M3ak Maroc",
            short: "M3ak",
            logoAlt: "Logo M3ak Maroc",
            portal: "Portail des services citoyens",
            kingdom: "Royaume du Maroc",
            digitalIdentity: "Identité numérique M3ak"
        },

        common: {
            changeLanguage: "Changer de langue",
            toggleDarkMode: "Activer / désactiver le mode sombre",
            lightMode: "Mode clair",
            darkMode: "Mode sombre",
            openMenu: "Ouvrir le menu",
            closeMenu: "Fermer le menu",
            search: "Rechercher",
            notifications: "Notifications",
            yourProfile: "Votre profil",
            profilePhoto: "Photo de profil",
            back: "Retour",
            next: "Suivant",
            cancel: "Annuler",
            save: "Enregistrer",
            close: "Fermer",
            confirm: "Confirmer",
            continue: "Continuer",
            skip: "Passer",
            seeAll: "Tout voir",
            viewAll: "Tout afficher",
            learnMore: "En savoir plus",
            showPassword: "Afficher le mot de passe",
            hidePassword: "Masquer le mot de passe",
            backToHome: "Retour à l'accueil",
            select: "Choisir…",
            opening: "Ouverture de {name}…",
            mad: "DH"
        },

        profile: {
            dob: "Date de naissance",
            gender: "Sexe",
            weight: "Poids",
            motherTongue: "Langue maternelle",
            country: "Pays de résidence",
            city: "Ville",
            bloodType: "Groupe sanguin",
            allergies: "Allergies",
            medications: "Traitements en cours",
            emergencyName: "Nom du contact d'urgence",
            relationship: "Lien de parenté",
            contactPhone: "Téléphone du contact",
            values: {
                female: "Femme",
                male: "Homme",
                preferNot: "Je préfère ne pas répondre",
                arabic: "Arabe",
                amazigh: "Amazigh (Tamazight)",
                french: "Français",
                english: "Anglais",
                other: "Autre",
                morocco: "Maroc",
                france: "France",
                spain: "Espagne",
                unknown: "Inconnu"
            }
        },

        onboarding: {
            pageTitle: "Complétez votre profil — M3ak Maroc",
            title: "Complétez votre profil",
            welcome: "Bienvenue,",
            welcomeRest: "— cela ne prend qu'une minute, et on ne vous le redemandera pas.",
            personal: "Informations personnelles",
            weightPlaceholder: "ex. 70 kg",
            location: "Localisation",
            cityPlaceholder: "ex. Agadir",
            cityNote: "Votre ville personnalise les services de M3ak — y compris la carte d'urgence des hôpitaux, pharmacies et commissariats à proximité.",
            medical: "Fiche médicale et contact d'urgence",
            allergiesPlaceholder: "ex. Pénicilline (laisser vide si aucune)",
            medicationsPlaceholder: "ex. Aucun",
            relationPlaceholder: "ex. Mère",
            phoneHint: "Chiffres uniquement — vous pouvez utiliser + ( ), les espaces et les tirets",
            skip: "Passer pour l'instant",
            finish: "Terminer la configuration",
            fillIn: "Veuillez remplir le champ « {field} ».",
            thisField: "ce champ"
        },

        region: {
            pageTitle: "Région non prise en charge — M3ak Maroc",
            title: "M3ak est disponible uniquement au Maroc",
            text: "D'après le pays choisi dans votre profil, les services citoyens de M3ak Maroc ne vous sont pas encore accessibles. Votre compte n'a pas été supprimé — vous pouvez mettre à jour votre pays de résidence s'il s'agit d'une erreur, ou vous déconnecter.",
            update: "Modifier mon pays",
            signOut: "Se déconnecter"
        },

        compte: {
            pageTitle: "Redirection vers Mon Espace — M3ak Maroc",
            moved: "Cette page a été déplacée. Redirection vers"
        },

        comingSoon: {
            pageTitle: "Bientôt disponible — M3ak Maroc",
            title: "Ce service sera bientôt disponible",
            text: "Nous construisons cette partie du portail citoyen M3ak. Elle n'est pas encore disponible, mais le reste de la plateforme est prêt à être exploré.",
            backToMySpace: "Retour à Mon Espace",
            goBack: "Retour",
            featureTitle: "« {feature} » arrive bientôt",
            featureText: "Nous construisons la section « {feature} » du portail citoyen M3ak. Elle n'est pas encore disponible, mais le reste de la plateforme est prêt à être exploré.",
            featurePageTitle: "{feature} — Bientôt disponible — M3ak Maroc",
            features: {
                doctorDirectory: "Annuaire des médecins",
                services: "Services",
                allHousingServices: "Tous les services du logement"
            }
        },

        registry: {
            pageTitle: "État civil — M3ak Maroc",
            title: "État civil",
            subtitle: "Demandez vos actes de naissance, de mariage et certificats de résidence, et gérez le livret de famille de votre foyer.",
            searchLabel: "Rechercher dans les services d'état civil",
            searchPlaceholder: "Rechercher des certificats et registres...",
            empty: "Aucun service ne correspond à votre recherche.",
            ctaTitle: "Besoin d'un document rapidement ?",
            ctaText: "La plupart des certificats sont prêts à être retirés dans les 48 heures suivant votre demande.",
            ctaBtn: "Suivre ma demande",
            cards: {
                birth: "Acte de naissance",
                birthText: "Demandez une copie intégrale ou un extrait officiel de votre acte de naissance.",
                marriage: "Acte de mariage",
                marriageText: "Demandez vos actes de mariage et la mise à jour du livret de famille.",
                residence: "Certificat de résidence",
                residenceText: "Justificatif de domicile pour les démarches administratives et bancaires.",
                death: "Certificat de décès",
                deathText: "Demandez des certificats de décès pour les démarches juridiques et successorales.",
                booklet: "Livret de famille",
                bookletText: "Mettez à jour ou renouvelez votre livret de famille officiel.",
                idRenewal: "Renouvellement de la CNIE",
                idRenewalText: "Renouvelez ou remplacez votre Carte Nationale d'Identité Électronique (CNIE).",
                nameChange: "Demandes de changement de nom",
                nameChangeText: "Déposez une demande légale de rectification de vos données d'état civil.",
                archive: "Archives de l'état civil",
                archiveText: "Consultez les archives historiques de l'état civil et les anciens registres."
            },
            toast: { track: "Vérification du statut de vos demandes en cours…" }
        },

        interior: {
            pageTitle: "Intérieur — M3ak Maroc",
            backToServices: "Retour à l'annuaire des services",
            title: "Intérieur",
            subtitle: "Services de CNIE, passeports et titres de séjour du ministère de l'Intérieur.",
            searchLabel: "Rechercher dans les services de l'Intérieur",
            searchPlaceholder: "Rechercher des services de l'Intérieur...",
            ctaTitle: "Vous renouvelez votre passeport ?",
            ctaText: "Prenez rendez-vous à la préfecture la plus proche pour éviter l'attente.",
            ctaBtn: "Prendre rendez-vous",
            cards: {
                passport: "Demande de passeport",
                passportText: "Demandez un nouveau passeport biométrique ou renouvelez le vôtre.",
                residence: "Titres de séjour",
                residenceText: "Demandes et renouvellements de carte de séjour pour les résidents étrangers.",
                nationalId: "Carte Nationale d'Identité (CNIE)",
                nationalIdText: "Première délivrance et suivi du statut de votre CNIE.",
                localAuth: "Inscription auprès de l'autorité locale",
                localAuthText: "Inscrivez votre foyer auprès de votre commune ou arrondissement.",
                gathering: "Autorisations de rassemblement public",
                gatheringText: "Demandes d'autorisation pour les manifestations et rassemblements publics.",
                civilProtection: "Protection civile",
                civilProtectionText: "Inspections de sécurité incendie et demandes de services de protection civile."
            },
            toast: { appointment: "Chargement des créneaux de rendez-vous disponibles…" }
        },

        housing: {
            pageTitle: "Logement et immobilier — M3ak Maroc",
            title: "Logement et immobilier",
            subtitle: "Accédez aux programmes d'aide au logement, aux titres fonciers et aux services d'urbanisme partout au Maroc.",
            verified: "Prestataire officiel du service public • Vérifié par Al Omrane et l'ANCFCC",
            filters: {
                all: "Tous les services",
                aid: "Aide au logement (aide directe)",
                deeds: "Conservation foncière et titres fonciers",
                leases: "Baux certifiés",
                permits: "Permis de construire et Rokhas"
            },
            directAid: "Aide directe de l'État",
            daamHeading: "Daam Sakane <span class=\"feature-heading-sub\">(Aide au logement)</span>",
            daamText: "Vérifiez votre éligibilité à une aide financière directe allant jusqu'à 100 000 DH pour l'achat d'une résidence principale dans toutes les régions du Royaume.",
            applySubsidy: "Demander l'aide",
            conservation: "Conservation foncière",
            muhafadatiHeading: "Muhafadati <span class=\"feature-heading-sub\">(Ma conservation)</span> — ANCFCC",
            muhafadatiText: "Protégez votre bien grâce à des alertes instantanées par SMS ou e-mail pour toute opération sur votre titre foncier, inscription d'hypothèque ou modification cadastrale.",
            manageDeeds: "Gérer mes titres fonciers",
            essentialTitle: "Services essentiels du logement et de l'immobilier",
            essentialSub: "Procédures officielles validées par les ministères et les communes du Maroc",
            seeAll: "Tout voir (18)",
            empty: "Aucun service ne correspond à cette catégorie.",
            cards: {
                aidRating: "4,9 Vérifié",
                aid: "Aide à la résidence principale",
                aidMeta: "Couverture nationale • Al Omrane",
                aidAmount: "Montant de l'aide",
                aidBtn: "Simuler l'aide",
                deedsCat: "Cadastre et titres",
                deeds: "Certificat de propriété électronique",
                deedsMeta: "Délivrance en ligne • Valeur juridique",
                deedsFee: "Frais officiels",
                deedsBtn: "Demander le PDF",
                permitsRating: "4,8 Rokhas",
                permitsCat: "Urbanisme",
                permits: "Permis de construire et de rénover",
                permitsMeta: "Commune et Agence urbaine",
                permitsProcessing: "Délai de traitement",
                days: "jours",
                permitsBtn: "Suivre le dossier",
                leasesRating: "4,9 Légal",
                leasesCat: "Registre des baux",
                leases: "Bail certifié",
                leasesMeta: "Protection fiscale et juridique",
                leasesStamp: "Timbre légal",
                digital: "Numérique",
                eSignature: "Signature électronique",
                leasesBtn: "Enregistrer le bail"
            },
            partnersTitle: "Partenaires institutionnels vérifiés",
            partnersText: "En coordination avec le Groupe Al Omrane, l'Agence Nationale de la Conservation Foncière, du Cadastre et de la Cartographie (ANCFCC) et le ministère de l'Aménagement du territoire national, de l'Urbanisme, de l'Habitat et de la Politique de la ville.",
            pills: {
                privacy: "Protection des données (loi 09-08)",
                legal: "Valeur juridique (loi 43-20)",
                payment: "Paiement sécurisé via CMI"
            },
            actions: {
                subsidy: "Demande d'aide au logement",
                deeds: "Suivi des titres fonciers via Muhafadati",
                simulate: "Simulation de l'aide au logement",
                pdf: "Demande du certificat de propriété en PDF",
                permit: "Suivi du dossier de permis via Rokhas",
                lease: "Enregistrement du bail certifié"
            }
        },

        home: {
            pageTitle: "Accueil — M3ak Maroc",
            primaryNav: "Navigation principale",
            primaryNavMobile: "Navigation principale mobile",
            about: "À propos",
            features: "Fonctionnalités",
            services: "Services",
            help: "Aide",
            myProfile: "Mon profil",
            myDocuments: "Mes documents",
            settings: "Paramètres",
            badge: "Nouveau : intégration de l'identité numérique",
            heroTitle: "Votre porte d'entrée vers",
            heroAccent: "le Maroc numérique.",
            heroText: "Accédez aux services publics, gérez vos paiements et restez connecté à votre communauté grâce à une expérience citoyenne fluide et haut de gamme, pensée pour l'avenir.",
            howItWorks: "Comment ça marche",
            viewAllServices: "Voir tous les services",
            trust: "La confiance de millions de citoyens dans tout le Royaume.",
            heroAlt: "Maroc numérique",
            lastTransaction: "Dernière transaction",
            lastAmount: "+1 240 DH",
            stats: {
                users: "Utilisateurs actifs",
                services: "Services publics",
                uptime: "Disponibilité",
                support: "Support dédié"
            },
            superTitle: "Tout ce dont vous avez besoin, dans une seule super-app",
            superText: "Nous avons unifié l'expérience citoyenne en réunissant des services dispersés dans un seul écosystème performant.",
            idTitle: "Identité numérique sécurisée",
            idText: "Le standard d'identité marocain protège vos données grâce à un chiffrement de pointe et à la vérification biométrique.",
            learnSecurity: "Découvrir la sécurité",
            payTitle: "Paiements instantanés",
            payText: "Réglez vos factures, impôts et frais de scolarité en moins de 10 secondes avec M3ak Pay.",
            transportTitle: "Transport intelligent",
            transportText: "Suivi en temps réel des trains ONCF, des cars CTM et des bus urbains dans toutes les grandes villes.",
            healthTitle: "Santé intégrée",
            healthText: "Synchronisez votre dossier médical avec l'AMO/CNOPS et prenez rendez-vous instantanément auprès des prestataires de santé nationaux.",
            exploreHealth: "Explorer le portail santé",
            servicesTitle: "Explorer les services publics",
            servicesText: "Accès direct à plus de 180 démarches administratives et services citoyens.",
            reviewsTitle: "Ce que disent les citoyens",
            viewReviews: "Voir tous les avis",
            fiveStars: "5 étoiles sur 5",
            quote1: "« Enfin une application aussi efficace que nous. Payer mes factures et renouveler mon passeport n'a jamais été aussi simple. »",
            quote2: "« L'identité numérique change tout pour les étudiants. Tout est maintenant dans ma poche. »",
            reviewers: {
                ahmed: "Ahmed R.",
                ahmedRole: "Résident à Casablanca",
                sara: "Sara B.",
                saraRole: "Étudiante, Rabat",
                nora: "Nora B.",
                noraRole: "Étudiante, Tanger",
                hafid: "Hafid K.",
                hafidRole: "Étudiant, Agadir"
            }
        },

        overview: {
            pageTitle: "Mon Espace — M3ak Maroc",
            menu: {
                personal: "Informations personnelles",
                account: "Paramètres du compte"
            },
            welcome: "Bon retour,",
            welcomeRest: ". Vos services, demandes, rendez-vous et votre compte au même endroit.",
            tabsLabel: "Sections de Mon Espace",
            tabs: {
                dashboard: "Tableau de bord",
                requests: "Mes demandes",
                appointments: "Rendez-vous",
                personal: "Informations personnelles",
                account: "Compte"
            },
            kpi: {
                requests: "Demandes en cours",
                paid: "Payé ce mois-ci",
                paidValue: "691 DH",
                appointments: "Rendez-vous à venir",
                documents: "Documents"
            },
            transport: {
                title: "Transports publics en direct",
                viewMap: "Voir la carte",
                live: "En direct",
                tram: "Tramway T1",
                tramTowards: "Direction : Hassan II",
                boraq: "Al Boraq 104",
                boraqTowards: "Direction : Tanger Ville",
                arriving: "Arrive",
                min: "min"
            },
            map: {
                title: "Carte du réseau en direct",
                waiting: "En attente de votre position…",
                close: "Fermer la carte",
                locate: "Me localiser",
                follow: "Suivre ma position",
                external: "Ouvrir dans Google Maps",
                showing: "Affichage du réseau de transport en direct",
                locating: "Localisation en cours…"
            },
            nextAppt: "Prochain rendez-vous",
            activity: {
                title: "Votre activité",
                sub: "Interactions avec les services publics · 7 derniers jours",
                total: "24 au total"
            },
            openWallet: "Ouvrir le portefeuille",
            requestsShort: "Demandes",
            open: "Ouvrir",
            quick: {
                title: "Services citoyens rapides",
                civil: "État civil",
                driving: "Permis de conduire",
                tax: "Taxe foncière",
                social: "Sécurité sociale"
            },
            requests: {
                title: "Demandes de service",
                sub: "Toutes les démarches administratives ouvertes via M3ak.",
                "new": "Nouvelle demande"
            },
            appointments: {
                sub: "Vos prochaines visites dans les administrations et cliniques.",
                add: "Ajouter un rendez-vous",
                none: "Aucun rendez-vous à venir."
            },
            fields: { address: "Adresse postale" },
            edit: {
                fullName: "Modifier le nom complet",
                email: "Modifier l'e-mail",
                phone: "Modifier le numéro de téléphone",
                address: "Modifier l'adresse postale",
                city: "Modifier la ville",
                country: "Modifier le pays"
            },
            saveChanges: "Enregistrer les modifications",
            cin: {
                title: "CIN numérique",
                active: "Active",
                number: "Numéro de carte",
                expiry: "Date d'expiration",
                details: "Voir les détails",
                renew: "Renouveler le document"
            },
            security: {
                title: "Sécurité",
                lastChanged: "Dernière modification il y a 3 mois",
                update: "Modifier",
                updatePassword: "Modifier le mot de passe",
                twoFactor: "Authentification à deux facteurs (2FA)",
                enabled: "Activée",
                manage: "Gérer",
                manage2fa: "Gérer l'authentification à deux facteurs",
                biometric: "Connexion biométrique",
                biometricSub: "Face ID ou empreinte digitale",
                toggleBiometric: "Activer ou désactiver la connexion biométrique"
            },
            preferences: {
                title: "Préférences",
                language: "Langue de la plateforme",
                email: "Notifications par e-mail",
                sms: "Alertes SMS",
                push: "Notifications push"
            },
            signout: {
                title: "Se déconnecter de cet appareil",
                sub: "Vous devrez vous reconnecter pour accéder à votre espace."
            },
            status: {
                confirmed: "Confirmé",
                pending: "En attente",
                cancelled: "Annulé",
                approved: "Approuvé",
                inReview: "En cours d'examen",
                pendingDocs: "Documents manquants",
                rejected: "Refusé",
                actionNeeded: "Action requise"
            },
            months: { OCT: "OCT", NOV: "NOV" },
            days: { Mon: "Lun", Tue: "Mar", Wed: "Mer", Thu: "Jeu", Fri: "Ven", Sat: "Sam", Sun: "Dim" },
            appts: {
                a1: { title: "Renouvellement de la CNIE", place: "Bureau de la préfecture" },
                a2: { title: "Visite médicale", place: "Hôpital Ibn Sina" },
                a3: { title: "Photo de passeport", place: "Annexe administrative" }
            },
            payments: {
                p1: { label: "Redal — Eau et électricité", date: "12 oct. 2026" },
                p2: { label: "Maroc Telecom", date: "05 oct. 2026" },
                p3: { label: "Billets FRMF", date: "28 sept. 2026" }
            },
            requestsData: {
                r1: { title: "Renouvellement de la CNIE", dept: "Intérieur — État civil", date: "18 oct. 2026" },
                r2: { title: "Demande d'aide au logement", dept: "Logement", date: "09 oct. 2026" },
                r3: { title: "Bourse universitaire", dept: "Éducation", date: "28 sept. 2026" },
                r4: { title: "Licence commerciale", dept: "Finances", date: "15 sept. 2026" }
            },
            toast: {
                locating: "Localisation en cours",
                following: "Suivi de votre position",
                stopFollowing: "Suivi de votre position arrêté",
                apptAdded: "Rendez-vous ajouté à votre agenda",
                newRequest: "Ouverture du formulaire de nouvelle demande",
                comingSoon: "{name} — bientôt disponible",
                saved: "Informations personnelles enregistrées"
            }
        },

        jobs: {
            pageTitle: "Portail de l'emploi — M3ak Maroc",
            topSearchLabel: "Rechercher des services, dossiers ou registres",
            topSearchPlaceholder: "Rechercher des services, dossiers ou registres…",
            breadcrumb: "Emploi public et concours",
            breadcrumbHere: "Portail national de recrutement",
            title: "Portail de l'emploi et du recrutement",
            subtitle: "Accédez aux concours de la fonction publique marocaine et aux offres vérifiées du secteur privé grâce à votre identité numérique CNIE certifiée.",
            digitalCv: "CV numérique certifié",
            jobAlert: "Créer une alerte emploi",
            keywordLabel: "Intitulé du poste ou mot-clé",
            keywordPlaceholder: "Ingénieur d'État, fonctionnaire, développeur…",
            region: "Région",
            allRegions: "Toutes les régions",
            regions: {
                rabat: "Rabat - Salé - Kénitra",
                casablanca: "Casablanca - Settat",
                tangier: "Tanger - Tétouan - Al Hoceïma",
                marrakech: "Marrakech - Safi",
                remote: "Télétravail"
            },
            sector: "Secteur",
            allSectors: "Tous les secteurs",
            categories: {
                publicService: "Fonction publique (concours)",
                tech: "Technologies et télécoms",
                health: "Santé publique",
                finance: "Finances et douanes",
                transport: "Transport et logistique",
                education: "Éducation et enseignement",
                civil: "Sécurité civile et RH"
            },
            filter: "Filtrer",
            popularTags: "Tags populaires",
            tags: {
                mef: "Concours du ministère de l'Économie et des Finances",
                grade11: "Échelle 11 / Ingénieurs d'État",
                administrators: "Administrateurs 2e grade",
                health: "Métiers de la santé",
                oneClick: "Candidature en un clic"
            },
            concours: {
                badge: "Fonction publique + emploi",
                tag: "Mis à jour",
                title: "Concours national unifié de recrutement",
                text: "Postulez aux postes de la fonction publique via le portail national — une seule candidature et une vérification biométrique par CNIE.",
                positions: "Postes ouverts",
                deadlineValue: "15 nov.",
                deadline: "Date limite 2026",
                eligible: "Éligible via CNIE",
                validation: "Statut de validation",
                open: "Ouvrir ma candidature",
                guide: "Voir le référentiel"
            },
            accelerator: {
                badge: "Partenariat avec le secteur privé",
                tag: "Vérifié",
                title: "Accélérateur d'emploi et salaires vérifiés",
                text: "CDI vérifiés, salaires transparents et cotisations CNSS garanties chez nos partenaires agréés.",
                offers: "Offres vérifiées",
                salary: "Salaire moyen (DH)",
                permanent: "100 % CDI",
                cnss: "Déclaré à la CNSS",
                explore: "Explorer les offres certifiées"
            },
            latest: "Dernières opportunités vérifiées",
            matchCount: " postes correspondent à votre recherche",
            sortBy: "Trier par",
            sort: {
                relevance: "Pertinence (par défaut)",
                salary: "Salaire (le plus élevé)",
                recent: "Date de publication"
            },
            tabs: {
                label: "Filtrer par type d'employeur",
                all: "Tous",
                public: "Concours publics",
                private: "Secteur privé et multinationales"
            },
            pagination: "Pagination",
            rail: {
                applications: "Mes candidatures en cours",
                inProgress: "3 en cours",
                history: "Voir l'historique complet des concours",
                tools: "Outils de préparation aux concours de la fonction publique"
            },
            skills: {
                title: "Mon passeport compétences CNIE",
                text: "Vos parcours académique et professionnel sont vérifiés directement auprès des registres officiels de l'État.",
                diploma: "Diplôme d'ingénieur d'État",
                diplomaSub: "Vérifié par le ministère de l'Enseignement supérieur",
                record: "Extrait de casier judiciaire (bulletin n° 3)",
                recordSub: "Casier vierge, certifié par le ministère de la Justice",
                cnss: "Attestation CNSS et historique des salaires",
                cnssSub: "62 mois de cotisations vérifiées",
                qr: "Générer un QR code de vérification employeur"
            },
            sectorsTitle: "Explorer les métiers par ministère et secteur",
            sectorsMeta: "12 secteurs ministériels connectés",
            jobTags: {
                open: "Poste ouvert",
                cnie: "CNIE requise",
                master: "Master requis",
                noOral: "Sans entretien oral",
                "new": "Nouveau",
                permanent: "CDI vérifié",
                hybrid: "Télétravail hybride"
            },
            card: {
                applyPublic: "Postuler maintenant",
                applyPrivate: "Postuler avec mon profil M3ak",
                perMonth: "DH / mois",
                cnie: "Candidature en un clic via CNIE",
                cnss: "100 % déclaré à la CNSS",
                save: "Enregistrer",
                contests: "{n} concours",
                empty: "Aucun poste ne correspond à vos filtres pour le moment.",
                showing: "Affichage de {from} à {to} sur {total} offres actives",
                previous: "Précédent"
            },
            data: {
                j1: {
                    org: "Ministère de l'Économie et des Finances",
                    title: "Ingénieur d'État principal — Sécurité des SI et cloud souverain",
                    desc: "Piloter la stratégie de cybersécurité et la migration vers le cloud souverain marocain des systèmes ministériels critiques.",
                    salaryNote: "Échelle 11 · Indice 509",
                    pill: "Clôture dans 4 jours (10 nov. 2026)",
                    ref: "Réf. concours : MEF-2026-ING-04",
                    posted: "Publié il y a 2 jours",
                    deadline: "Postuler avant le 20 nov.",
                    location: "Rabat · Quartier administratif"
                },
                j2: {
                    org: "Ministère de la Santé et de la Protection sociale",
                    title: "Médecin spécialiste de 1er grade — CHU Ibn Sina et CHU de Tanger",
                    desc: "Poste de médecin spécialiste titulaire rattaché au réseau des CHU, avec possibilité de double affectation.",
                    salaryNote: "Statut particulier des médecins",
                    pill: "Ouvert jusqu'au 28 nov. 2026",
                    ref: "Réf. concours : MSPS-CHU-2026",
                    posted: "Publié il y a 4 jours",
                    deadline: "Postuler avant le 28 nov.",
                    location: "Rabat · CHU Ibn Sina"
                },
                j3: {
                    org: "Casablanca Finance City — Pôle Tech",
                    title: "Lead Tech Fullstack senior (React, Node.js, Go) — Pôle Fintech",
                    desc: "Diriger une équipe produit Fullstack au sein d'un pôle fintech labellisé CFC, avec salaire et avantages entièrement déclarés à la CNSS.",
                    salaryNote: "Package annuel garanti",
                    pill: "Secteur privé vérifié par M3ak",
                    posted: "Publié il y a 6 heures",
                    deadline: "Candidatures ouvertes",
                    location: "Casablanca · Tour CFC"
                },
                j4: {
                    org: "Chambre des douanes — Logistique internationale",
                    title: "Directeur des opérations portuaires et de la supply chain maritime",
                    desc: "Superviser les opérations portuaires et la chaîne logistique internationale chez un acteur majeur du commerce maritime.",
                    salaryNote: "Package cadre supérieur",
                    pill: "CDI immédiat",
                    posted: "Publié il y a 1 jour",
                    deadline: "Postuler avant le 5 déc.",
                    location: "Tanger Med · Zone portuaire"
                }
            },
            applications: {
                a1: {
                    org: "Ministère des Finances",
                    title: "Chef de projet digitalisation",
                    meta: "Entretien : 18 nov. 2026 à Rabat",
                    status: "Épreuve orale",
                    action: "Convocation PDF"
                },
                a2: {
                    org: "Agence Nationale des Ports (ANP)",
                    title: "Auditeur des systèmes d'information",
                    meta: "Présélection sur diplôme validée",
                    status: "Dossier accepté",
                    action: "Suivre"
                },
                a3: {
                    org: "Maroc Telecom",
                    title: "Ingénieur solutions cloud",
                    meta: "Transmis au département technique",
                    status: "Étude RH",
                    action: "Détails"
                }
            },
            tools: {
                pastPapers: "Annales et QCM (échelles 10 et 11)",
                simulator: "Simulateur d'entretien oral IA de M3ak",
                law: "Droit administratif et Constitution marocaine"
            },
            toast: {
                opening: "Ouverture — {name}…",
                apply: "Candidature sécurisée lancée pour « {title} » — vérification via CNIE…",
                saved: "« {title} » ajouté à vos favoris",
                matches: "{n} postes correspondent à votre recherche",
                filtering: "Filtrage par {name}",
                cv: "Génération de votre CV numérique certifié…",
                alert: "Alerte créée — nous vous informerons des offres correspondantes",
                sector: "Affichage du secteur {name}",
                history: "Ouverture de l'historique complet de vos candidatures…",
                qr: "Génération d'un QR code de vérification sécurisé…",
                concours: "Ouverture de votre candidature au concours national unifié…",
                referentiel: "Ouverture du référentiel des postes du concours…",
                accelerator: "Ouverture des offres certifiées du secteur privé…",
                more: "En savoir plus sur l'accélérateur d'emploi…"
            }
        },

        education: {
            pageTitle: "Éducation — M3ak Maroc",
            ministry: "Ministère de l'Éducation nationale, du Préscolaire et des Sports · MESRSI",
            portalBadge: "Portail national unifié Massar & Minhaty",
            legalRef: "Réf. légale : Dahir n° 1-20-80 (loi 43-20)",
            citizenSpace: "Espace citoyen · Éducation nationale et enseignement supérieur",
            title: "Éducation et enseignement supérieur",
            subtitle: "Un portail unifié pour l'inscription scolaire nationale, le suivi des élèves via Massar, la préinscription universitaire, les bourses (Minhaty) et les certificats authentifiés par Barid Al-Maghrib.",
            bacCert: "Attestation du Bac",
            newDossier: "Nouveau dossier",
            session: "Session 2026/2027 · Ouverte",
            rsuConnected: "Connecté au RSU",
            minhatyTitle: "Bourse nationale Minhaty",
            minhatyText: "Dépôt direct de la demande et suivi automatique de l'éligibilité aux bourses de l'enseignement supérieur jusqu'à 6 334 DH par an, sur la base du Registre Social Unifié (RSU).",
            deadline: "Date limite de dépôt",
            deadlineValue: "31 juillet 2027",
            eligibility: "Critères d'éligibilité",
            apply: "Vérifier l'éligibilité et postuler",
            schoolYear: "Année scolaire 2026–2027",
            massarSynced: "Code Massar synchronisé",
            massarTitle: "Portail élève Massar & Tawjihi",
            massarText: "Relevés de notes officiels, contrôle continu, suivi du baccalauréat national et orientation universitaire automatisée.",
            preBac: "Candidatures pré-bac",
            wishes: "4 vœux déposés",
            transcripts: "Relevés et résultats",
            dossier: "Accéder au dossier élève",
            student: {
                name: "Yassine El Alaoui",
                active: "Actif",
                meta: "Code Massar : R130094821 · Lycée Ibn Zohr, Agadir",
                cnie: "CNIE vérifiée (BE492019)",
                year: "2e année",
                cycle: "Cycle d'études · Baccalauréat, Sciences Mathématiques A",
                average: "Moyenne générale (S1) · Mention : Très bien",
                validated: "Validée",
                scholarship: "Bourse Minhaty · Versé : 1 900 DH (1re tranche)"
            },
            progress: {
                title: "Avancement des admissions Tawjihi 2027",
                status: "Étape 3 sur 4 · Confirmation de la liste principale",
                filed: "Dépôt de la demande",
                review: "Étude du dossier",
                confirmation: "Confirmation de la place",
                registration: "Inscription administrative"
            },
            calendar: {
                title: "Calendrier scolaire",
                official: "Officiel",
                jun: "JUIN",
                jul: "JUIL",
                aug: "AOÛT",
                bac: "Examens nationaux du baccalauréat",
                bacSub: "Toutes filières, session normale",
                ensa: "Concours d'accès ENSA / ENSAM / ENCG",
                ensaSub: "Plateforme de présélection unifiée",
                ofppt: "Date limite d'inscription OFPPT et Cités des métiers",
                ofpptSub: "Programmes de formation professionnelle qualifiante",
                sync: "Synchroniser l'agenda gouvernemental"
            },
            servicesTitle: "Principaux services administratifs de l'éducation",
            servicesSub: "Portails gouvernementaux officiels interconnectés via le cadre national d'identité numérique.",
            cnieRequired: "Authentification CNIE requise",
            services: {
                enrollment: "Inscription scolaire (Massar)",
                enrollmentText: "Inscrivez les nouveaux élèves dans les établissements publics primaires et secondaires et transférez les dossiers scolaires entre directions provinciales.",
                enrollmentLink: "Portail primaire et collège",
                equivalence: "Équivalence et diplômes",
                equivalenceText: "Vérification numérique des diplômes, apostille et équivalence des diplômes étrangers avec QR codes officiels de Barid Al-Maghrib.",
                equivalenceLink: "Cachet électronique sécurisé",
                university: "Préinscription universitaire",
                universityText: "Candidatures unifiées pour les universités publiques marocaines, les écoles d'ingénieurs (ENSA, ENSAM), les facultés de médecine (FMP/FMD) et les écoles de commerce (ENCG).",
                vocational: "Formation professionnelle (OFPPT)",
                vocationalText: "Inscription aux diplômes de Technicien Spécialisé (TS), aux Cités des Métiers et des Compétences (CMC) et aux qualifications professionnelles reconnues.",
                vocationalLink: "OFPPT Takwin 2027"
            },
            requestsTitle: "Demandes en cours et dossiers scolaires numériques",
            requestsSub: "Connecté directement au système d'information de l'Éducation nationale (système Massar).",
            showing: "Affichage : toutes les démarches (3)",
            table: {
                reference: "Dossier / Référence",
                beneficiary: "Bénéficiaire",
                service: "Type de service",
                date: "Date de dépôt",
                status: "Statut",
                action: "Action",
                son: "Yassine El Alaoui (fils)",
                holder: "Meryem El Alaoui (titulaire)",
                r1Service: "Bourse nationale Minhaty – 1er cycle",
                r1Date: "14 janv. 2027",
                r1Status: "Validée + virement bancaire",
                consult: "Consulter",
                r2Service: "Équivalence de Master spécialisé (MESRSI)",
                r2Date: "03 déc. 2026",
                r2Status: "Certificat numérique prêt",
                downloadQr: "Télécharger le QR",
                r3Service: "Candidature ENSA Rabat / Tanger",
                r3Date: "18 févr. 2027",
                r3Status: "En attente des notes du S2 du Bac",
                editWishes: "Modifier les vœux"
            },
            disclaimer: "Portail géré sous la supervision conjointe de l'État marocain, conforme à la loi n° 09-08 relative à la protection des données personnelles (CNDP) et à la loi n° 43-20 relative aux services de confiance pour les transactions électroniques.",
            cndpRef: "Réf. CNDP : A-S-102/2023",
            assistance: "Assistance dédiée 0800",
            actions: {
                bac: "Préparation de votre attestation du Bac…",
                newDossier: "Création d'un nouveau dossier…",
                eligibility: "Ouverture des critères d'éligibilité…",
                minhaty: "Ouverture de la demande Minhaty…",
                transcripts: "Ouverture des relevés et résultats…",
                dossier: "Ouverture du dossier élève…",
                sync: "Synchronisation de votre agenda gouvernemental…",
                enrollment: "Ouverture de l'inscription scolaire (Massar)…",
                equivalence: "Ouverture de l'équivalence et des diplômes…",
                university: "Ouverture de la préinscription universitaire…",
                vocational: "Ouverture de la formation professionnelle (OFPPT)…",
                consult: "Ouverture du dossier MHT-2027-89412…",
                qr: "Téléchargement du certificat QR du dossier EQV-2026-55021…",
                wishes: "Modification des vœux du dossier TWJ-2027-01039…",
                assistance: "Mise en relation avec l'assistance dédiée…"
            }
        },

        transport: {
            pageTitle: "Transport — M3ak Maroc",
            whereTo: "Où allez-vous ?",
            swap: "Inverser départ et destination",
            startingPoint: "Point de départ",
            currentLocationAlt: "Position actuelle",
            currentLocation: "Ma position actuelle",
            destination: "Destination",
            destinationPlaceholder: "Destination — ou ex. : Inezgane vers Salam",
            modes: { bus: "Bus", tram: "Tram", train: "Train", taxi: "Taxi" },
            modeNames: { bus: "bus", tram: "tram", train: "train", taxi: "taxi" },
            findRoutes: "Trouver des itinéraires",
            chips: { home: "Domicile", office: "Bureau", marina: "Marina Mall" },
            liveTracking: "Suivi en direct",
            liveTrackingSub: "Lignes actives dans votre zone",
            fastPass: "Pass Rapide",
            fastPassSub: "Trajets illimités pendant 24 h",
            buyNow: "Acheter",
            buyTicket: "Acheter un ticket",
            operator: "Bus urbains ALSA",
            busLine: "Bus {n}",
            nextStop: "Prochain arrêt : {stop}",
            minutes: "{n} min",
            arrow: "→",
            youAreHere: "Vous êtes ici",
            status: { onTime: "À l'heure", delay: "+5 min de retard" },
            stops: {
                talborjt: "Talborjt",
                marina: "Marina d'Agadir",
                founty: "Founty",
                bensergao: "Bensergao",
                dcheira: "Dcheira",
                alHouda: "Al Houda",
                gare: "Gare routière d'Agadir"
            },
            alert: {
                line: "Ligne {n} — Arrivée imminente",
                detail: "Arrive dans {n} min à {stop}",
                track: "Suivre en direct"
            },
            toast: {
                swapped: "Départ et destination inversés",
                noDestination: "Saisissez une destination pour voir les itinéraires",
                searching: "Recherche d'itinéraires en {mode} vers {dest}",
                tracking: "Suivi de la ligne L12 en temps réel",
                noGeolocation: "La géolocalisation n'est pas prise en charge sur cet appareil",
                locationUnavailable: "Position indisponible — affichage de {city}",
                passAdded: "Pass Rapide ajouté à votre panier — 30 DH",
                ticket: "Ouverture de l'achat de tickets"
            },
            route: {
                mapTitle: "Google Maps",
                transitTitle: "Itinéraire en transports en commun",
                roadTitle: "Itinéraire routier",
                embedTitle: "Itinéraire sur Google Maps",
                problemTitle: "Aucun itinéraire à afficher",
                noTransit: "Google Maps ne dispose pas de données de bus ou de tram pour ce trajet ; l'itinéraire routier est donc affiché à la place.",
                embedNote: "Ajoutez une clé API Google Maps dans js/config.js pour tracer la ligne sur cette carte et lister chaque étape en bus.",
                loadError: "Impossible de charger Google Maps — affichage de la carte simplifiée.",
                notFound: "Aucun itinéraire trouvé de {from} à {to}.",
                error: "L'itinéraire ne peut pas être calculé pour le moment. Ouvrez-le plutôt dans Google Maps.",
                ride: "Trajet",
                walk: "Marche",
                toward: "direction {headsign}",
                stops: "{n} arrêts",
                openInGoogle: "Ouvrir dans Google Maps",
                clear: "Effacer l'itinéraire",
                unavailableTitle: "Non disponible à Agadir",
                unavailable: "Les services de train et de tram ne sont pas disponibles à Agadir pour le moment. Choisissez Bus ou Taxi pour planifier votre trajet."
            }
        },

        assistant: {
            pageTitle: "Assistant IA — M3ak Maroc",
            title: "Assistant vocal IA",
            subtitle: "Parlez naturellement avec M3ak pour gérer votre identité numérique et vos services.",
            chips: {
                profile: "Ouvrir mon profil",
                identity: "Statut de l'identité numérique",
                transactions: "Afficher les dernières transactions"
            },
            startVoice: "Démarrer une conversation vocale",
            micUnavailable: "Assistant vocal indisponible",
            stats: {
                conversations: "Conversations",
                talkTimeValue: "2,4 h",
                talkTime: "Temps de parole",
                satisfaction: "Satisfaction"
            },
            transcript: "Transcription en direct de la conversation M3ak",
            placeholder: "Écrivez un message ou parlez…",
            speak: "Parler",
            send: "Envoyer",
            spokenLanguages: "Langues parlées",
            active: "Active",
            available: "Disponible",
            capabilities: "Capacités de l'IA",
            navTitle: "Navigation contextuelle",
            navText: "Demandez l'ouverture de sections précises du tableau de bord directement.",
            docsTitle: "Interrogation de documents",
            docsText: "Demandez des résumés ou des données précises de vos documents téléversés.",
            recentSessions: "Sessions vocales récentes",
            footnote: "Vous préférez parler à une personne ?",
            footnoteLink: "Aller au centre d'aide →",
            you: "Vous",
            ai: "IA",
            unavailable: "L'assistance IA est actuellement indisponible. Veuillez utiliser les options ci-dessous pour consulter vos informations.",
            sessions: {
                identity: "Assistance à la vérification d'identité",
                identityWhen: "Aujourd'hui, 10 h 42",
                appointment: "Report de rendez-vous",
                appointmentWhen: "Hier, 14 h 15",
                length: "{min} min {sec} s"
            },
            toast: {
                mic: "L'assistance vocale IA est actuellement indisponible",
                langSelected: "{lang} sélectionné pour la voix",
                playing: "Lecture de « {title} »…",
                history: "Ouverture de votre historique vocal complet…"
            }
        },

        support: {
            pageTitle: "Support — M3ak Maroc",
            searchLabel: "Rechercher dans les articles d'aide",
            searchPlaceholder: "Rechercher de l'aide...",
            heroAlt: "L'équipe support de M3ak aide les citoyens",
            heroTitle: "Comment pouvons-nous vous aider aujourd'hui ?",
            heroText: "Le support M3ak est disponible pour la vérification d'identité, les problèmes de compte et l'assistance technique. Votre sécurité numérique est notre priorité absolue.",
            liveChat: "Chat en direct",
            liveChatText: "Échangez instantanément avec un spécialiste du support.",
            startChat: "Démarrer le chat",
            aiText: "Parlez à l'assistant vocal IA de M3ak pour une aide immédiate.",
            openAi: "Ouvrir l'assistant IA",
            createAccount: "Créez un compte pour l'utiliser",
            ticketTitle: "Soumettre un ticket",
            ticketText: "Notre équipe répondra à votre demande sous 24 heures.",
            createTicket: "Créer un ticket",
            subject: "Objet",
            describe: "Décrivez votre problème...",
            submitTicket: "Envoyer le ticket",
            eyebrow: "À votre service",
            quickHelp: "Aide rapide",
            browseAll: "Parcourir toutes les catégories",
            quick: {
                identity: "Vérification d'identité",
                identityText: "Problèmes de scan ou de vérification de votre identité",
                recover: "Récupération du compte",
                recoverText: "Mot de passe oublié ou accès au compte perdu",
                report: "Signaler un problème",
                reportText: "Vous avez trouvé un bug ou rencontrez une panne technique sur M3ak",
                payment: "Problèmes de paiement",
                paymentText: "Gérez vos factures et abonnements",
                business: "Compte entreprise",
                businessText: "Solutions entreprises et droits d'équipe",
                privacy: "Confidentialité et sécurité",
                privacyText: "Comment nous protégeons et utilisons vos données personnelles"
            },
            faqTitle: "Questions fréquentes",
            faqSubtitle: "Des réponses rapides aux questions fréquentes sur la plateforme d'identité numérique M3ak.",
            faq: {
                q1: "Comment vérifier ma carte d'identité nationale marocaine ?",
                a1: "La vérification est simple. Allez dans « Identité » dans les paramètres de votre compte, puis suivez les étapes guidées pour scanner votre CNIE et confirmer vos données biométriques.",
                q2: "Que se passe-t-il si je perds mon téléphone ?",
                a2: "Vous pouvez récupérer votre compte à l'aide de votre e-mail enregistré. Sur la page de connexion, choisissez « Mot de passe oublié ? » et suivez les étapes de réinitialisation pour retrouver l'accès.",
                q3: "Mes données biométriques sont-elles sécurisées ?",
                a3: "Oui. Toutes les données biométriques sont chiffrées de bout en bout et stockées selon les normes de protection des données personnelles du Royaume du Maroc. Elles ne sont jamais partagées avec des tiers."
            },
            stillTitle: "Besoin d'aide supplémentaire ?",
            stillText: "Notre équipe support premium est prête à vous aider dès maintenant.",
            stillAlt: "Novo, guide du support M3ak",
            toast: {
                chat: "Mise en relation avec un agent du support…",
                ai: "Lancement de l'assistant IA…",
                ticket: "Ticket envoyé — nous répondrons sous 2 à 4 heures"
            }
        },

        finance: {
            pageTitle: "Finances et Trésorerie — M3ak Maroc",
            cnie: "CNIE : A749102",
            upToDate: "À jour auprès de la TGR et de la DGI",
            totalLabel: "Montant total dû",
            heroCur: ".00 DH",
            dueSoon: "2 paiements bientôt dus",
            heroMeta: "Vignette automobile 2026 (700 DH) • Facture Redal Rabat (342,50 DH) • Prélèvement sécurisé via Bank Al-Maghrib",
            payAll: "Tout payer (1 420 DH)",
            historyAria: "Historique des paiements",
            due: "Dû",
            vehicleTax: "DGI • Vignette automobile 2026",
            dh: "DH",
            dueDate: "Échéance : 31 janv.",
            pay: "Payer →",
            oct28: "28 oct.",
            redalIam: "Redal et Fibre Maroc Telecom",
            redalIamSplit: "Redal : 342,50 • IAM : 199",
            account: "Compte : 9812-004",
            paymentsActive: "Versements en cours",
            benefits: "ASD et AMO",
            perMonth: "DH/mois",
            children: "2 enfants • AMO Tadamon",
            nextPayment: "Prochain versement : 15 nov.",
            settled: "Entièrement réglé",
            tgr: "Trésorerie Générale du Royaume (TGR)",
            dhDue: "DH dus",
            housingTaxPaid: "Taxe d'habitation (TH) payée",
            fiscalYear: "Exercice fiscal 2026/27",
            receipt: "Reçu ↓",
            latest: "Dernières transactions certifiées par la TGR",
            viewHistory: "Voir l'historique →",
            downloadReceipt: "Télécharger le reçu",
            downloadNotice: "Télécharger l'avis",
            legal1: "✓ Conforme à la loi 43-20 • Signature électronique qualifiée de l'État marocain",
            legal2: "Royaume du Maroc • Trésorerie Générale du Royaume • Direction Générale des Impôts",
            rows: {
                businessTax: "Direction Générale des Impôts (DGI) • Taxe professionnelle",
                businessTaxMeta: "15 oct. 2026 • Réf. : 2026-TX-984128 • Visé par la TGR",
                businessTaxAmount: "2 450,00 DH",
                redal: "Redal Rabat-Salé • Eau et électricité",
                redalMeta: "28 sept. 2026 • Réf. : RDL-7729-1102 • Reçu émis",
                redalAmount: "312,00 DH",
                asd: "Aide Sociale Directe (ASD) • Versement mensuel",
                asdMeta: "15 sept. 2026 • Réf. : ASD-SEP-2026 • Versé",
                asdAmount: "+500,00 DH"
            },
            payLabels: {
                all: "1 420 DH",
                vehicle: "700 DH — Vignette automobile 2026",
                redal: "541,50 DH — Redal et IAM"
            },
            downloads: {
                housingTax: "Reçu de taxe d'habitation",
                businessTax: "Reçu de taxe professionnelle",
                redal: "Reçu Redal",
                asd: "Avis de versement ASD"
            },
            toast: {
                pay: "Paiement sécurisé de {amount} — redirection vers Bank Al-Maghrib…",
                download: "Téléchargement : {name} (PDF certifié)",
                history: "Ouverture de l'historique complet des transactions TGR…"
            }
        },

        payments: {
            pageTitle: "Paiements — M3ak Maroc",
            title: "Paiements et portefeuille",
            subtitle: "Réglez vos frais administratifs et factures depuis un seul portefeuille unifié.",
            balanceLabel: "Solde M3ak Pay",
            balanceSub: "Accepté par toutes les administrations connectées",
            addFunds: "Recharger",
            history: "Historique",
            recent: "Paiements récents",
            payBill: "Payer une facture",
            items: {
                redal: "Redal — Eau et électricité",
                redalDate: "12 oct. 2026",
                redalAmount: "- 342,50 DH",
                telecom: "Maroc Telecom",
                telecomDate: "05 oct. 2026",
                telecomAmount: "- 199,00 DH",
                propertyTax: "Taxe foncière 2026",
                propertyTaxDate: "28 sept. 2026",
                propertyTaxAmount: "- 850,00 DH"
            },
            cards: {
                utility: "Factures",
                utilityText: "Eau, électricité et télécoms au même endroit.",
                govFees: "Frais administratifs",
                govFeesText: "Frais administratifs pour les permis et documents officiels.",
                tax: "Paiement des impôts",
                taxText: "Impôt sur le revenu, taxe foncière et déclarations de TVA.",
                fines: "Amendes de circulation",
                finesText: "Recherchez et réglez vos amendes de circulation impayées.",
                insurance: "Assurance",
                insuranceText: "Couverture santé AMO et renouvellement de l'assurance automobile.",
                subscriptions: "Abonnements",
                subscriptionsText: "Gérez vos abonnements récurrents aux transports publics et services."
            },
            toast: {
                opening: "Ouverture de {name}…",
                topUp: "Ouverture des options de recharge de votre portefeuille M3ak Pay",
                history: "Ouverture de votre historique de paiements complet"
            }
        },

        health: {
            pageTitle: "Trouvez votre spécialiste — M3ak Maroc",
            title: "Trouvez votre spécialiste",
            subtitle: "Accédez instantanément à des soins de qualité partout au Maroc.",
            official: "Prestataire officiel du service public",
            searchPlaceholder: "Rechercher des médecins, spécialités ou cliniques...",
            allDoctors: "Tous les médecins",
            cardiology: "Cardiologie",
            psychiatry: "Psychiatrie",
            pediatrics: "Pédiatrie",
            ophthalmology: "Ophtalmologie",
            teleTitle: "Téléconsultation",
            teleText: "Consultez les médecins les mieux notés par appel vidéo instantané et sécurisé, où que vous soyez.",
            teleBtn: "Démarrer la consultation",
            visitTitle: "Visite à domicile",
            visitText: "Des soins professionnels à votre porte. Des médecins qualifiés disponibles pour les visites à domicile.",
            visitBtn: "Demander une visite",
            nearby: "Médecins près de chez vous",
            book: "Réserver",
            verifiedTitle: "Professionnels vérifiés",
            verifiedText: "Tous les praticiens sur M3ak sont agréés et vérifiés par le ministère de la Santé.",
            privacy: "Confidentialité des données garantie",
            securePayment: "Paiement sécurisé",
            doctors: {
                sofia: "Dr Sofia El Amrani",
                yasmine: "Dr Yasmine Idrissi",
                jack: "Dr Jack Womor",
                nina: "Dr Nina Olivia",
                cardiologist: "Cardiologue",
                dermatologist: "Dermatologue",
                pediatrician: "Pédiatre",
                ophthalmologist: "Ophtalmologue",
                talborjt: "Agadir, Talborjt (1,2 km)",
                founty: "Agadir, Founty (0,8 km)",
                nouveauTalborjt: "Agadir, Nouveau Talborjt (2,5 km)",
                charaf: "Agadir, Charaf (3,0 km)"
            }
        },

        nav: {
            mySpace: "Mon Espace",
            transport: "Transport",
            housing: "Logement",
            jobs: "Emploi",
            education: "Éducation",
            healthcare: "Santé",
            payments: "Paiements",
            finance: "Finances",
            emergencySupport: "Urgences",
            helpCenter: "Centre d'aide",
            aiAssistant: "Assistant IA",
            logout: "Déconnexion",
            registry: "État civil",
            interior: "Intérieur"
        },

        footer: {
            label: "Pied de page",
            privacy: "Politique de confidentialité",
            terms: "Conditions d'utilisation",
            legal: "Mentions légales",
            security: "Divulgation de sécurité",
            helpCenter: "Centre d'aide",
            rights: "© 2026 Identité numérique M3ak. Tous droits réservés.",
            address: "Vala Bleu · Agadir, Maroc",
            hoursCompact: "Lun–Ven 8h00–20h00 · Sam 10h00–16h00 · Dim fermé",
            copyCompact: "© 2026 Identité numérique M3ak · Horaires en GMT+1",
            contactUs: "Nous contacter",
            workingHours: "Horaires",
            weekdays: "Lundi - Vendredi : 8h00 - 20h00",
            saturday: "Samedi : 10h00 - 16h00",
            sunday: "Dimanche : fermé",
            timezone: "Tous les horaires sont en GMT+1",
            hq: "Siège",
            agadir: "Agadir",
            morocco: "Maroc"
        },

        landing: {
            pageTitle: "M3ak Maroc",
            cardAlt: "Carte d'identité numérique",
            status: "Statut",
            secured: "Sécurisée",
            statusSecured: "Statut : sécurisée",
            heroTitle: "Votre identité numérique",
            heroHighlight: "unifiée",
            heroText: "Accédez en toute sécurité à tous les services publics avec un profil citoyen unique protégé par votre biométrie. Conçu pour le Maroc moderne.",
            getStarted: "Commencer",
            haveAccount: "Vous avez déjà un compte ?",
            logIn: "Se connecter",
            biometric: "Sécurité biométrique",
            encryption: "Standard de chiffrement",
            trouble: "Un problème ?",
            chatSupport: "Discuter avec le support",
            whyTitle: "Pourquoi choisir M3ak ?",
            securityTitle: "Sécurité maximale",
            securityText: "Un chiffrement biométrique aux normes gouvernementales protège votre identité en permanence.",
            securityTextAlt: "Un chiffrement biométrique aux normes gouvernementales garantit que votre identité n'appartient qu'à vous.",
            accessTitle: "Accès instantané",
            accessText: "Fini les files d'attente. Accédez instantanément à tous les portails publics marocains avec une seule connexion.",
            cloudTitle: "Cloud unifié",
            cloudText: "Vos documents sont toujours synchronisés et prêts partout où vous devez justifier de votre situation.",
            cloudTextAlt: "Vos documents sont toujours synchronisés et prêts dès que vous devez justifier de votre situation.",
            contactTitle: "Nous contacter",
            emailSupport: "Support par e-mail"
        },

        auth: {
            identifierLabel: "N° de CNIE ou e-mail",
            identifierPlaceholder: "ex. AB123456",
            password: "Mot de passe",
            email: "E-mail",
            phone: "Numéro de téléphone",
            backToLogin: "Retour à la connexion",
            contact: "Contact",
            assistance: "Assistance",
            errors: {
                enterIdentifier: "Saisissez votre n° de CNIE ou votre e-mail.",
                invalidEmail: "Cette adresse e-mail n'est pas valide.",
                idFormat: "Le n° de CNIE est au format AB123456.",
                passwordLength: "Le mot de passe doit contenir au moins 6 caractères.",
                fullName: "Saisissez votre nom complet.",
                validEmail: "Saisissez une adresse e-mail valide.",
                validPhone: "Saisissez un numéro de téléphone valide."
            },
            login: {
                pageTitle: "Connexion | M3ak Maroc",
                subtitle: "Accédez à votre portail citoyen unifié",
                forgot: "Mot de passe oublié ?",
                signIn: "Se connecter",
                signingIn: "Connexion en cours...",
                orContinue: "Ou continuer avec",
                noAccount: "Pas encore de compte ?",
                createId: "Créez votre identité"
            },
            signup: {
                pageTitle: "Créer un compte — M3ak Maroc",
                previewAlt: "Aperçu de l'identité numérique",
                securityStatus: "Statut de sécurité",
                advancedProtection: "Protection avancée",
                heroTitle: "Sécurisez votre identité numérique",
                heroText: "Rejoignez des milliers de citoyens marocains qui accèdent aux services publics facilement et rapidement, avec une sécurité biométrique de haut niveau.",
                secured: "Sécurisé",
                title: "Créer un compte",
                subtitle: "Commencez votre parcours dans l'écosystème numérique marocain.",
                fullName: "Nom complet",
                fullNamePlaceholder: "Mohamed Idrissi",
                cni: "N° de carte nationale (CNI)",
                creating: "Création du compte...",
                encrypted: "Sécurisé et chiffré en AES 256 bits",
                terms: "En créant un compte, vous acceptez les Conditions d'utilisation et la Politique de confidentialité. © 2026 Services numériques du Royaume du Maroc."
            },
            forgot: {
                pageTitle: "Mot de passe oublié | M3ak Maroc",
                title: "Mot de passe oublié",
                subtitle: "Saisissez votre e-mail ou votre n° de carte nationale (CNI) pour recevoir un code de vérification.",
                label: "E-mail ou n° de carte nationale (CNI)",
                placeholder: "ex. AB123456 ou nom@exemple.com",
                submit: "Envoyer le lien de réinitialisation",
                sending: "Envoi du lien...",
                needHelp: "Besoin d'aide immédiate ?",
                contactSupport: "Contacter le support",
                agent: "Parler à un agent de l'administration"
            },
            reset: {
                pageTitle: "Créer un nouveau mot de passe — M3ak Maroc",
                digitalId: "Identité numérique",
                asideTitle: "Définir un nouveau mot de passe",
                asideText: "Créez un mot de passe fort et sécurisé pour protéger votre identité numérique et votre accès aux services publics.",
                title: "Créer un nouveau mot de passe",
                subtitle: "Veuillez saisir et confirmer votre nouveau mot de passe ci-dessous.",
                newPassword: "Nouveau mot de passe",
                confirmPassword: "Confirmer le nouveau mot de passe",
                mismatch: "Les mots de passe ne correspondent pas.",
                requirements: "Exigences du mot de passe",
                ruleLength: "Au moins 8 caractères",
                ruleNumber: "Au moins un chiffre",
                ruleSpecial: "Au moins un caractère spécial (!@#$%^&*)",
                submit: "Réinitialiser le mot de passe",
                redirecting: "Redirection vers la connexion...",
                needHelp: "Besoin d'aide ?",
                contactSupport: "Contacter le support M3ak"
            }
        },

        emergency: {
            pageTitle: "Centre d'urgence — M3ak Maroc",
            title: "Centre d'urgence",
            subtitle: "Un centre de commande pour l'assistance immédiate et les ressources vitales.",
            countrySuffix: ", Maroc",
            sos: {
                title: "Besoin d'une aide d'urgence ?",
                text: "Maintenez le bouton appuyé pendant 3 secondes pour envoyer une alerte de détresse à tous les services d'urgence et à vos contacts principaux.",
                idle: "Maintenir pour activer",
                holding: "Continuez d'appuyer… {sec} s",
                sent: "Alerte envoyée"
            },
            calls: {
                police: "Police",
                policeSub: "Ligne d'urgence nationale",
                ambulance: "Ambulance",
                ambulanceSub: "Pompiers et secours médicaux",
                gendarmerie: "Gendarmerie Royale",
                gendarmerieSub: "Ligne d'urgence en milieu rural",
                firefighters: "Pompiers",
                firefightersSub: "Protection civile • Incendie et sauvetage",
                quickDial: "Appel rapide"
            },
            map: {
                title: "Carte d'urgence en direct ·",
                hospitals: "Hôpitaux",
                pharmacies: "Pharmacies",
                police: "Commissariats",
                loading: "Chargement des établissements à proximité…",
                layers: { hospitals: "hôpitaux", pharmacies: "pharmacies", police: "commissariats" },
                types: { public: "Public", private: "Privé" },
                cities: { agadir: "Agadir" },
                kmAway: "à {km} km",
                directions: "Itinéraire",
                none: "Aucun résultat dans « {layer} » près de {city}.",
                found: "{count} {layer} trouvés près de {city}",
                offline: " · données hors ligne",
                noCity: "Indiquez votre ville dans « Mon Espace » pour voir les services d'urgence à proximité."
            },
            medical: {
                title: "Fiche médicale",
                edit: "Modifier la fiche médicale",
                bloodType: "Groupe sanguin",
                weight: "Poids",
                allergies: "Allergies",
                medications: "Traitements"
            },
            contacts: {
                title: "Contacts d'urgence",
                mother: "Mère",
                brother: "Frère",
                physician: "Médecin traitant",
                drTazi: "Dr Sara Tazi",
                reachable: "Joignable",
                unreachable: "Injoignable",
                add: "Ajouter un contact",
                fullName: "Nom complet",
                relationship: "Lien de parenté (ex. : Sœur)",
                save: "Enregistrer le contact",
                defaultRole: "Contact"
            },
            procedures: {
                title: "Procédures d'urgence",
                subtitle: "Suivez ces procédures en attendant l'arrivée des secours.",
                firstAid: "Premiers secours",
                firstAidText: "Instructions de RCP, soin des plaies et prise en charge de l'étouffement.",
                fire: "Sécurité incendie",
                fireText: "Itinéraires d'évacuation, utilisation de l'extincteur et confinement du feu.",
                earthquake: "Séisme",
                earthquakeText: "Protocoles « Se baisser, s'abriter, s'agripper » pendant les secousses.",
                road: "Accidents de la route",
                roadText: "Sécuriser les lieux de l'accident et évaluer l'état des blessés."
            },
            dialogs: {
                policeTitle: "Appeler la police",
                policeText: "Vous êtes sur le point d'appeler la police au 19. Ne confirmez qu'en cas d'urgence réelle.",
                ambulanceTitle: "Appeler une ambulance",
                ambulanceText: "Vous êtes sur le point d'appeler une ambulance au 15. Ne confirmez qu'en cas d'urgence réelle.",
                gendarmerieTitle: "Appeler la Gendarmerie Royale",
                gendarmerieText: "Vous êtes sur le point d'appeler la Gendarmerie Royale au 177. Ne confirmez qu'en cas d'urgence réelle.",
                firefightersTitle: "Appeler les pompiers",
                firefightersText: "Vous êtes sur le point d'appeler la Protection civile (incendie et sauvetage) au 15. Ne confirmez qu'en cas d'urgence réelle.",
                notNow: "Pas maintenant",
                call19: "Appeler le 19",
                call15: "Appeler le 15",
                call177: "Appeler le 177",
                sosTitle: "Alerte de détresse (SOS)",
                sosText: "Votre alerte d'urgence a été activée. Votre position sera partagée avec les services d'urgence et vos contacts principaux.",
                cancelAlert: "Annuler l'alerte",
                keepAlert: "Maintenir l'alerte active"
            },
            toast: {
                keep: "L'alerte reste active — les secours peuvent suivre votre position",
                cancelled: "Alerte annulée",
                contactAdded: "Contact ajouté à votre liste d'alerte"
            }
        }
        /* fr:end */
    }
};
