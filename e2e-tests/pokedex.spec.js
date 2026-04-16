import { test, describe, expect } from '@playwright/test'

/// This test suite is meant to be run against the deployed version of the app, not the local development server. To run it, set the PLAYWRIGHT_BASE_URL environment variable to the URL of the deployed app, and then run `npm test` or `npx playwright test`.
describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  });

  test('pokemon details can be opened', async ({ page}) => {
    await page.goto('')
    await page.getByRole('link', { name: 'ivysaur' }).click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  });

  test('front page can be opened from pokemon details', async ({ page }) => {
    await page.goto('')
    await page.getByRole('link', { name: 'ivysaur' }).click()
    await page.getByRole('link', { name: 'home' }).click()
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('chlorophyll')).not.toBeVisible()
  });

  test('next pokemon details can be opened', async ({ page }) => {
    await page.goto('')
    await page.getByRole('link', { name: 'ivysaur' }).click()
    await page.getByRole('link', { name: 'next' }).click()
    await expect(page.getByText('venusaur')).toBeVisible()
  });
});