const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateLogo() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport for high DPI
  await page.setViewport({
    width: 1400,
    height: 400,
    deviceScaleFactor: 2 // 2x for retina quality
  });
  
  // Load the HTML file
  const htmlPath = path.join(__dirname, 'public', 'logo-render.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // Take screenshot as PNG (high quality)
  const element = await page.$('svg');
  await element.screenshot({
    path: path.join(__dirname, 'public', 'logo-hires.png'),
    omitBackground: true
  });
  
  // Also create a JPG version
  await page.screenshot({
    path: path.join(__dirname, 'public', 'logo-hires.jpg'),
    type: 'jpeg',
    quality: 95,
    fullPage: true
  });
  
  await browser.close();
  
  console.log('Logo generated successfully!');
  console.log('PNG: public/logo-hires.png');
  console.log('JPG: public/logo-hires.jpg');
}

generateLogo().catch(console.error);