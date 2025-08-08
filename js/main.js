// Al Fahd Luxury Seafood - Main JavaScript File

const App = {
    // Centralized initialization
    init: function() {
        // Poll until the DOM is ready and the products data is loaded.
        // This is more robust than relying on DOMContentLoaded and script order alone.
        if (document.readyState === 'loading' || typeof products === 'undefined') {
            setTimeout(() => App.init(), 50);
            return;
        }

        // Once ready, run all initialization functions
        this.initMobileNav();
        this.initProductsPage();
        this.initContactForm();
        this.initUIEnhancements();
    },

    // --- INITIALIZATION FUNCTIONS ---

    initMobileNav: function() {
        const mobileToggle = document.getElementById('mobile-toggle');
        const siteHeaderNav = document.querySelector('.site-header__nav');
        const body = document.body;

        if (mobileToggle && siteHeaderNav) {
            mobileToggle.addEventListener('click', () => {
                body.classList.toggle('is-open');
                const isOpen = body.classList.contains('is-open');
                mobileToggle.setAttribute('aria-expanded', isOpen);
                body.style.overflow = isOpen ? 'hidden' : '';
            });
        }
    },

    initProductsPage: function() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return; // Only run on products page

        // 1. Create all card elements and append them to the grid
        products.forEach(product => {
            const card = document.createElement('div');
            // Add category class for Isotope filtering
            card.className = `product-card product-card--page ${product.category}`;

            card.innerHTML = `
                <div class="product-card__image" style="background-image: url('${product.image}');"></div>
                <div class="product-card__content">
                    <div>
                        <h3 class="product-card__title">${product.name}</h3>
                        <p class="product-card__description">${product.description}</p>
                    </div>
                    <a href="#" class="btn btn--primary product-price-btn" data-product-name="${product.name}">عرض السعر</a>
                </div>
            `;
            productsGrid.appendChild(card);
        });

        // 2. Initialize Isotope
        const $grid = $('.products-grid').isotope({
            itemSelector: '.product-card',
            layoutMode: 'fitRows',
            // Set initial sort to something logical if needed, e.g., by name
            getSortData: {
                name: '.product-card__title'
            },
            sortBy: 'name'
        });

        // Handle imagesLoaded to relayout after images are loaded
        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });

        // 3. Handle filter button clicks
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filterValue = button.dataset.category === 'all' ? '*' : `.${button.dataset.category}`;
                $grid.isotope({ filter: filterValue });

                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        // 4. Handle search input
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('keyup', () => {
            const searchTerm = searchInput.value.toLowerCase();
            $grid.isotope({
                filter: function() {
                    // Combine with the current category filter
                    const categoryFilter = document.querySelector('.filter-btn.active').dataset.category;
                    const matchesCategory = categoryFilter === 'all' || $(this).hasClass(categoryFilter);

                    const name = $(this).find('.product-card__title').text().toLowerCase();
                    return matchesCategory && name.includes(searchTerm);
                }
            });
        });

        // 5. Handle WhatsApp button clicks (event delegation)
        productsGrid.addEventListener('click', function(e) {
            if (e.target.classList.contains('product-price-btn')) {
                e.preventDefault();
                const productName = e.target.dataset.productName;
                const message = `مساء الخير، ممكن تبعتلي عرض سعر لـ ${productName}`;
                const whatsappUrl = `https://wa.me/201143343338?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            }
        });
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

        // Intersection Observer for scroll animations
        const animatedElements = document.querySelectorAll('.section, .features-grid, .product-card, .team-member-card, .value-item, .faq-item, .about-story-card');
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
