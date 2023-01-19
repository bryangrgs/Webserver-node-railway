const express = require('express')
require ('dotenv').config();
const app = express()
const port=process.env.PORT;
const hbs = require ('hbs');  

//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials',function(err){});

//
// servir contenido estático
app.use(express.static('public'));
//controlador
app.get('/',  (req, res)=> {
  res.render('home',{
    nombre: 'Bryan Georges',
    titulo: 'Curso node'
  });
});
app.get('/generic',  (req, res)=> {
  res.render('generic',{
    nombre: 'Bryan Georges',
    titulo: 'Curso node'
  });
  });
  app.get('/elements',  (req, res)=> {
    res.render('elements',{
      nombre: 'Bryan Georges',
      titulo: 'Curso node'
    });
  });
  app.get('*',  (req, res)=> {
    res.sendFile(__dirname+'/public/404.html');
  });

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})