const express = require('express');
const env = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000; // Fallback to 4000 if PORT is undefined

app.get('/', (req, resp) => {
    resp.send("Hi There");
});

app.get('/login', (req, resp) => {
    resp.send("<h1>WELCOME TO LOGIN PAGE</h1>");
});

app.listen(PORT, () => {
    console.log("Server started on port no", PORT);
});
