const router = require('express').Router();     //Se llama al router de express
const apiUsuarioRouter = require('./api/usuarios.js');
// const apiArticuloRouter = requiere('./api/articulos')

//.com/api/usuario
router.use('/auth',apiUsuarioRouter); 
//.com/api/usuario/listar
//.com/api/usuario/login
//.com/api/usuario/crear




//.com/api/categoria
// router.use('/categoria',apiCategoriaRouter); 
//.com/api/categoria/listar
//.com/api/categoria/crear
//.com/api/categoria/actualizar
//..

//.com/api/articulo
// router.use('/articulo',apiArticuloRouter); 
//.com/api/articulo/listar
//.com/api/articulo/crear
//.com/api/articulo/actualizar
//..



//Se busca una base común. En este caso /api/usuario

// /api/usuario/login/
// /api/usuario/
// /api/usuario/registrar/

//Se busca una base común. En este caso /api/articulo

// /api/articulo/
// /api/articulo/registrar


module.exports = router;
