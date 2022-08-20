/*var servidor = require('./server');

servidor.iniciar()*/

const express = require('express');
const app = express();
//const calc = require('./MiCalculadora')
const path = require('path');
const PORT = process.env.PORT || 9000;
const { dirname } = require('path');


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static('./public'));


app.get('/', function(req, res) {
    //console.log(path.__dirname);
    //var nombre = "Usuario"
    //es.render('pages/index', { name: nombre })
    let user = {
        nombre: "Alvaro",
        rol: "Vendedor",
        Puesto: "Tienda"
    };
    let compra = ["carro", "moto", "bicicleta"]
    let nombre = "usuario"
    res.render('pages/index', {
        name: nombre,
        usuario: user,
        carrito: compra
    });



})


app.listen(PORT);
console.log('Servidor iniciado');








//app.set('views', path.join);