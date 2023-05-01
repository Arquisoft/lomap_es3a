import {defineFeature, loadFeature} from "jest-cucumber";
import puppeteer from "puppeteer";

const feature = loadFeature("./features/home.feature");

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

    test("First time a new user enters the app", ({given, when, then}) => {

        given("User has never entered to the app", () => {
            page.setViewport({ width: 1400, height: 900 });
        })

        when("User sees all main page elements", async () => {
            await expect(page).toMatch("Home");
            await expect(page).toMatch("Map");
            await expect(page).toMatch("Help");
            await expect(page).toMatch("About");
        })

        then("User can interact with the app", async () => {
            await page.click("#documentButton");
            await page.goto("https://arquisoft.github.io/lomap_es3a/");
            const url = page.url();
            expect(url).toBe("https://arquisoft.github.io/lomap_es3a/");
            await page.goto("http://localhost:3000");
            await expect(page).toClick(".nav-link", { text: "Map" });
            await page.goto("http://localhost:3000/map");
            await expect(page).toMatch("Map options");
        })
    })
})