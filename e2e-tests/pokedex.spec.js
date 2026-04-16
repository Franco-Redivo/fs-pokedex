import { test, describe, expect } from '@playwright/test'

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
});