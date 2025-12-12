const express = require('express');

const app = express();
const PORT = 5226;

app.get('/', (req, res) => {
    res.send('Hello from the MERN playground server!');
})

app.get('/about', (req, res) => {
    res.send('This is the about page from the MERN playground server!');
})

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})