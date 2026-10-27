const express = require('express');
const app = express();

// 1. Put it here — before the routes!
app.use(express.urlencoded({ extended: true }));

// 2. Display the form
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <input type="text" name="name">
            <button type="submit">Submit</button>
        </form>
    `);
});

// 3. Receive the form data
app.post('/submit', (req, res) => {
    res.send('Hello ' + req.body.name);
});

app.listen(3002, () => {
    console.log('Server running on port 3002');
});