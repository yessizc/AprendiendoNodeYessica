var axios = require('axios');
var data = JSON.stringify({
    "collection": "APRENDICES",
    "database": "POSTYESSICAZABALA",
    "dataSource": "Cluster0Ficha2364482",
    "document": {
        "Cedula": 1020439,
        "Nombre": "Yessica",
        "Edad": 25,
        "Promedio": [5, 3, 5, 3, 5],
        "ProyectoFormativo": { "NombreProyecto": "Funeraria", "Descripcion": "Software para planes exequiales", "PorcentajeAvance": 80 },
        "PromedioAcumulado": 3.4
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-pqidv/endpoint/data/v1/action/insertOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'xpuTrcf2GFMsDKnLx8yXOXseijd80nTYxlfM7TQYVGzcvPjTGa5ORMmnqjfoA4hT',
    },
    data: data
};

axios(config)
    .then(function(response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function(error) {
        console.log(error);
    });

/*const { MongoClien } = require("mongodb");

const uri =
    "mongodb+srv://yessi:1020439983@cluster0ficha2364482.6co19r0.mongodb.net/?retryWrites=true&w=majority"*/