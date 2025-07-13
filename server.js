const express = require('express');
const app = express();
const PORT = 3000;

// Route 1: GET /
app.get('/', (req, res) => {
     res.send('Welcome to the Home Page');
});

// Route 2: GET /about
app.get('/about', (req, res) => {
     res.send('This is the About Page');
});

// Start the server
app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
});
