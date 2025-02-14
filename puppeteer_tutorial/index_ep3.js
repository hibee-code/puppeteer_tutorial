const puppeteer = require('puppeteer');


async function run() {
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    //await page.goto("https://www.yahoo.com");
    await page.goto('https://www.yahoo.com', { timeout: 60000 });

    //await page.goto("https://www.yahoo.com", { waitUntil: 'networkidle2', timeout: 60000 });


    const title = await page.title();
    console.log(title);

    const heading = await page.$eval('h1', (element) => element.textContent);
    console.log(heading);


    await page.screenshot({path: 'example.png'});

    await page.pdf({path: 'example.pdf', format: 'A4'});

    await browser.close();
}
 run();   