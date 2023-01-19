const http = require ('http');

//request realizada por el cliente informacion solicitando toda la url
//en el sitio web, headers  de la peticion etc
//response es lo que mi servidor le respondera al 
// cliente dada su peticion del recurso
http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type': 'text/plain'})
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200,{'Content-Type': 'application/csv'})
    res.write('hola mundo');
  
    res.end(); 
})
.listen (8080);

console.log('Escuchando el puerto',8080);