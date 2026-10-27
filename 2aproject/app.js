
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Dinni',
        marks: 85
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
