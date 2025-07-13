const express = require('express');
const app = express();
const PORT = 1749;

// Route 1: GET /
app.get('/', (req, res) => {
     res.send('Welcome to the Home Page');
});

// Route 2: GET /about
app.get('/about', (req, res) => {
     res.send('This is the About Page');
});

// Route 3: GET /gitwebhook
app.get('/gitwebhook', (req, res) => {
     res.send('This is the gitwebhook');
});

// Route 4: GET /gitwebhook
app.get('/test', (req, res) => {
     res.send('This is the test');
});

// Start the server
app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
});
