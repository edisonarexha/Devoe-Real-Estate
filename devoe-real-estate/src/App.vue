<template>

  <div id="app"> 
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './views/HeaderView.vue'

export default {
  name: 'App',
 components :{
   Header
 },
  // created(){
  //   this.checkRoute();
  // },
  //  data(){
  //   return{
  //     navigation:null
  //   }
  // },
  // methods:{
  //   checkRoute(){
  //     if(this.$route.name==="login-view" || this.$route.name==="register-view"){
  //      this.navigation=true;
  //      return;
  //     }else{
  //       this.navigation=false;
  //     }
  //   }
  // },
  // watch:{
  //   $route(){
  //     this.checkRoute();
  //   }
  // }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983; */
/* } */
</style>
