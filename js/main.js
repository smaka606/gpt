// Al Fahd Luxury Seafood - Main JavaScript File

const App = {
    // Centralized initialization
    init: function() {
        // Use DOMContentLoaded for reliable execution
        document.addEventListener('DOMContentLoaded', () => {
            this.initMobileNav();
            this.initProductsPage();
            this.initContactForm();
            this.initUIEnhancements();
            this.initGlobalFeatures(); // For features like the floating button
        });
    },

    // --- INITIALIZATION FUNCTIONS ---

    initMobileNav: function() {
        const mobileToggle = document.getElementById('mobile-toggle');
        const siteHeaderNav = document.querySelector('.site-header__nav');
        const body = document.body;

        if (mobileToggle && siteHeaderNav) {
            mobileToggle.addEventListener('click', () => {
                const nav = document.querySelector('.site-header__nav');
                body.classList.toggle('is-open');
                nav.classList.toggle('is-open');
                const isOpen = body.classList.contains('is-open');
                mobileToggle.setAttribute('aria-expanded', isOpen);
                body.style.overflow = isOpen ? 'hidden' : '';
            });
        }
    },

    initProductsPage: function() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid || typeof products === 'undefined') return;

        // 1. Populate the grid first
        products.forEach(p => {
            const card = document.createElement('div');
            // Add category slugs to class for Isotope filtering
            card.className = `product-card ${p.category}`;
            card.dataset.name = p.name.toLowerCase();
            card.dataset.description = p.description.toLowerCase();
            card.innerHTML = `
                <div class="product-thumb">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                </div>
                <div class="product-body">
                    <h3 class="product-card__title">${p.name}</h3>
                    <p class="product-card__description">${p.description}</p>
                    <button class="btn btn--primary product-price-btn" data-product-name="${p.name}">عرض السعر</button>
                </div>
            `;
            productsGrid.appendChild(card);
        });

        // 2. Initialize Isotope
        const iso = new Isotope(productsGrid, {
            itemSelector: '.product-card',
            layoutMode: 'fitRows',
            // RTL support
            isOriginLeft: false,
            transitionDuration: '0.6s', // Sync with CSS animations
            // Ensure Isotope uses display: none for hiding, which is crucial for Playwright's visibility checks
            hiddenStyle: {
                opacity: 0,
                display: 'none'
            },
            visibleStyle: {
                opacity: 1,
                display: 'block' // or whatever the default is, 'block' is safe
            }
        });

        const handleArrangeComplete = function(filteredItems) {
            const allCards = productsGrid.querySelectorAll('.product-card');
            allCards.forEach(card => card.classList.remove('is-visible'));

            filteredItems.forEach(function(item) {
                setTimeout(() => {
                    item.element.classList.add('is-visible');
                }, 10);
            });
        };

        iso.on('arrangeComplete', handleArrangeComplete);

        // A timeout to trigger the initial layout and animation after Isotope is ready
        setTimeout(() => {
            iso.arrange();
        }, 100);

        // 3. Setup filtering and search
        const searchInput = document.getElementById('searchInput');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const noResultsMessage = document.getElementById('no-results-message');
        let debounceTimer;

        function applyFilters() {
            const categoryFilter = document.querySelector('.filter-btn.active').dataset.cat;
            const searchQuery = searchInput.value.trim().toLowerCase();

            const filterValue = function(item) {
                const categoryMatch = categoryFilter ? item.classList.contains(categoryFilter) : true;
                const searchMatch = searchQuery ? (item.dataset.name.includes(searchQuery) || item.dataset.description.includes(searchQuery)) : true;
                return categoryMatch && searchMatch;
            };

            iso.arrange({ filter: filterValue });

            // Show/hide no results message
            setTimeout(() => {
                if (iso.filteredItems.length === 0) {
                    noResultsMessage.style.display = 'block';
                } else {
                    noResultsMessage.style.display = 'none';
                }
            }, 300); // Wait for animation to finish
        }

        // Filter button logic
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilters();
            });
        });

        // Search input logic (with debouncing)
        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(applyFilters, 300);
        });

        // --- WhatsApp Button Logic (delegated to the grid) ---
        productsGrid.addEventListener('click', function(e) {
            if (e.target.classList.contains('product-price-btn')) {
                const productName = e.target.dataset.productName;
                App.openWhatsAppInquiry(productName);
            }
        });
    },

    initGlobalFeatures: function() {
        // --- Header CTA Button ---
        const headerPriceQuoteBtn = document.querySelector('.site-header__actions .btn');
        if(headerPriceQuoteBtn) {
            headerPriceQuoteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                App.openWhatsAppInquiry();
            });
        }

        // --- Products Page Top Button ---
        const topRequestBtn = document.getElementById('topRequestBtn');
        if(topRequestBtn) {
            topRequestBtn.addEventListener('click', () => {
                App.openWhatsAppInquiry();
            });
        }

        // --- Floating Action Button (FAB) ---
        const fab = document.createElement('div');
        fab.className = 'floating-action-btn';
        fab.setAttribute('role', 'button');
        fab.setAttribute('tabindex', '0');
        fab.setAttribute('aria-label', 'تحدث معنا الآن عبر واتساب');
        fab.innerHTML = `
            <svg viewBox="0 0 32 32" class="whatsapp-icon"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.38.288-.72.288-1.447.214-1.585-.073-.143-.302-.215-.6-.215h-.487z" fill-rule="evenodd"></path></svg>
            <span class="tooltip">تحدث معنا الآن</span>
        `;
        document.body.appendChild(fab);

        fab.addEventListener('click', () => {
            // A more generic, friendly opening message for the FAB
            const msg = 'مرحبًا شركة الفهد، عندي استفسار.';
            App.openWhatsAppInquiry(null, msg); // Use a custom message
        });
    },

    openWhatsAppInquiry: function(productName, customMessage) {
        const phone = '201143343338';
        let msg;

        if (customMessage) {
            msg = customMessage;
        } else if (productName) {
            // Casual Arabic message for a specific product
            msg = `مرحبًا محمد، ممكن أعرف سعر المنتج هذا؟ "${productName}"`;
        } else {
            // Casual Arabic message for a general price list
            msg = 'مرحبًا، ممكن ترسل لي قائمة الأسعار الكاملة للمنتجات المتوفرة؟ شكرًا!';
        }

        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
        window.open(whatsappUrl, '_blank');
    },

    initContactForm: function() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const formStatusMessage = document.getElementById('form-status-message');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.parentElement.classList.add('error');
                } else {
                    field.parentElement.classList.remove('error');
                }
            });

            if (isValid) {
                formStatusMessage.textContent = 'شكراً لك! تم إرسال رسالتك بنجاح.';
                formStatusMessage.className = 'form-status success';
                form.reset();
            } else {
                formStatusMessage.textContent = 'يرجى تصحيح الأخطاء في النموذج.';
                formStatusMessage.className = 'form-status error';
            }
            formStatusMessage.style.display = 'block';
        });
    },

    initUIEnhancements: function() {
        // Active Nav Link Highlighting
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.site-header__nav-list a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').split('/').pop() === currentPage) {
                link.classList.add('active');
            }
        });

        // Intersection Observer for scroll animations (excluding product cards, which are handled by Isotope)
        const animatedElements = document.querySelectorAll('.section, .features-grid, .team-member-card, .value-item, .faq-item, .about-story-card');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));

        // Parallax Hero
        const hero = document.querySelector('.hero-section');
        if (hero) {
            window.addEventListener('scroll', () => {
                hero.style.backgroundPositionY = window.pageYOffset * 0.5 + 'px';
            }, { passive: true });
        }

        // Inject CSS for error states and animations
        const style = document.createElement('style');
        style.innerHTML = `
            .form-group.error input, .form-group.error textarea { border-color: #ef4444 !important; }
            .form-group.error label::after { content: ' *مطلوب'; color: #ef4444; margin-right: 5px; }
            .form-status { padding: var(--space-sm); border-radius: var(--border-radius-sm); margin-top: var(--space-md); text-align: center; }
            .form-status.success { background-color: #10b981; color: var(--color-white); }
            .form-status.error { background-color: #ef4444; color: var(--color-white); }
            .section, .features-grid, .product-card, .team-member-card, .value-item, .faq-item, .about-story-card {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .section.is-visible, .features-grid.is-visible, .product-card.is-visible, .team-member-card.is-visible, .value-item.is-visible, .faq-item.is-visible, .about-story-card.is-visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
};

// Start the application
App.init();
