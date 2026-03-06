const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateLogos() {
  const publicDir = path.join(__dirname, 'public');
  
  // SVG content for full logo
  const fullLogoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" width="1200" height="300">
  <rect width="1200" height="300" fill="#ffffff"/>
  <g transform="translate(60, 30)">
    <circle cx="120" cy="120" r="112" stroke="#000000" stroke-width="4" fill="none"/>
    <text x="38" y="160" font-family="Georgia, Times, serif" font-size="110" fill="#000000">21</text>
    <line x1="40" y1="190" x2="200" y2="190" stroke="#000000" stroke-width="4"/>
    <circle cx="70" cy="190" r="8" fill="#000000"/>
    <circle cx="120" cy="190" r="8" fill="#000000"/>
    <circle cx="170" cy="190" r="8" fill="#000000"/>
  </g>
  <text x="320" y="180" font-family="Inter, -apple-system, sans-serif" font-size="110" font-weight="300" fill="#000000">Stable</text>
  <text x="324" y="240" font-family="Inter, -apple-system, sans-serif" font-size="20" letter-spacing="0.2em" fill="#666666">STATISTICAL CONSULTING</text>
</svg>`;

  // SVG content for icon only
  const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <rect width="400" height="400" fill="#ffffff"/>
  <circle cx="200" cy="200" r="180" stroke="#000000" stroke-width="6" fill="none"/>
  <text x="55" y="260" font-family="Georgia, Times, serif" font-size="180" fill="#000000">21</text>
  <line x1="80" y1="300" x2="320" y2="300" stroke="#000000" stroke-width="6"/>
  <circle cx="120" cy="300" r="12" fill="#000000"/>
  <circle cx="200" cy="300" r="12" fill="#000000"/>
  <circle cx="280" cy="300" r="12" fill="#000000"/>
</svg>`;

  try {
    // Generate PNG - Full Logo
    await sharp(Buffer.from(fullLogoSvg))
      .resize(2400, 600) // High resolution
      .png({ compressionLevel: 9 })
      .toFile(path.join(publicDir, '21stable-logo-full.png'));
    console.log('✓ 21stable-logo-full.png (2400x600)');

    // Generate JPG - Full Logo
    await sharp(Buffer.from(fullLogoSvg))
      .resize(2400, 600)
      .jpeg({ quality: 95, background: '#ffffff' })
      .toFile(path.join(publicDir, '21stable-logo-full.jpg'));
    console.log('✓ 21stable-logo-full.jpg (2400x600)');

    // Generate PNG - Icon
    await sharp(Buffer.from(iconSvg))
      .resize(800, 800) // High resolution
      .png({ compressionLevel: 9 })
      .toFile(path.join(publicDir, '21stable-icon.png'));
    console.log('✓ 21stable-icon.png (800x800)');

    // Generate JPG - Icon
    await sharp(Buffer.from(iconSvg))
      .resize(800, 800)
      .jpeg({ quality: 95, background: '#ffffff' })
      .toFile(path.join(publicDir, '21stable-icon.jpg'));
    console.log('✓ 21stable-icon.jpg (800x800)');

    console.log('\nAll logos generated successfully!');
    console.log(`Location: ${publicDir}`);
    
    // List files
    const files = fs.readdirSync(publicDir).filter(f => f.startsWith('21stable'));
    console.log('\nGenerated files:');
    files.forEach(f => console.log(`  - ${f}`));
    
  } catch (error) {
    console.error('Error generating logos:', error.message);
  }
}

generateLogos();