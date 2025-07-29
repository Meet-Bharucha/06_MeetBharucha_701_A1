const fs = require('fs');
const path = require('path');
const unzipper = require('unzipper');

// Path to zip file and output directory
const zipFilePath = path.join(__dirname, 'output.zip');
const outputDir = path.join(__dirname, 'demoextract');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Extract the zip file
fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: outputDir }))
  .on('close', () => {
    console.log(`Extraction complete! Files extracted to: ${outputDir}`);
  })
  .on('error', (err) => {
    console.error('Error during extraction:', err);
  });
