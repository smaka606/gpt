import os
from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(locale='ar-EG')
    page = context.new_page()
    error_occurred = False

    try:
        base_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

        # --- Products Page ---
        print("Verifying products.html...")
        products_page_path = os.path.join(base_path, 'products.html')
        page.goto(f'file://{products_page_path}')

        # Wait for the page to be generally settled.
        page.wait_for_timeout(2000)

        # Desktop
        page.set_viewport_size({'width': 1280, 'height': 800})
        page.screenshot(path="jules-scratch/verification/final-desktop.png", full_page=True)
        print("- Desktop screenshot taken.")

        # Also test search and filter manually for screenshots
        print("Taking screenshot of search...")
        search_input = page.locator('#searchInput')
        search_input.fill('جمبري')
        page.wait_for_timeout(1000)
        page.screenshot(path="jules-scratch/verification/final-search-results.png", full_page=True)

        print("Taking screenshot of filter...")
        search_input.fill('')
        page.wait_for_timeout(500)
        page.locator('.filter-btn[data-cat="fish"]').click()
        page.wait_for_timeout(1000)
        page.screenshot(path="jules-scratch/verification/final-filter-results.png", full_page=True)


        # Tablet
        page.set_viewport_size({'width': 768, 'height': 800})
        page.goto(f'file://{products_page_path}') # Reload to ensure proper layout
        page.wait_for_timeout(2000)
        page.screenshot(path="jules-scratch/verification/final-tablet.png", full_page=True)
        print("- Tablet screenshot taken.")

        # Mobile
        page.set_viewport_size({'width': 375, 'height': 667})
        page.goto(f'file://{products_page_path}') # Reload
        page.wait_for_timeout(2000)
        page.screenshot(path="jules-scratch/verification/final-mobile.png", full_page=True)
        print("- Mobile screenshot taken.")

        print("\nVisual verification script completed. Please inspect the screenshots.")

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
