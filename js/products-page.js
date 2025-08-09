// --- Products Page Specific Logic ---

// This script assumes 'products' is available from products.js
// and that the main 'App' object has already run from main.js

(function() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return; // Failsafe

    let activeCategory = null;
    let debounceTimer;
    const searchInput = document.getElementById('searchInput');
    const noResultsMessage = document.getElementById('no-results-message');

    function renderProducts(filteredProducts) {
        productsGrid.innerHTML = '';

        if (!filteredProducts || filteredProducts.length === 0) {
            if (noResultsMessage) noResultsMessage.style.display = 'block';
            return;
        }

        if (noResultsMessage) noResultsMessage.style.display = 'none';

        filteredProducts.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.id = encodeURIComponent(p.name);

            card.innerHTML = `
                <div class="product-thumb">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                </div>
                <div class="product-body">
                    <h3 class="product-card__title">${p.name}</h3>
                    <p class="product-card__description">${p.description || ''}</p>
                    <button class="btn btn--primary product-price-btn" data-product-name="${p.name}">عرض السعر</button>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }

    function applyFilters() {
        const q = searchInput.value.trim().toLowerCase();
        // Use the global 'products' variable from products.js
        const filtered = products.filter(p => {
            const matchCat = !activeCategory || p.category === activeCategory;
            const matchSearch = !q || p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q));
            return matchCat && matchSearch;
        });
        renderProducts(filtered);
    }

    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(applyFilters, 250);
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.cat || null;
            applyFilters();
        });
    });

    // --- WhatsApp Button Logic ---
    function orderWhatsApp(productName) {
        const phone = '201143343338';
        const link = `${location.origin}${location.pathname}#${encodeURIComponent(productName)}`;
        const msg = `Hello Mohamed, please send me the price for ${productName}. Link: ${link}`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    }

    document.getElementById('topRequestBtn').addEventListener('click', () => {
        const phone = '201143343338';
        const msg = 'Hello Mohamed, I would like a full price list of available products.';
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    });

    productsGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('product-price-btn')) {
            const productName = e.target.dataset.productName;
            orderWhatsApp(productName);
        }
    });

    // Initial render on page load
    applyFilters();

})(); // IIFE to keep scope clean
