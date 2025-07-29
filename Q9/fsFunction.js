const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

async function demoFSFunctions() {
  const filePath = path.join(__dirname, 'demo.txt');
  const renamedPath = path.join(__dirname, 'rename.txt');
  const folderPath = path.join(__dirname, 'test-folder');

  try {
    // 1. Write file (Sync)
    fs.writeFileSync(filePath, 'This is the first line.\n');
    console.log('✅ File created using writeFileSync');

    // 2. Read file (Sync)
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log('📄 Read file content:\n', data);

    // 3. Append file (Async)
    await fsPromises.appendFile(filePath, 'This line is appended.\n');
    console.log('➕ Content appended using appendFile');

    // 4. Rename file (Async)
    await fsPromises.rename(filePath, renamedPath);
    console.log(`📦 File renamed to: ${renamedPath}`);

    // 5. Make a folder (Async)
    await fsPromises.mkdir(folderPath, { recursive: true });
    console.log(`📁 Folder created: ${folderPath}`);

    // 6. Read directory (Async)
    const files = await fsPromises.readdir(__dirname);
    console.log('📂 Current directory contents:\n', files);

    // 7. Delete file (Async)
    // await fsPromises.unlink(renamedPath);
    // console.log('🗑️ File deleted:', renamedPath);

    // // 8. Remove directory (Async)
    // await fsPromises.rmdir(folderPath);
    // console.log('🧹 Folder removed:', folderPath);

  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

demoFSFunctions();
