const pdf = require('html-pdf'); //añadimos en una costante el contenido del html-pdf mediante el require.

//Creamos una constante con un poco de contenido HTML

const content = `
<h1>Título en el PDF creado con el paquete html-pdf</h1>
<p>Generando un ejemplo de generar un reporte en PDF con un HTML sencillo</p>
`;

// Llamamos a la función para dar salida el fichero que vamos a crear y especificamos el nombre de ese fichero con el nombre “html-pdf.pdf


pdf.create(content).toFile('./html-pdf.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
});

// comando para ejecutar node exportpdf/pdf.js