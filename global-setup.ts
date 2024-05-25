import {chromium} from "@playwright/test";

async function globalSetup(){
    //browser launching
    const browser = await chromium.launch({headless: true});

    //new page object 
    const page = await browser.newPage();

    await page.goto("https://demoqa.com/login");
    await page.getByPlaceholder('UserName').fill('michald');
    await page.getByPlaceholder('Password').fill('P@ssw0rd#8$E!');
    await page.getByRole('button', {name: 'Login'}).click();

    //check if logged in
    await page.waitForURL('https://demoqa.com/profile');

    //Speichern und Definition des Statuses
    await page.context().storageState({path: './loginAuth.json'});
    await browser.close();
}

export default globalSetup;