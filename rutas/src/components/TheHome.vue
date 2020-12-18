<template>
  <div>
    <!-- <nav class="navbar navbar-light bg-light"> -->
    <!-- <div class="container-fluid"> -->

    <!-- <form class="d-flex">
          <button
            class="btn btn-outline-success"
            type="submit"
            @click.prevent="logOutUser"
          >
            Salir
          </button>
        </form>
      </div>

    </nav>

    <ul class="list-group">
      <li class="list-group-item"><span>Name: </span>{{user.nombre}}</li>
      <li class="list-group-item"><span>Email: </span>{{user.email}}</li>
    </ul> -->

    <section class="bar-sup">
      <div class="main-title">
        <h2 class="titulo">Bienvenido</h2>
      </div>
      <nav class="cont-menu">
        <ul class="menu-pp">
          <li class="menu-pp__item"><router-link to="/home"> Inicio</router-link></li>
          <li class="menu-pp__item"><router-link to="/registrar"> Registrar</router-link></li>
          <li class="menu-pp__item"><router-link to="/perfil">Perfil </router-link></li>
          <li class="menu-pp__item" @click.prevent="logOutUser"><a href="">Cerrar Sesión</a></li>
        </ul>
      </nav>
    </section>


  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    logOutUser() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("USER");
      this.$router.push("/");
    },
    getUserData() {
      let token = localStorage.getItem("jwt");
      // let user = localStorage.getItem('user');
      let user = VueJwtDecode.decode(token);
      // this.user = JSON.parse(user);                                               //Se le asigna el user del data lo que se trae del localstorag
      this.user = user; //Se usa Json.parse para que se transforme en un diccionario o json de vue y no del localstorage
      //console.log(this.user);
    },
  },
  created() {
    this.getUserData(); //Cuando exista la página se trae la información
  },
};
</script>

<style scoped>

  .bar-sup {
  display: flex;
  align-items: center;
  height: 90px;
  background-color: rgb(26, 21, 21);
}
.main-title {
  width: 50%;
  color: rgb(218, 218, 218);
}
.cont-menu {
  width: 50%;
}
.menu-pp {
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  color: rgb(218, 218, 218);
  
}
.menu-pp__item > a {
  text-decoration: none;
  color: rgb(218, 218, 218);
  border: 2px solid white;
  margin: 2px;
  padding: 5px;
  border-radius: 4px;;
}

.menu-pp__item > a:hover {
  font-size: 20px;
  /* text-decoration: underline; */
  color: rgb(218, 218, 218);
}

</style>