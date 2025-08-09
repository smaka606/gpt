import asyncio
from playwright.async_api import async_playwright, expect
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        base_path = os.path.abspath(os.path.dirname(__file__) + '/../../')
        products_url = f"file://{base_path}/products.html"

        await page.goto(products_url)

        # 1. Verify that the grid loads and is not empty
        print("Verifying initial product load...")
        await expect(page.locator('.product-card').first).to_be_visible(timeout=10000)
        print("Initial products loaded successfully.")

        # 2. Test Responsive Layouts and take screenshots
        print("Testing responsive layouts...")
        # Mobile
        await page.set_viewport_size({"width": 375, "height": 812})
        await page.wait_for_timeout(500) # Allow time for layout shift
        await page.screenshot(path="jules-scratch/verification/final-mobile.png")
        print("Mobile screenshot taken.")

        # Tablet
        await page.set_viewport_size({"width": 768, "height": 1024})
        await page.wait_for_timeout(500)
        await page.screenshot(path="jules-scratch/verification/final-tablet.png")
        print("Tablet screenshot taken.")

        # Desktop
        await page.set_viewport_size({"width": 1280, "height": 800})
        await page.wait_for_timeout(500)
        await page.screenshot(path="jules-scratch/verification/final-desktop.png")
        print("Desktop screenshot taken.")

        # 3. Test Category Filtering
        print("Testing category filtering...")
        herring_button = page.locator('button[data-cat="herring"]')
        await herring_button.click()
        await expect(page.locator('.product-card .product-card__title').first).to_contain_text("رنجة", timeout=5000)
        print("Category filtering test passed.")

        # 4. Test Debounced Search (after resetting filter)
        print("Testing search functionality...")
        await page.locator('button[data-cat=""]').click() # Reset to "All"
        await page.wait_for_timeout(500) # Allow time for render

        search_input = page.locator('#searchInput')
        await search_input.press_sequentially('سلمون', delay=50)
        await page.wait_for_timeout(500) # Wait for debounce
        await expect(page.locator('.product-card .product-card__title').first).to_contain_text("سلمون", timeout=5000)
        print("Search functionality test passed.")

        await browser.close()
        print("Verification script completed successfully.")

if __name__ == '__main__':
    asyncio.run(main())
