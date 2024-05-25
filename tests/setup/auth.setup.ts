import {test as setup} from "@playwright/test";

//create 2 functions for 2 different users

let adminUsername = "michald_admin";
let adminPassword = "P@ssw0rd#8$E!";
//path to the file
const adminAuthFile = ".auth/admin.json";

let userName = "michald";
let userPassword = "P@ssw0rd#8$E!";
//path to the file
const userAuthFile = ".auth/user.json";

//Test for the AdminLogin
setup("Create Admin Auth", async({page, context}) => {

    await page.goto("https://demoqa.com/login");
    await page.getByPlaceholder("UserName").fill(adminUsername);
    await page.getByPlaceholder("Password").fill(adminPassword);
    await page.getByRole("button", {name: "Login"}).click();

    //check if logged in
    await page.waitForURL("https://demoqa.com/profile");

    //saving storageState to the path stated
    await context.storageState({path: adminAuthFile});
});

setup("Create User Auth", async ({page, context}) =>{

    await page.goto("https://demoqa.com/login");
    await page.getByPlaceholder("UserName").fill(userName);
    await page.getByPlaceholder("Password").fill(userPassword);
    await page.getByRole("button", {name: "Login"}).click();

    //check if logged in
    await page.waitForURL("https://demoqa.com/profile");

    //saving storageState to the path stated
    await context.storageState({path: userAuthFile});
});






