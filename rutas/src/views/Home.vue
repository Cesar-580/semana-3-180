<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <the-home/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheHome from '@/components/TheHome.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    TheHome,
  }
}
</script>
