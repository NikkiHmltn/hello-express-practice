const express = require('express')

const app = express();
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/blog/:date', (req, res) => {
    console.log(req)
    res.render('blog', {date: req.params.date})
});

app.listen(8000, () => {
    console.log('server started!')
})