const express = require('express');
const app = express();
const port = 3000;

/* bodyparser para facilitar captura parametros post */
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.get('/usuario', (req, res) => {
    res.json('get usuario');
});

app.post('/usuario', (req, res) => {

    let persona = req.body;

    res.json({ persona });
});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete usuario');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})