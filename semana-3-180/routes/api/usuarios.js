const router = require('express').Router();    

//Ruta donde estamos :    .com/api/usuario


//Se llama a un modelo
const models = require('../../models')
const bcrypt = require('bcryptjs');
// const { User } = require('../../../../')

//Importar el controlador
const UserController = require('../../controllers/UserController.js');



//Método 1 para .com/api/usuario/
router.get('/', async(req,res)=>{
    //Busca en la base de datos y devuelve todos los usuarios
    const user = await models.user.findAll();
    res.status(200).json(user)
}); 


// Registrar usuarios
//Método 2 para .com/api/register/
// router.post('/register', async(req,res)=>{
//     req.body.password = bcrypt.hashSync(req.body.password, 10);                     //Se encripta la password
//     //crea un body con la información
//     const user = await models.user.create(req.body);
//     res.status(200).json(user)
// });

router.post('/register', UserController.register)


// Logear usuarios
//Método 2 para .com/api/login/

//login haciendo un llamado al controlador
// router.post('/login', controlador)
router.post('/signin', UserController.signin)

//Llamar al controlador para la raiz
// router.post('/login', usuarioController.login)
// //Llamar al controlador para el register 
// router.post('/login', usuarioController.login)

module.exports = router;

 