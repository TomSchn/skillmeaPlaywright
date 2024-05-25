import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://demoqa.com/login');
});

//Tests zur Kontrolle des Anmeldens
test.describe('Authentication', () => {

    //Löschen von Cookies und Nicht-Speichern des Login-Statuses -> leere cookies und leeres origin

    //test.use({storageState: {cookies: [], origins: [] } });

    test('Successful login', async ({page}) =>{

        await page.getByText('michald').isVisible();
        
        expect(page.getByRole('button', {name: 'Log out'})).toBeVisible();

    });
});
