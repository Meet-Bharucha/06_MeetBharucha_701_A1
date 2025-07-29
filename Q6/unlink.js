const fs = require('fs');
const path = require('path');
const util = require('util');

// Promisify fs.unlink
const unlinkAsync = util.promisify(fs.unlink);

// File to delete
const filePath = path.join(__dirname, 'demo.txt');

// Delete the file using async/await
async function deleteFile() {
  try {
    await unlinkAsync(filePath);
    console.log(`File deleted: ${filePath}`);
  } catch (err) {
    console.error('Error deleting file:', err.message);
  }
}

deleteFile();
