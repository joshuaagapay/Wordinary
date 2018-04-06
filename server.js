const express = require('express');
const app = express();
const path = require('path');

const port = 8000;

app.set('views', path.join(__dirname, 'public/app/views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('index');
});

app.listen(process.env.PORT || port, () => {
    console.log(`running server at ${port}`);
});



