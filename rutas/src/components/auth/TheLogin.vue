<template>
  <div>

    <div class="imagenUser">
      <center><img src="../../assets/user.png" alt="imagenUsuario"></center>
    </div>

    <div class="formulario">
      <form>
        <div class="cajaIcono">
          <!-- Icono -->
          <div>
            <img src="../../assets/email.png" alt="Imagen correo" />
          </div>
          <!-- Caja de texto -->
          <div class="divCaja">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="login.email"
              placeholder="Email address"
            />
          </div>
        </div>
        <div class="cajaIcono">
          <!-- icono -->
          <div>
            <img src="../../assets/clave.png" alt="Imagen clave" />
          </div>
          <!-- caja de texto -->
          <div class="divCaja">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="login.password"
              placeholder="Password"
            />
          </div>
        </div>

        <!-- <pre>
            {{ login }}
        </pre> -->
        <div class="divBoton">
          <button
            type="submit"
            class="btn btn-primar"
            @click.prevent="loginUser"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        // console.log(this.login);

        //Petición con axios
        // axios.post(https://glacial-everglades-74306.herokuapp.com, objeto)
        // .then()

        let response = await this.$http.post("/api/auth/signin", this.login); // Se hace un awai ya que debe de esperar la respuesta
        // Se usa post ya que se necesita enviar información
        console.log(response.data);
        let token = response.data.accessToken;
        // let user = response.data.user;
        let user = VueJwtDecode.decode(token);
        //Para enviar los datos por toda la página
        localStorage.setItem("jwt", token);
        // localStorage.setItem('user', JSON.stringify(user));

        console.log(user);

        if (token) {
          swal(
            "Login correcto!",
            `Los datos son correctos, Bienvenido! ${user.nombre}`,
            "success"
          );
          this.$router.push("/home"); //Se empuja al usuario a home, cuando se verifique que si existe
        }
      } catch (error) {
        swal("Oops!", "Algo salió mal!", "error");
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.formulario {
  background-color: white;
  width: 30%;
  height: 50%;
  margin-left: 35%;
  margin-top: 10%;
  padding: 2% 2% 2% 2%;
  border-radius: 3px;
  text-align: center;
  border: 2px solid black;
  position: absolute;
}
.form-label1 {
  margin: 3px 3px 3px 3px;
  color: black;
}

.btn-primar {
  background-color: black;

  color: white;
}
.divCaja {
  margin-left: 10px;
}

.divBoton {
  margin: 50px 50px 50px 50px;
  /* margin-top: 50px; */
}
.caja {
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  background: #ee0467;
}
.cajaIcono {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
  align-self: start;
}

.imagenUser{
  width: 7%;
  height: 14%;
  left: 46%;
  top: 13%;
  z-index: 10;
  background-color: white;
  align-self: start;
  border-radius: 200px;
  border: 2px solid black;
  position: absolute;
  
}
</style>