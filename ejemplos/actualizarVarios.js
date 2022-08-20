var axios = require('axios');
var data = JSON.stringify({
    "collection": "APRENDICES",
    "database": "POSTYESSICAZABALA",
    "dataSource": "Cluster0Ficha2364482",
    "filter": { "ProyectoFormativo.NombreProyecto": "SaluApp" },
    "update": {
        "$set": {
            "ProyectoFormativo.NombreProyecto": "AppSalud",


        }
    }


});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-pqidv/endpoint/data/v1/action/updateMany',
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