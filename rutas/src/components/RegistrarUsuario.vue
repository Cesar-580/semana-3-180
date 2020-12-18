<template>
  <div>
    <section class="bar-sup">
      <div class="main-title">
        <h2 class="titulo">Registro</h2>
      </div>
      <nav class="cont-menu">
        <ul class="menu-pp">
          <li class="menu-pp__item"><router-link to="/home"> Inicio</router-link></li>
          <li class="menu-pp__item"><router-link to="/registrar"> Registrar</router-link></li>
          <li class="menu-pp__item"><router-link to="/perfil">Perfil </router-link></li>
          <li class="menu-pp__item" @click.prevent="logOutUser"><a href="">Cerrar Sesión </a></li>
        </ul>
      </nav>
    </section>

    <div class="contenedorRegistro">
      <div class="tituloConte"><h3>Registrar Usuario</h3></div>
      <input type="text" class="form-control cajaRe"  placeholder="Nombre" v-model="registerD.name">
      <input type="text" class="form-control cajaRe"  placeholder="E-mail" v-model="registerD.email">
      <input type="password" class="form-control cajaRe"  placeholder="Contraseña" v-model="registerD.password">
      <button class="btn btn-primary cajaRe coBoto" type="submit"  @click.prevent="registerUser">Registrar</button>
    </div>

        <!-- <pre>
            {{ registerD }}
        </pre> -->

  </div>
</template>

<script>
import swal from "sweetalert";
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {},
      registerD: {
        name : "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async registerUser() {
        try{
          let response = await this.$http.post("/api/auth/register", this.registerD); //Se hace una petición a la API de registrar
          swal(
            "Registro correcto!",
            `Se creó el usuario ${this.registerD.name}`,
            "success"
          );
        }catch{
          swal("Oops!", "Algo salió mal!", "error");
        console.log(error);
        }

    },

    logOutUser() {
      localStorage.removeItem("jwt");
    //   localStorage.removeItem("USER");
        console.log("Sacado y borrado");
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
.tituloConte{
  width: 50%;
  height: 20%;
  /* background-color: blue; */
  left: 25%;
  margin-top:10px;
  position:relative;
  font-family:sans-serif;
  color: black;
}
.contenedorRegistro{
  width: 30%;
  height: 60%;
  /* background-color: red; */
  top:20%;
  left:35%;
  border: 3px solid black;
  border-radius: 5px;
  position: absolute;
}
.cajaRe{
  padding: 5px;
  width: 65%;
  margin-left:18%;
  margin-top: 20px;
}
.coBoto{
  background-color: black;
  color :white;
  height: 10%;
}
</style>