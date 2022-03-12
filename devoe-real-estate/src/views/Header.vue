<template>
  <div>
 
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
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
  <el-menu-item v-if="user.loggedIn" index="1">{{user.displayName}}</el-menu-item>
  <el-button v-if="user.loggedIn" index="1">Log Out</el-button>
  <el-button v-if="!user.loggedIn" index="1">Log In</el-button>
</el-menu>

  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

</style>