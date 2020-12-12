// crear la instacia de express

// const { response } = require('express');
const express = require('express');                                                      //Se trae el módulo de express

//Importar morgan
const morgan = require('morgan');

//Llamar la primera ruta, en este caso no se llama asi porque es el index, sino require('./routes/about')
const apiRouter = require('./routes');


//Importar el body parser
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();                                                                   //Se crea una instancia de express atraves de la aplicación 


app.use(cors());

//Decir a la aplicación que use morgan
app.use(morgan('dev'))                                                                  //Se coloca el modo que devuelve la petición en este caso dev

//Para que entrege la información en formato JSOn 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// app.get('/', (req,res)=>{                                                               //Se gestiona la ruta inicial
//     res.send('Hola desde el index. :D ');                                               //Se muestra un mensaje inicial
// })


//Gestor para la ruta /api

app.use('/api',apiRouter);                     //Es como tener sitioweb.com/api
                                               //Es como tener sitioweb.com/api/categoria
                                                //Es como tener sitioweb.com/api/articulo


// app.get('/about', (req,res)=>{                                                          //Se gestiona la ruta about
//     res.send('Hola desde el about. :D ');                                               //Cuan
// })

// app.get('*', (req,res)=>{                                                          //Se gestiona la ruta about
//     res.status(404).send('No existe esa ruta :c');                                               //Cuan
// }) 







//Se levanta el servidor
// app.listen(app.get('PORT') , ()=>{
//     console.log('server up');
// });
// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/

app.set('PORT',process.env.PORT || 3000);

app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

app.listen(app.get('PORT') , () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;