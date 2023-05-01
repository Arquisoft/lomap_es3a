import {defineFeature, loadFeature} from "jest-cucumber";
import puppeteer from "puppeteer";

const feature = loadFeature("./features/login.feature");

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
    beforeAll(async () => {
        browser = process.env.GITHUB_ACTIONS
            ? await puppeteer.launch()
            : await puppeteer.launch({headless: false, slowMo: 50});
        page = await browser.newPage();

        await page
            .goto("http://localhost:3000", {
                waitUntil: "networkidle0",
            })
            .catch(() => {
            })
    })

    afterAll(() => {
        browser.close()
    })

    test("Displays login button when user is not logged in",
        ({given, when, then}) => {

            given("User is not logged in", () => {
            })

            when("User opens up the page", async () => {
                await page.goto("http://localhost:3000")
            })

            then("User can see the login button", async () => {
                await expect(page).toMatch("Log in");
            })
        })

    test("User goes to login page and can access to its selected provider login form",
        ({given, when, then}) => {

            given("User is not logged in", () => {
            })

            when("User opens up login page", async () => {
                await page.goto("http://localhost:3000/login")
                await expect(page).toMatch("Log in");
                await expect(page).toMatch("Select POD provider:");
                await expect(page).toMatch("Haven't signed yet? Sign up now!");
            })

            then("User is able to select a provider and be redirected to the login form", async () => {
                await expect(page).toMatch("Log in");
                await page.goto("https://inrupt.net/login");
                const url = page.url();
                expect(url).toBe("https://inrupt.net/login");
            })
        })

    test("User logs into the app",
        ({given, when, then}) => {
            let email: string;
            let password: string;
            given("User is not logged in", () => {
                email = "newuser@test.com"
                password = "newuser"
            })

            when("User access to provider's login form", async () => {
                await page.goto("https://inrupt.net/login");
                await expect(page).toFillForm(
                    'form[class="form-horizontal login-up-form"]',
                    {
                        username: email,
                        password: password,
                    }
                );
                await expect(page).toClick("button", { text: "Log In" });
                await new Promise(resolve => setTimeout(resolve, 4000));
            })

            then("User is logged in", async () => {
                await page.goto("http://localhost:3000");
                await expect(page).not.toMatch("Log In");
            })
        })
})