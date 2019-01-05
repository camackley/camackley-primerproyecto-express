const express = require ('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper.js')

const port = process.env.PORT || 3001;
////////////////////////////////////
//se ejecuta sin importar que piden
app.use( express.static( __dirname + '/public'));

//Exprexx HBS engine
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');


//req es lo que llega y res es lo que se envia
app.get('/',  (req, res) => {
  res.render('home.hbs',{
    nombre: 'Mackley',
   titulo_web: 'Home | Demo'
  });
});

app.get('/about',  (req, res) => {
    res.render('about.hbs',{
      titulo_web: 'About | Demo'
    });
});

app.listen(port, ()=>{
  console.log(`Escuchando en el puerto ${port}`);
});
