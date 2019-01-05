const express = require ('express');
var app = express();
////////////////////////////////////
//se ejecuta sin importar que piden
app.use( express.static( __dirname + '/public'));

//Exprexx HBS engine 
app.set('view engine', 'hbs');

//req es lo que llega y res es lo que se envia
app.get('/',  (req, res) => {

  let salida={
    nombre: 'Mackley',
    edad: 17,
    url: req.url
  };

res.send(salida);

});

app.listen(3000, ()=>{
  console.log('Escuchando en el puerto 3000');
});
