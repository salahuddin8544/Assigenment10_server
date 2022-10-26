const express = require('express');
const app= express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/categories.json');
const courses = require('./data/courses.json')
app.get('/',(req,res)=>{
    res.send('Running api')
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
        const category_news = courses.filter(n => n.category_id === id);
        res.send(category_news);
})
app.get('/course',(req,res)=>{
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectCours = courses.find(n => n.id === id);
    res.send(selectCours);
});
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectCours = courses.find(n => n.id === id);
    res.send(selectCours);
});
app.listen(port,()=>{
    console.log('port is running');
})