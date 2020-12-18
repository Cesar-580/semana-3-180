import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    // component: Login
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue') 
  },
  {
    path: '/home',
    name: 'HOme',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),                     // Se debe llamar a una vista
                                                                                                      //Una vista es un archivo .vue
    meta :{
      requireAuth : true                                                                              //Significa que requiere autorización para poder estar
    }
    },
  {
    path: '/perfil',
    name: 'Perfil',
    // component: Servicios

    //Es mejor llamarla de esta forma
    component: () => import(/* webpackChunkName: "servicios" */ '../views/Perfil.vue')                     // Se debe llamar a una vista
  },
  {
    path: '/registrar',
    name: 'Registrar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Registrar.vue'),                     // Se debe llamar a una vista
                                                                                                      //Una vista es un archivo .vue
    meta :{
      requireAuth : true                                                                              //Significa que requiere autorización para poder estar
    }
    },
  //   //Como función normal  
  //   // ,component (){
  //   //   return {
  //   //     import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue')
  //   //   }
  //   // }

  // },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from next))                                                   //función para que salga y no se queden guardados los datos
router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.requireAuth)){                               //Si algunas de las rutas "to" tiene el atriuto requiereAuth
      if(localStorage.getItem('jwt') == null){                                          //Si si está en el requiereAuth y se boró el token jwt, saquelo
                                                                                        //Si no, dejelo seguir 
        next({
          path : '/'
        });
      }else{
          next();
        
      }
  }else{
    next();
  }
}) 

export default router
