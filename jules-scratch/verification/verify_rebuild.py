import asyncio
from playwright.async_api import async_playwright, expect
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get the absolute path to the HTML files
        base_path = os.path.abspath(os.path.dirname(__file__) + '/../../')

        # 1. Homepage Screenshot
        await page.goto(f"file://{base_path}/index.html")
        await page.wait_for_load_state('networkidle')
        await page.screenshot(path="jules-scratch/verification/01-homepage.png")

        # 2. Products Page Verification
        await page.goto(f"file://{base_path}/products.html")

        # Test 1: Verify that products are rendered (Bug Fix Verification)
        first_card = page.locator('.product-card').first
        await expect(first_card).to_be_visible(timeout=10000)

        # Test 2: Verify the new feature on the first product card
        first_card_button = first_card.locator('.product-price-btn')

        # Check button text
        await expect(first_card_button).to_have_text("عرض السعر")

        # Check data attribute (example: first product is "جمبري جامبو طازج")
        await expect(first_card_button).to_have_attribute('data-product-name', 'جمبري جامبو طازج')

        # Check href
        await expect(first_card_button).to_have_attribute('href', '#')

        # Take a screenshot of the initial products page
        await page.screenshot(path="jules-scratch/verification/02-products-page-fixed.png")

        # Test 3: Verify search and filter still work
        await page.locator('#search-input').fill('سلمون')
        await expect(page.locator('.product-card__title').first).to_contain_text('سلمون', timeout=5000)
        await page.screenshot(path="jules-scratch/verification/03-products-search-working.png")

        await page.locator('button[data-category="herring"]').click()
        await expect(page.locator('.product-card__title').first).to_contain_text('رنجة', timeout=5000)
        await page.screenshot(path="jules-scratch/verification/04-products-filter-working.png")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
