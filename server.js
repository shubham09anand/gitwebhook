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

// Route 5: GET /gitwebhook
app.get('/profile', (req, res) => {
     res.send({
          name: "Shubham Ananad",
          age: 21,
          phone: 8409976925,
     });
});

// Route 6: GET /gitwebhook
app.get('/game', (req, res) => {
     res.send({
          name: "Minecraft",
          company: "Microsoft",
     });
});

// Route 7: GET /gitwebhook

app.get('/companay', (req, res) => {
     res.send({
          name: "Microsoft",
          country: "USA",
          estin: 1975
     });
});


// Route 8: GET /gitwebhook
app.get('/product', (req, res) => {
     res.send({
          name: "GTA",
          type: "Gaming",
     });
});

// Route 9: GET /gitwebhook
app.get('/planet', (req, res) => {
     res.send({
          name: "Earth",
          color:"blue",
          language:"English",
          counteries:192,
          population:'8.5b illion'
     });
});

// Start the server
app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
});
