const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  page.setViewport({
    height: 1050,
    width: 1680,
    deviceScaleFactor: 1,
  });

  await page
    .goto('https://reidfuhrman.com')
    .then(() => page.waitForTimeout(1100))
    .then(async () => page.screenshot({ path: '../static/embedPreviewImage.png' }));

  await browser.close();
})();
