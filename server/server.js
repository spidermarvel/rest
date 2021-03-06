require('./config/config');

const express = require('express');
const app = express();

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

    if (persona.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es requerido'
        })

    } else {

        res.json({ persona });
    }

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

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})