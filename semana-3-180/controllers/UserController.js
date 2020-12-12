
//Controlador para el login

// const { Usuario } = require('../models')
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const models = require('../models');


exports.signin = async(req,res,next) =>{
    try{ 
        //General la lógica, mirar si el usuario existe, si existe mirar la contraseña
        const user = await models.user.findOne({ where :{email : req.body.email}  });                        //Busca un usuario por campo único el cual es emil
        if(user){
            // const passwordIsValid = bcrypt.compareSync(sinEncriptar,encriptada)
            const passwordIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(passwordIsValid){
                //Generar el token

                const token = jwt.sign({
                    id : user.id,
                    nombre : user.nombre,
                    rol:user.rol,
                    email:user.email
                } ,' hola soy una cadena secreta ',{
                    expiresIn: 86400
                })

                res.status(200).send({
                    auth:true, 
                    accessToken: token, 
                    user:user
                });
                 
            }else{
                res.status(401).json({
                    error : 'Error en la validadción',
                })
            }

        }else{
            res.status(404).json({
                error : 'Error en el usuario o no existe',
            })
        }


    }catch{
        res.status(500).send({
            menssage : 'Error!!'
        })
        next(error);
    }
}


// //Actualizar
// exports.actualizar = async(req,res,next) =>{
//     try{ 
//         const user = await Usuario.findByEmailAndUpdate({ where :{email : req.body.email}  },{
//             nombre: req.body.nombre,
             
//         });
//     }catch{

//         next(error);
//     }
// }


// exports.listar = async(req,res,next) =>{
//     try{ 


//     }catch{

//         next(error);
//     }
// }

// exports.registrar = async(req,res,next) =>{
//     try{ 


//     }catch{

//         next(error);
//     }
// }