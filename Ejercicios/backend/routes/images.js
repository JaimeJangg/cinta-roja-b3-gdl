const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const images = [];

router.get('/', (req, res, next) => {
    res.send(images);
});

router.post('/', (req, res, next) => {
    const data = req.body;
    images.push(data);
    res.send(data);
});

router.get('/:pos', (req, res, next) => {
    const posicion = req.params.pos;
    res.send(images[posicion]);
});

router.delete('/:pos', (req, res, next) => {
    const posicion = req.params.pos
    if(posicion < images.length){
        images.pop(posicion)
    }else {
        res.send('no se puede borrar porque esta fuera de limite')
    } 
    res.send(images)
});

module.exports = router;







// {
//     id: 1
//     url: 'www.ddd.com/imagen'
//     description: 'la imagen mas chida'
//     name: 'la imagen'
// }