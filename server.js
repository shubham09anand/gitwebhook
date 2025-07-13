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

// Route 4: GET /gitwebhook
app.get('/profile', (req, res) => {
     res.send({
          name: "Shubham Ananad",
          age: 21,
          phone: 8409976925,
     });
});

// Route 4: GET /gitwebhook
app.get('/game', (req, res) => {
     res.send({
          name: "Minecraft",
          company:"Microsoft",
     });
});

// Start the server
app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
});
