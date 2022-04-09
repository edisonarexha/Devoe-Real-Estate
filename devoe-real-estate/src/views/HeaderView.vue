<template>
  <div>
 
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  background-color="white"
  text-color="black"
  active-text-color="graz">
  <div class="flexed">
  <el-menu-item index="1" @click="goToHome()">HomePage</el-menu-item>
  <el-menu-item index="2" @click="goToAboutUs()">About us</el-menu-item>
  <el-menu-item index="3" @click="goToAConrtact()" >Contact Us</el-menu-item>
  <el-submenu index="4">
    <template slot="title">Rent and Buy</template>
    <el-menu-item index="4-1" @click="goToHouses()">Houses</el-menu-item>
    <el-menu-item index="4-2"  @click="goToOffices()">Offices</el-menu-item>
    <el-menu-item index="4-3"  @click="goToFlats()">Apartments</el-menu-item>
  
  </el-submenu>
  </div>

  <div>

  <!-- <el-menu-item v-if="user" index="1"></el-menu-item> -->
  <el-button v-if="user.loggedIn === true" index="1" type="info" plain @click="handleLogout()">Log Out</el-button>
  <el-button v-if="user.loggedIn === false 
  " index="1" type="info" plain @click="goToLogin()">Log In</el-button>
  </div>
</el-menu>

  </div>
</template>

<script>
import { getAuth, signOut } from "@firebase/auth";
 import {mapState } from "vuex";
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    computed: {
      ...mapState('users', {
        user: (state) => state.user
      }),
    // ...mapGetters({
    //   user: "user",
    // }),
 },
    methods: {
         goToAboutUs() {
      this.$router.push({
        name: "about-view",
      });
    },
         goToHome() {
      this.$router.push({
        name: "app-view",
      });
    },
         goToAConrtact() {
      this.$router.push({
        name: "contact-view",
      });
    },
         goToLogin() {
      this.$router.push({
        name: "login-view",
      });
    },
         goToHouses() {
      this.$router.push({
        name: "houses-view",
      });
      
    },
         goToFlats() {
      this.$router.push({
        name: "flats-view",
      });
      
    },
         goToOffices() {
      this.$router.push({
        name: "offices-view",
      });
      
    },
    async handleLogout() {
      await signOut(getAuth())
         this.$router.push({
        name: "login-view",
      });
    },
        
    // checkUser() {
    //   if (this.user.data) {
    //     let arr = [2];
    //     arr = this.user.data.email.split("@");
    //     // this.name = arr[0];
    //   }
    // },
  },
//   mounted() {
//    this.checkUser();
//  },
  }
</script>

<style lang="scss" scoped>
.el-menu-demo{
  display: flex;
align-items: center;
justify-content: space-between;
}
.flexed{
  display: flex;
align-items: center;

}
</style>