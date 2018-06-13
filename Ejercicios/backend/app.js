// const express = require('express');
// const app = express();

// app.get('/', (req, res, next) => {
//     res.send('Hola Mundo');
// })

// app.get('/html', (req, res, next) => {
//     res.send('<h1>Hola devf html</h1>');
// });

// app.listen(3000, () => {
//     console.log('el servidor corre en el puerto 3000');

// app.get('/json', (req, res, next) => {
//     res.send({mensaje: 'Hola devf json'});
// });

// });




// const express = require('express');
// const app = express();

// app.get('/', (req, res, next) => {
//     res.send({nombre: 'jaime Rueda', edad: '22', ocupacion: 'Estudiante', descripcion: 'el dinero es dinero', objetivo:'hacer app'});
// });

// app.listen(3000, () => {
//     console.log('mi informacion esta bien');
// });



const express = require('express');
const app = express();
const images = require('./routes/images.js')

app.use('/images', images);

app.listen(3000, () => {
    console.log('mi informacion esta bien');
});


