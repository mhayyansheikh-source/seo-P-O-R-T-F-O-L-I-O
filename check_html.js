import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/privacy', { waitUntil: 'networkidle0' });
  const html = await page.content();
  console.log(html.substring(0, 500));
  console.log("...");
  console.log(html.substring(html.length - 500));
  
  // also check if h1 is there
  const h1 = await page.$eval('h1', el => el.textContent).catch(e => 'No h1');
  console.log('H1:', h1);
  
  await browser.close();
})();
