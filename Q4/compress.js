const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Folder to zip and output zip file name
const sourceFolder = path.join(__dirname, 'zipdemo');
const outputZip = path.join(__dirname, 'output.zip');

// Create output stream for zip file
const output = fs.createWriteStream(outputZip);
const archive = archiver('zip', {
  zlib: { level: 9 } // Compression level
});

// Listen for archive completion
output.on('close', () => {
  console.log(`Zip file created: ${outputZip}`);
  console.log(`Total bytes: ${archive.pointer()} bytes`);
});

// Catch warnings and errors
archive.on('warning', err => {
  if (err.code === 'ENOENT') {
    console.warn('File not found:', err.message);
  } else {
    throw err;
  }
});

archive.on('error', err => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Append the folder
archive.directory(sourceFolder, false);

// Finalize the archive
archive.finalize();
