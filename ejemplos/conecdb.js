/*var axios = require('axios');
var data = JSON.stringify({
    "collection": "APRENDICES",
    "database": "POSTYESSICAZABALA",
    "dataSource": "Cluster0Ficha2364482",
    "projection": {
        "Nombre": "Alejandro Muñoz"
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-pqidv/endpoint/data/v1/action/findOne',
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
    });*/

const { MongoClien } = require("mongodb");

const uri =
    "mongodb+srv://yessi:1020439983@cluster0ficha2364482.6co19r0.mongodb.net/?retryWrites=true&w=majority"