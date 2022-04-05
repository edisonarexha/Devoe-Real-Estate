<template>

  <div class="home" >
    <div>
       <Header />
    </div>
   
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HomePage msg="Welcome to Your Vue.js App"/>
    <!-- <router-view /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'
import Header from '@/views/HeaderView.vue'

export default {
  name: 'HomeView',
  components: {
    HomePage,
    Header
  }
}
</script>
<style lang="scss" scoped>

</style>