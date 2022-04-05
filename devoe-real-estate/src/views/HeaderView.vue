<template>
  <div>
 
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">HomePage</el-menu-item>
  <el-menu-item index="1">About us</el-menu-item>
  <el-menu-item index="1">Contact Us</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Rent and Buy</template>
    <el-menu-item index="2-1">Houses</el-menu-item>
    <el-menu-item index="2-2">Offices</el-menu-item>
    <el-menu-item index="2-3">Apartments</el-menu-item>
  
  </el-submenu>
  <el-menu-item v-if="user" index="1">{{name}}</el-menu-item>
  <el-button v-if="user" index="1">Log Out</el-button>
  <el-button v-if="!user" index="1">Log In</el-button>
</el-menu>

  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
  //    computed: {
  //   ...mapGetters({
  //     user: "user",
  //   }),
  // },
    methods: {
    checkUser() {
      if (this.user.data) {
        let arr = [2];
        arr = this.user.data.email.split("@");
        this.name = arr[0];
      }
    },
  },
  // mounted() {
  //   this.checkUser();
  // },
  }
</script>

<style>

</style>