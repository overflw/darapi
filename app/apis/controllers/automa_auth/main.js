import { launch } from 'puppeteer';
import * as dotenv from 'dotenv';

(async () => {
    dotenv.config()

    const browser = await launch({ headless: false });
    const page = await browser.newPage();
    page.setDefaultTimeout(0)
    await page.goto('https://www.automa.site/auth');
    await page.click('button.ui-button:nth-child(1)', {
        waitUntil: 'networkidle2',
    });
    await page.waitForNavigation();
    await page.type('#login_field', process.env.GH_USERNAME);
    await page.type('#password', process.env.GH_PW);
    await page.click('.btn');
    await page.waitForResponse(
        'https://www.automa.site/', {
    }
    );
    await page.waitForNavigation();
    let token = await page.evaluate(() => {
        return localStorage.getItem('supabase.auth.token')
    });
    console.log(token);
    await browser.close();
})();