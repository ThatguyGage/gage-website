const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Serve everything from root directory (where index.html is)
app.use(express.static(path.join(__dirname, '/')));

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
});
