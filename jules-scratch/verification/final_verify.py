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
        await page.set_viewport_size({"width": 1280, "height": 800})

        # Verify that the grid loads and is not empty
        await expect(page.locator('.product-card').first).to_be_visible(timeout=10000)

        # Take a final screenshot
        await page.screenshot(path="jules-scratch/verification/final-desktop-view.png")
        print("Final screenshot taken.")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
