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
        }
        /* ar:end */
    }
};
