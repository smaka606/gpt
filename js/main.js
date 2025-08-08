// Al Fahd Luxury Seafood - Main JavaScript File

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const siteHeaderNav = document.querySelector('.site-header__nav');
  const body = document.body;

  if (mobileToggle && siteHeaderNav) {
    mobileToggle.addEventListener('click', () => {
      body.classList.toggle('is-open'); // Use body class to control state
      const isOpen = body.classList.contains('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);

      // Optional: Prevent body scroll when nav is open
      if (isOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });
  }

  initializeProductsPage();
  initializeContactForm();
  initializeUIEnhancements();
});

// --- PRODUCTS PAGE LOGIC ---
function initializeProductsPage() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) {
        return; // Only run on the products page
    }

    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const noResultsMessage = document.getElementById('no-results-message');

    let currentFilter = 'all';
    let currentSearchTerm = '';

    // Render all products initially
    renderProducts();

    // --- RENDER FUNCTION ---
    function renderProducts() {
        if (typeof products === 'undefined') {
            console.error('Product data is not loaded.');
            return;
        }

        const filteredProducts = products.filter(product => {
            const matchesCategory = currentFilter === 'all' || product.category === currentFilter;
            const matchesSearch = product.name.toLowerCase().includes(currentSearchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        productsGrid.innerHTML = ''; // Clear existing grid

        if (filteredProducts.length === 0) {
            noResultsMessage.style.display = 'block';
            productsGrid.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'none';
            productsGrid.style.display = 'grid';
            filteredProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card product-card--page';
                card.innerHTML = `
                    <div class="product-card__image" style="background-image: url('${product.image}');"></div>
                    <div class="product-card__content">
                        <div>
                            <h3 class="product-card__title">${product.name}</h3>
                            <p class="product-card__description">${product.description}</p>
                        </div>
                        <a href="https://wa.me/201143343338?text=${encodeURIComponent('أريد طلب: ' + product.name)}" class="btn btn--primary" target="_blank" rel="noopener">اطلب عبر واتساب</a>
                    </div>
                `;
                productsGrid.appendChild(card);
            });
        }
    }

    // --- EVENT LISTENERS ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentFilter = button.dataset.category;

            // Reset search term when a category is clicked
            currentSearchTerm = '';
            searchInput.value = '';

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProducts();
        });
    });

    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        renderProducts();
    });
}

// --- CONTACT FORM LOGIC ---
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) {
        return; // Only run on contact page
    }

    const formStatusMessage = document.getElementById('form-status-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm(form)) {
            // Simulate submission
            formStatusMessage.textContent = 'شكراً لك! تم إرسال رسالتك بنجاح.';
            formStatusMessage.className = 'form-status success';
            formStatusMessage.style.display = 'block';
            form.reset();
        } else {
            formStatusMessage.textContent = 'يرجى تصحيح الأخطاء في النموذج.';
            formStatusMessage.className = 'form-status error';
            formStatusMessage.style.display = 'block';
        }
    });

    function validateForm(form) {
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
        return isValid;
    }
    
    // Add some CSS for the error states
    const style = document.createElement('style');
    style.innerHTML = `
        .form-group.error input, .form-group.error textarea { border-color: #ef4444 !important; }
        .form-group.error label::after { content: ' *مطلوب'; color: #ef4444; margin-right: 5px; }
        .form-status { padding: var(--space-sm); border-radius: var(--border-radius-sm); margin-top: var(--space-md); text-align: center; }
        .form-status.success { background-color: #10b981; color: var(--color-white); }
        .form-status.error { background-color: #ef4444; color: var(--color-white); }
    `;
    document.head.appendChild(style);
}

// --- UI ENHANCEMENTS ---
function initializeUIEnhancements() {
    // 1. Active Nav Link Highlighting
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.site-header__nav-list a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        // Remove active class from all links first
        link.classList.remove('active');
        // Add active class if the href matches the current page
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    // Special case for the homepage (index.html or root)
    if (currentPage === '' || currentPage === 'index.html') {
        const homeLink = document.querySelector('.site-header__nav-list a[href="index.html"]');
        if (homeLink) {
            // Deactivate others and activate home
            navLinks.forEach(link => link.classList.remove('active'));
            homeLink.classList.add('active');
        }
    }

    // 2. Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.section, .features-grid, .product-card, .team-member-card, .value-item, .faq-item, .about-story-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
    
    // 3. Parallax Hero
    const hero = document.querySelector('.hero-section');
    if(hero) {
        window.addEventListener('scroll', () => {
            const offset = window.pageYOffset;
            hero.style.backgroundPositionY = offset * 0.5 + 'px';
        }, { passive: true }); // Use passive listener for better scroll performance
    }
    
    // Add CSS for the animations
    const style = document.createElement('style');
    style.innerHTML = `
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
