import asyncio
from playwright.async_api import async_playwright, expect
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get the absolute path to the HTML files
        base_path = os.path.abspath(os.path.dirname(__file__) + '/../../')

        # 1. Homepage
        await page.goto(f"file://{base_path}/index.html")
        await page.wait_for_load_state('networkidle')
        await page.screenshot(path="jules-scratch/verification/01-homepage.png")

        # 2. Products Page
        await page.goto(f"file://{base_path}/products.html")
        # Wait for the first product card to be visible
        await expect(page.locator('.product-card').first).to_be_visible(timeout=5000)
        await page.screenshot(path="jules-scratch/verification/02-products-page.png")

        # Test search functionality
        await page.locator('#search-input').fill('سلمون')
        await page.wait_for_timeout(100) # Add a small delay for rendering
        await expect(page.locator('.product-card__title')).to_contain_text(['سلمون'], timeout=5000)
        await page.screenshot(path="jules-scratch/verification/03-products-search.png")

        # Test filter functionality
        await page.locator('button[data-category="herring"]').click()
        await page.wait_for_timeout(100) # Add a small delay
        # Wait for the first card to be visible after filtering
        first_card_title = page.locator('.product-card__title').first
        await expect(first_card_title).to_be_visible(timeout=5000)
        await expect(first_card_title).to_contain_text('رنجة')
        await page.screenshot(path="jules-scratch/verification/04-products-filter.png")

        # 3. About Page
        await page.goto(f"file://{base_path}/about.html")
        await page.wait_for_load_state('networkidle')
        await page.screenshot(path="jules-scratch/verification/05-about-page.png")

        # 4. Contact Page
        await page.goto(f"file://{base_path}/contact.html")
        await page.wait_for_load_state('networkidle')
        await page.screenshot(path="jules-scratch/verification/06-contact-page.png")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
