// Enhanced JavaScript for Al Fahd Company Website
// Modern, responsive, and feature-rich functionality

// Product data with comprehensive seafood catalog
const products = [
    // Shrimp Products (1-25)
    { id: 1, name: "جمبري جامبو طازج", category: "shrimp", image: "images/product1.jpg", description: "جمبري جامبو طازج عالي الجودة، مثالي للشوي والقلي" },
    { id: 2, name: "جمبري متوسط مقشر", category: "shrimp", image: "images/product2.jpg", description: "جمبري متوسط الحجم مقشر وجاهز للطبخ" },
    { id: 3, name: "جمبري صغير للسلطات", category: "shrimp", image: "images/product3.jpg", description: "جمبري صغير مثالي للسلطات والمقبلات" },
    { id: 4, name: "جمبري بالقشر طازج", category: "shrimp", image: "images/product4.jpg", description: "جمبري طازج بالقشر محفوظ في أفضل ظروف التبريد" },
    { id: 5, name: "جمبري مجمد فاخر", category: "shrimp", image: "images/product5.jpg", description: "جمبري مجمد بتقنية التجميد السريع للحفاظ على النضارة" },
    { id: 6, name: "جمبري تايجر كبير", category: "shrimp", image: "images/product6.jpg", description: "جمبري تايجر كبير الحجم مستورد عالي الجودة" },
    { id: 7, name: "جمبري أبيض طازج", category: "shrimp", image: "images/product7.jpg", description: "جمبري أبيض طازج من البحر الأبيض المتوسط" },
    { id: 8, name: "جمبري وردي فاخر", category: "shrimp", image: "images/product8.jpg", description: "جمبري وردي فاخر بطعم مميز ولحم طري" },
    { id: 9, name: "جمبري للشوي", category: "shrimp", image: "images/product9.jpg", description: "جمبري كبير مخصص للشوي والباربكيو" },
    { id: 10, name: "جمبري مقلي جاهز", category: "shrimp", image: "images/product10.jpg", description: "جمبري مقلي جاهز للتسخين والتقديم" },
    { id: 11, name: "جمبري بالثوم والزبدة", category: "shrimp", image: "images/product11.jpg", description: "جمبري متبل بالثوم والزبدة جاهز للطبخ" },
    { id: 12, name: "جمبري للباستا", category: "shrimp", image: "images/product12.jpg", description: "جمبري متوسط مثالي لأطباق الباستا" },
    { id: 13, name: "جمبري مدخن", category: "shrimp", image: "images/product13.jpg", description: "جمبري مدخن بطريقة تقليدية لنكهة مميزة" },
    { id: 14, name: "جمبري للسوشي", category: "shrimp", image: "images/product14.jpg", description: "جمبري طازج عالي الجودة مخصص للسوشي" },
    { id: 15, name: "جمبري بالكاري", category: "shrimp", image: "images/product15.jpg", description: "جمبري متبل بالكاري والتوابل الهندية" },
    { id: 16, name: "جمبري للسلطة الروسية", category: "shrimp", image: "images/product16.jpg", description: "جمبري صغير مسلوق جاهز للسلطات" },
    { id: 17, name: "جمبري بالليمون", category: "shrimp", image: "images/product17.jpg", description: "جمبري طازج متبل بالليمون والأعشاب" },
    { id: 18, name: "جمبري للشوربة", category: "shrimp", image: "images/product18.jpg", description: "جمبري صغير مثالي لشوربة المأكولات البحرية" },
    { id: 19, name: "جمبري مقرمش", category: "shrimp", image: "images/product19.jpg", description: "جمبري مغطى بالبقسماط للقلي المقرمش" },
    { id: 20, name: "جمبري بالفلفل الأسود", category: "shrimp", image: "images/product20.jpg", description: "جمبري متبل بالفلفل الأسود والتوابل" },
    { id: 21, name: "جمبري للريزوتو", category: "shrimp", image: "images/product21.jpg", description: "جمبري متوسط مثالي لأطباق الريزوتو" },
    { id: 22, name: "جمبري بالزنجبيل", category: "shrimp", image: "images/product22.jpg", description: "جمبري طازج متبل بالزنجبيل الطازج" },
    { id: 23, name: "جمبري للتمبورا", category: "shrimp", image: "images/product23.jpg", description: "جمبري كبير مخصص للتمبورا اليابانية" },
    { id: 24, name: "جمبري بالأعشاب", category: "shrimp", image: "images/product24.jpg", description: "جمبري متبل بخليط الأعشاب الطازجة" },
    { id: 25, name: "جمبري للسندويتش", category: "shrimp", image: "images/product25.jpg", description: "جمبري صغير مطبوخ جاهز للسندويتشات" },

    // Fish Products (26-60)
    { id: 26, name: "سمك بلطي طازج", category: "fish", image: "images/product26.jpg", description: "سمك بلطي طازج من نهر النيل عالي الجودة" },
    { id: 27, name: "سمك بوري مشوي", category: "fish", image: "images/product27.jpg", description: "سمك بوري طازج مثالي للشوي والقلي" },
    { id: 28, name: "سمك موسى فيليه", category: "fish", image: "images/product28.jpg", description: "فيليه سمك موسى طازج بدون عظم" },
    { id: 29, name: "سمك دنيس طازج", category: "fish", image: "images/product29.jpg", description: "سمك دنيس طازج من البحر الأبيض المتوسط" },
    { id: 30, name: "سمك قاروص كبير", category: "fish", image: "images/product30.jpg", description: "سمك قاروص كبير طازج عالي الجودة" },
    { id: 31, name: "سمك مكرونة طازج", category: "fish", image: "images/product31.jpg", description: "سمك مكرونة طازج غني بالأوميجا 3" },
    { id: 32, name: "سمك تونة طازج", category: "fish", image: "images/product32.jpg", description: "سمك تونة طازج عالي الجودة للسوشي" },
    { id: 33, name: "سمك هامور فاخر", category: "fish", image: "images/product33.jpg", description: "سمك هامور فاخر من البحر الأحمر" },
    { id: 34, name: "سمك شعور طازج", category: "fish", image: "images/product34.jpg", description: "سمك شعور طازج بطعم مميز" },
    { id: 35, name: "سمك ناجل أحمر", category: "fish", image: "images/product35.jpg", description: "سمك ناجل أحمر طازج من البحر الأحمر" },
    { id: 36, name: "سمك برانزينو", category: "fish", image: "images/product36.jpg", description: "سمك برانزينو طازج مستورد عالي الجودة" },
    { id: 37, name: "سمك دوراد ذهبي", category: "fish", image: "images/product37.jpg", description: "سمك دوراد ذهبي طازج بلحم أبيض طري" },
    { id: 38, name: "سمك سردين طازج", category: "fish", image: "images/product38.jpg", description: "سمك سردين طازج غني بالفيتامينات" },
    { id: 39, name: "سمك أنشوجة مملحة", category: "fish", image: "images/product39.jpg", description: "سمك أنشوجة مملحة تقليدية للمقبلات" },
    { id: 40, name: "سمك كود فيليه", category: "fish", image: "images/product40.jpg", description: "فيليه سمك كود طازج بدون عظم" },
    { id: 41, name: "سمك هاليبوت", category: "fish", image: "images/product41.jpg", description: "سمك هاليبوت طازج بلحم أبيض ناعم" },
    { id: 42, name: "سمك ماهي ماهي", category: "fish", image: "images/product42.jpg", description: "سمك ماهي ماهي الاستوائي الطازج" },
    { id: 43, name: "سمك سنابر أحمر", category: "fish", image: "images/product43.jpg", description: "سمك سنابر أحمر طازج عالي الجودة" },
    { id: 44, name: "سمك مارلين", category: "fish", image: "images/product44.jpg", description: "سمك مارلين الفاخر للمناسبات الخاصة" },
    { id: 45, name: "سمك سيف طازج", category: "fish", image: "images/product45.jpg", description: "سمك سيف طازج بلحم كثيف ولذيذ" },
    { id: 46, name: "سمك مرجان", category: "fish", image: "images/product46.jpg", description: "سمك مرجان طازج من أعماق البحر" },
    { id: 47, name: "سمك باراكودا", category: "fish", image: "images/product47.jpg", description: "سمك باراكودا طازج بطعم قوي مميز" },
    { id: 48, name: "سمك جروبر", category: "fish", image: "images/product48.jpg", description: "سمك جروبر كبير طازج عالي الجودة" },
    { id: 49, name: "سمك أمبرجاك", category: "fish", image: "images/product49.jpg", description: "سمك أمبرجاك طازج غني بالبروتين" },
    { id: 50, name: "سمك فلوندر", category: "fish", image: "images/product50.jpg", description: "سمك فلوندر المسطح طازج ولذيذ" },
    { id: 51, name: "سمك تيلابيا", category: "fish", image: "images/product51.jpg", description: "سمك تيلابيا طازج سهل التحضير" },
    { id: 52, name: "سمك كاتفيش", category: "fish", image: "images/product52.jpg", description: "سمك كاتفيش طازج بلحم أبيض ناعم" },
    { id: 53, name: "سمك ترويت", category: "fish", image: "images/product53.jpg", description: "سمك ترويت طازج من المياه الباردة" },
    { id: 54, name: "سمك باس البحر", category: "fish", image: "images/product54.jpg", description: "سمك باس البحر طازج عالي الجودة" },
    { id: 55, name: "سمك بومبانو", category: "fish", image: "images/product55.jpg", description: "سمك بومبانو الفضي طازج ولذيذ" },
    { id: 56, name: "سمك كينج فيش", category: "fish", image: "images/product56.jpg", description: "سمك كينج فيش الملكي طازج" },
    { id: 57, name: "سمك واهو", category: "fish", image: "images/product57.jpg", description: "سمك واهو السريع طازج من المحيط" },
    { id: 58, name: "سمك دولفين", category: "fish", image: "images/product58.jpg", description: "سمك دولفين (ماهي ماهي) طازج" },
    { id: 59, name: "سمك تونا الزعنفة الصفراء", category: "fish", image: "images/product59.jpg", description: "تونا الزعنفة الصفراء طازجة للسوشي" },
    { id: 60, name: "سمك مولت", category: "fish", image: "images/product60.jpg", description: "سمك مولت الصغير طازج للقلي" },

    // Squid Products (61-80)
    { id: 61, name: "كاليماري طازج كبير", category: "squid", image: "images/product61.jpg", description: "كاليماري طازج كبير الحجم مثالي للحشو" },
    { id: 62, name: "كاليماري حلقات", category: "squid", image: "images/product62.jpg", description: "حلقات كاليماري جاهزة للقلي والتقديم" },
    { id: 63, name: "كاليماري مقطع شرائح", category: "squid", image: "images/product63.jpg", description: "كاليماري مقطع شرائح جاهز للطبخ" },
    { id: 64, name: "كاليماري محشي", category: "squid", image: "images/product64.jpg", description: "كاليماري محشي بالأرز والخضار" },
    { id: 65, name: "كاليماري مقلي مقرمش", category: "squid", image: "images/product65.jpg", description: "كاليماري مقلي مقرمش جاهز للتقديم" },
    { id: 66, name: "كاليماري بالثوم", category: "squid", image: "images/product66.jpg", description: "كاليماري متبل بالثوم والبقدونس" },
    { id: 67, name: "كاليماري للسلطة", category: "squid", image: "images/product67.jpg", description: "كاليماري صغير مسلوق للسلطات" },
    { id: 68, name: "كاليماري مدخن", category: "squid", image: "images/product68.jpg", description: "كاليماري مدخن بطريقة تقليدية" },
    { id: 69, name: "كاليماري بالحبر", category: "squid", image: "images/product69.jpg", description: "كاليماري طازج مع الحبر الطبيعي" },
    { id: 70, name: "كاليماري للباستا", category: "squid", image: "images/product70.jpg", description: "كاليماري مقطع مثالي لأطباق الباستا" },
    { id: 71, name: "أخطبوط طازج كبير", category: "squid", image: "images/product71.jpg", description: "أخطبوط طازج كبير عالي الجودة" },
    { id: 72, name: "أخطبوط صغير", category: "squid", image: "images/product72.jpg", description: "أخطبوط صغير طازج للسلطات" },
    { id: 73, name: "أخطبوط مسلوق", category: "squid", image: "images/product73.jpg", description: "أخطبوط مسلوق جاهز للتقديم" },
    { id: 74, name: "أخطبوط مشوي", category: "squid", image: "images/product74.jpg", description: "أخطبوط مشوي بالأعشاب والليمون" },
    { id: 75, name: "أخطبوط بالزيت والخل", category: "squid", image: "images/product75.jpg", description: "أخطبوط متبل بالزيت والخل" },
    { id: 76, name: "كاليماري جامبو", category: "squid", image: "images/product76.jpg", description: "كاليماري جامبو كبير الحجم فاخر" },
    { id: 77, name: "كاليماري بالليمون", category: "squid", image: "images/product77.jpg", description: "كاليماري طازج متبل بالليمون" },
    { id: 78, name: "كاليماري للشوي", category: "squid", image: "images/product78.jpg", description: "كاليماري كامل مثالي للشوي" },
    { id: 79, name: "أخطبوط بالطماطم", category: "squid", image: "images/product79.jpg", description: "أخطبوط مطبوخ بصلصة الطماطم" },
    { id: 80, name: "كاليماري بالفلفل", category: "squid", image: "images/product80.jpg", description: "كاليماري متبل بالفلفل الحار" },

    // Crab & Lobster Products (81-95)
    { id: 81, name: "استاكوزا طازجة كبيرة", category: "crab-lobster", image: "images/product81.jpg", description: "استاكوزا طازجة كبيرة الحجم فاخرة" },
    { id: 82, name: "استاكوزا متوسطة", category: "crab-lobster", image: "images/product82.jpg", description: "استاكوزا متوسطة الحجم طازجة" },
    { id: 83, name: "ذيل استاكوزا", category: "crab-lobster", image: "images/product83.jpg", description: "ذيل استاكوزا طازج بدون قشر" },
    { id: 84, name: "استاكوزا مسلوقة", category: "crab-lobster", image: "images/product84.jpg", description: "استاكوزا مسلوقة جاهزة للتقديم" },
    { id: 85, name: "استاكوزا مشوية", category: "crab-lobster", image: "images/product85.jpg", description: "استاكوزا مشوية بالزبدة والثوم" },
    { id: 86, name: "سلطعون طازج", category: "crab-lobster", image: "images/product86.jpg", description: "سلطعون طازج عالي الجودة" },
    { id: 87, name: "سلطعون أزرق", category: "crab-lobster", image: "images/product87.jpg", description: "سلطعون أزرق طازج من البحر" },
    { id: 88, name: "لحم سلطعون", category: "crab-lobster", image: "images/product88.jpg", description: "لحم سلطعون طازج منزوع القشر" },
    { id: 89, name: "سلطعون ناعم القشرة", category: "crab-lobster", image: "images/product89.jpg", description: "سلطعون ناعم القشرة للقلي" },
    { id: 90, name: "استاكوزا صخرية", category: "crab-lobster", image: "images/product90.jpg", description: "استاكوزا صخرية طازجة فاخرة" },
    { id: 91, name: "سلطعون كينج", category: "crab-lobster", image: "images/product91.jpg", description: "سلطعون كينج كبير الحجم" },
    { id: 92, name: "أرجل سلطعون", category: "crab-lobster", image: "images/product92.jpg", description: "أرجل سلطعون طازجة مقطعة" },
    { id: 93, name: "استاكوزا حمراء", category: "crab-lobster", image: "images/product93.jpg", description: "استاكوزا حمراء طازجة مميزة" },
    { id: 94, name: "سلطعون للسلطة", category: "crab-lobster", image: "images/product94.jpg", description: "لحم سلطعون للسلطات والمقبلات" },
    { id: 95, name: "استاكوزا بالزبدة", category: "crab-lobster", image: "images/product95.jpg", description: "استاكوزا مطبوخة بالزبدة والأعشاب" },

    // Herring & Pickled Fish (96-105)
    { id: 96, name: "رنجة مملحة تقليدية", category: "herring", image: "images/product96.jpg", description: "رنجة مملحة بالطريقة التقليدية المصرية" },
    { id: 97, name: "فسيخ بلدي", category: "herring", image: "images/product97.jpg", description: "فسيخ بلدي أصلي عالي الجودة" },
    { id: 98, name: "رنجة مدخنة", category: "herring", image: "images/product98.jpg", description: "رنجة مدخنة بطريقة احترافية" },
    { id: 99, name: "فسيخ فاخر", category: "herring", image: "images/product99.jpg", description: "فسيخ فاخر للمناسبات الخاصة" },
    { id: 100, name: "رنجة بالزيت", category: "herring", image: "images/product100.jpg", description: "رنجة محفوظة بزيت الزيتون" },
    { id: 101, name: "فسيخ مقطع", category: "herring", image: "images/product101.jpg", description: "فسيخ مقطع جاهز للتقديم" },
    { id: 102, name: "رنجة هولندية", category: "herring", image: "images/product102.jpg", description: "رنجة هولندية مستوردة عالية الجودة" },
    { id: 103, name: "فسيخ بالليمون", category: "herring", image: "images/product103.jpg", description: "فسيخ متبل بالليمون والبصل" },
    { id: 104, name: "رنجة للفطار", category: "herring", image: "images/product104.jpg", description: "رنجة مقطعة جاهزة للفطار" },
    { id: 105, name: "فسيخ ملوكي", category: "herring", image: "images/product105.jpg", description: "فسيخ ملوكي فاخر للضيافة" },

    // Salmon Products (106-110)
    { id: 106, name: "سلمون نرويجي طازج", category: "salmon", image: "images/product106.jpg", description: "سلمون نرويجي طازج عالي الجودة" },
    { id: 107, name: "فيليه سلمون", category: "salmon", image: "images/product107.jpg", description: "فيليه سلمون طازج بدون عظم" },
    { id: 108, name: "سلمون مدخن", category: "salmon", image: "images/product108.jpg", description: "سلمون مدخن فاخر للمقبلات" },
    { id: 109, name: "سلمون للسوشي", category: "salmon", image: "images/product109.jpg", description: "سلمون طازج عالي الجودة للسوشي" },
    { id: 110, name: "سلمون مشوي", category: "salmon", image: "images/product110.jpg", description: "سلمون مشوي بالأعشاب والليمون" },

    // Miscellaneous Products (111-115)
    { id: 111, name: "بلح البحر", category: "miscellaneous", image: "images/product111.jpg", description: "بلح البحر الطازج عالي الجودة" },
    { id: 112, name: "محار طازج", category: "miscellaneous", image: "images/product112.jpg", description: "محار طازج من أفضل المصادر" },
    { id: 113, name: "قنديل البحر", category: "miscellaneous", image: "images/product113.jpg", description: "قنديل البحر الطازج للأطباق الآسيوية" },
    { id: 114, name: "خيار البحر", category: "miscellaneous", image: "images/product114.jpg", description: "خيار البحر الطازج عالي القيمة الغذائية" },
    { id: 115, name: "طحالب بحرية", category: "miscellaneous", image: "images/product115.jpg", description: "طحالب بحرية طازجة غنية بالمعادن" }
];

// DOM Elements
let currentProducts = [...products];
let searchInput, filterButtons, productsGrid, noResults;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeProducts();
    initializeContactForm();
    initializeAnimations();
    initializeAccessibility();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                navToggle.focus();
            }
        });
    }
    
    // Header scroll effect
    if (header) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            
            lastScrollY = currentScrollY;
        });
    }
}

// Products functionality
function initializeProducts() {
    // Only initialize on products page
    if (!document.querySelector('.products-page')) return;
    
    searchInput = document.getElementById('searchInput');
    filterButtons = document.querySelectorAll('.filter-btn');
    productsGrid = document.getElementById('productsGrid');
    noResults = document.getElementById('noResults');
    
    if (!productsGrid) return;
    
    // Initialize search
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }
    
    // Initialize filters
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            handleFilter(category, this);
        });
    });
    
    // Initial render
    renderProducts(products);
}

// Search functionality
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }
    
    renderProducts(currentProducts);
    announceSearchResults(currentProducts.length, searchInput.value);
}

// Filter functionality
function handleFilter(category, button) {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Filter products
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === category);
    }
    
    // Apply search if there's a search query
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (query) {
        currentProducts = currentProducts.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }
    
    renderProducts(currentProducts);
    announceFilterResults(currentProducts.length, button.textContent);
}

// Render products
function renderProducts(productsToRender) {
    if (!productsGrid) return;
    
    if (productsToRender.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <article class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/1.jpg'">
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="openQuickView(${product.id})" aria-label="عرض سريع لـ ${product.name}">
                        <span>عرض سريع</span>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <a href="https://wa.me/201143343338?text=أريد طلب ${encodeURIComponent(product.name)}" 
                       class="btn btn-whatsapp btn-sm" 
                       target="_blank" 
                       rel="noopener"
                       aria-label="اطلب ${product.name} عبر الواتساب">
                        <span>اطلب عبر الواتساب</span>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
    
    // Add animation to new products
    const productCards = productsGrid.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Quick view functionality
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeQuickView()"></div>
        <div class="modal-content" role="dialog" aria-labelledby="modal-title" aria-modal="true">
            <button class="modal-close" onclick="closeQuickView()" aria-label="إغلاق">×</button>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='images/1.jpg'">
                </div>
                <div class="modal-info">
                    <h2 id="modal-title">${product.name}</h2>
                    <p class="modal-description">${product.description}</p>
                    <div class="modal-category">
                        <span>الفئة: ${getCategoryName(product.category)}</span>
                    </div>
                    <div class="modal-actions">
                        <a href="https://wa.me/201143343338?text=أريد طلب ${encodeURIComponent(product.name)}" 
                           class="btn btn-whatsapp btn-lg" 
                           target="_blank" 
                           rel="noopener">
                            <span>اطلب عبر الواتساب</span>
                        </a>
                        <button class="btn btn-secondary btn-lg" onclick="closeQuickView()">
                            <span>إغلاق</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const closeButton = modal.querySelector('.modal-close');
    closeButton.focus();
    
    // Trap focus in modal
    trapFocus(modal);
}

function closeQuickView() {
    const modal = document.querySelector('.quick-view-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Get category name in Arabic
function getCategoryName(category) {
    const categoryNames = {
        'shrimp': 'الجمبري',
        'fish': 'الأسماك',
        'squid': 'الحبار',
        'crab-lobster': 'السلطعون والاستاكوزا',
        'herring': 'الرنجة والفسيخ',
        'salmon': 'السلمون',
        'miscellaneous': 'متنوعة'
    };
    return categoryNames[category] || category;
}

// Clear filters function
function clearFilters() {
    if (searchInput) searchInput.value = '';
    
    filterButtons.forEach(btn => btn.classList.remove('active'));
    const allButton = document.querySelector('[data-category="all"]');
    if (allButton) allButton.classList.add('active');
    
    currentProducts = [...products];
    renderProducts(currentProducts);
    
    if (searchInput) searchInput.focus();
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'هذا الحقل مطلوب';
        isValid = false;
    }
    
    // Specific field validations
    if (value && fieldName === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'يرجى إدخال بريد إلكتروني صحيح';
            isValid = false;
        }
    }
    
    if (value && fieldName === 'phone') {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            errorMessage = 'يرجى إدخال رقم هاتف صحيح';
            isValid = false;
        }
    }
    
    // Display error
    const errorElement = document.getElementById(`${fieldName}-error`);
    if (errorElement) {
        if (isValid) {
            errorElement.style.display = 'none';
            errorElement.textContent = '';
            field.classList.remove('error');
        } else {
            errorElement.style.display = 'block';
            errorElement.textContent = errorMessage;
            field.classList.add('error');
        }
    }
    
    return isValid;
}

function clearFieldError(field) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
        errorElement.style.display = 'none';
        errorElement.textContent = '';
        field.classList.remove('error');
    }
}

function submitForm() {
    const formMessage = document.getElementById('formMessage');
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>جاري الإرسال...</span>';
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        formMessage.style.display = 'block';
        formMessage.className = 'form-message success';
        formMessage.textContent = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitButton.disabled = false;
        submitButton.innerHTML = '<span>إرسال الرسالة</span>';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        
    }, 2000);
}

// Animation and scroll effects
function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card, .team-card, .hero-content, .section-title');
    animatedElements.forEach(el => observer.observe(el));
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Accessibility features
function initializeAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Focus management for modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeQuickView();
        }
    });
    
    // Announce dynamic content changes
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.id = 'announcer';
    document.body.appendChild(announcer);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function announceSearchResults(count, query) {
    const announcer = document.getElementById('announcer');
    if (announcer) {
        if (count === 0) {
            announcer.textContent = `لم يتم العثور على نتائج للبحث: ${query}`;
        } else {
            announcer.textContent = `تم العثور على ${count} منتج للبحث: ${query}`;
        }
    }
}

function announceFilterResults(count, category) {
    const announcer = document.getElementById('announcer');
    if (announcer) {
        announcer.textContent = `تم تصفية المنتجات: ${count} منتج في فئة ${category}`;
    }
}

function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Performance optimization
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Service Worker registration for PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export functions for global access
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.clearFilters = clearFilters;

