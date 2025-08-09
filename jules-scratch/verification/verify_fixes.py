import os
from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(
        viewport={'width': 1280, 'height': 800},
        locale='ar-EG'
    )
    page = context.new_page()
    error_occurred = False

    try:
        base_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
        products_page_path = os.path.join(base_path, 'products.html')

        if not os.path.exists(products_page_path):
            raise FileNotFoundError(f"Could not find products.html at {products_page_path}")

        # 1. Navigate and take initial screenshot
        page.goto(f'file://{products_page_path}')
        # Wait for the grid to be populated and animations to start
        expect(page.locator('.product-card.is-visible')).to_have_count(115, timeout=10000)
        page.screenshot(path="jules-scratch/verification/final-desktop.png", full_page=True)
        print("Screenshot 1: Full grid on desktop")

        # --- VERIFY SEARCH ---
        search_input = page.locator('#searchInput')
        search_input.fill('جمبري')

        # Wait for the number of visible cards to match the expected count for the search
        expect(page.locator('.product-card.is-visible')).to_have_count(25, timeout=5000)

        page.screenshot(path="jules-scratch/verification/final-search-shrimp.png")
        print("Screenshot 2: Search results for 'جمبري'")

        for card in page.locator('.product-card.is-visible').all():
            expect(card).to_contain_text('جمبري')
        print("Search (shrimp) verification successful.")

        # --- VERIFY FILTER ---
        search_input.fill('') # Clear search
        expect(page.locator('.product-card.is-visible')).to_have_count(115, timeout=5000)

        page.locator('.filter-btn[data-cat="fish"]').click()
        expect(page.locator('.product-card.is-visible')).to_have_count(35, timeout=5000)

        page.screenshot(path="jules-scratch/verification/final-filter-fish.png")
        print("Screenshot 3: Category filter for 'fish'")

        for card in page.locator('.product-card.is-visible').all():
            expect(card).to_contain_text('سمك')
        print("Filter (fish) verification successful.")

        # --- VERIFY FAB ---
        fab = page.locator('.floating-action-btn')
        expect(fab).to_be_visible()
        fab.hover()
        expect(page.locator('.floating-action-btn .tooltip')).to_be_visible()
        page.screenshot(path="jules-scratch/verification/final-fab-with-tooltip.png")
        print("Screenshot 4: Floating action button with tooltip")

        # --- VERIFY RESPONSIVE LAYOUTS ---
        page.set_viewport_size({'width': 768, 'height': 800})
        page.wait_for_timeout(500)
        page.screenshot(path="jules-scratch/verification/final-tablet-layout.png", full_page=True)
        print("Screenshot 5: Tablet layout (2 columns)")

        page.set_viewport_size({'width': 375, 'height': 667})
        page.wait_for_timeout(500)
        page.screenshot(path="jules-scratch/verification/final-mobile-layout.png", full_page=True)
        print("Screenshot 6: Mobile layout (1 column)")

    except Exception as e:
        print(f"An error occurred during verification: {e}")
        error_occurred = True
        page.screenshot(path="jules-scratch/verification/error.png")
    finally:
        browser.close()
        if error_occurred:
            exit(1)

with sync_playwright() as p:
    run_verification(p)
