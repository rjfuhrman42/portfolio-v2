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
    .goto('https://localhost:8000')
    .then(() => page.waitForTimeout(1000))
    .then(async () => page.screenshot({ path: '../static/embedPreviewImage.png' }));

  await browser.close();
})();
