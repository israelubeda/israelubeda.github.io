import { expect, test } from '@playwright/test';

test('la portada prioriza propuesta y proyectos', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/Israel Ubeda/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Ideas complejas');
  await expect(
    page.getByRole('heading', { name: 'Proyectos que convierten reglas en herramientas.' }),
  ).toBeVisible();
});

test('el catálogo navega a una ficha verificada', async ({ page }) => {
  await page.goto('/proyectos/', { waitUntil: 'domcontentloaded' });
  await page
    .getByRole('link', { name: /XML to PDF DTE Chile/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/proyectos\/xml-to-pdf-dte-chile\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('XML to PDF DTE Chile');
});

test('la búsqueda del blog filtra artículos', async ({ page }) => {
  await page.goto('/blog/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('searchbox', { name: 'Buscar en el blog' }).fill('LLM');
  await expect(page.locator('[data-search-item]:visible')).toHaveCount(1);
  await expect(page.locator('[data-search-status]')).toContainText('1 artículo');
});

test('el tema se puede cambiar con teclado', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const toggle = page.getByRole('button', { name: 'Cambiar tema de color' });
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('html')).toHaveAttribute('data-theme', /light|dark/);
});
