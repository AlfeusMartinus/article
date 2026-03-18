import { test, expect } from '@playwright/test';

test.describe('Article List Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Latest Articles');
  });

  test('renders article grid after loading', async ({ page }) => {
    const grid = page.getByTestId('article-grid');
    await expect(grid).toBeVisible({ timeout: 10000 });
  });

  test('renders at least one article card', async ({ page }) => {
    await page.waitForSelector('[data-testid="article-card"], [data-testid="sponsored-card"]', {
      timeout: 10000,
    });
    const cards = page.locator('[data-testid="article-card"]');
    await expect(cards.first()).toBeVisible();
  });

  test('renders sponsored cards in the feed', async ({ page }) => {
    await page.waitForSelector('[data-testid="sponsored-card"]', { timeout: 10000 });
    const sponsored = page.locator('[data-testid="sponsored-card"]');
    await expect(sponsored.first()).toBeVisible();
  });

  test('sponsored cards display "Sponsored Ad" label', async ({ page }) => {
    await page.waitForSelector('[data-testid="sponsored-label"]', { timeout: 10000 });
    const label = page.locator('[data-testid="sponsored-label"]').first();
    await expect(label).toHaveText('Sponsored Ad');
  });

  test('the 5th item in the feed is a sponsored card', async ({ page }) => {
    await page.waitForSelector('[data-testid="article-grid"]', { timeout: 10000 });
    const gridItems = page.locator('[data-testid="article-grid"] > div');
    const fifthItem = gridItems.nth(4);
    const sponsored = fifthItem.locator('[data-testid="sponsored-card"]');
    await expect(sponsored).toBeVisible();
  });
});
