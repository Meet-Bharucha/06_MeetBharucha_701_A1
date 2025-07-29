const express = require('express');
const path = require('path');

const app = express();

// Serve static resources from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}`);
});
