<template :style="cssProps">
  <div class="hello">
    <el-button type="primary"></el-button>
    <!-- <div class="flexed">
      <div style="margin-top: 20px">
   <span class="logo"> <img src="@/assets/logo-trns.png" style="
            width: 150px; margin:3px" /></span> 
      </div>
    <el-menu class="navbar">
      <el-menu-item>
        Home
      </el-menu-item>
      <el-menu-item>
        About Us
      </el-menu-item>
      <el-menu-item>
        Contact Us
      </el-menu-item>
    </el-menu>
    </div>
    <div class="container-div">
      <span style="font-weight:200; font-size:28px">Real Estate for Sale <br></span>
      <span>Find your <br> next dream home</span>
    </div> -->
  </div>
</template>

<script>
export default {
data(){
  return{
    // cssProps: {
    //       backgroundImage: `url(${require('@/assets/home.jpeg')})`
    //     }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* template{
  background-image: url("@/assets/home.jpeg");
} */
.navbar{
  display: flex;
  align-items: center;
  justify-content: end;
}
.logo{
  cursor: pointer;
}
.flexed{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #998f8f4d;
  font-family: monospace;
      height: 70px;

}
ul.navbar.el-menu {
    background-color: #ffffff00;
}
.el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #ffffff1a;
}
.container-div{
    margin-left: 10%;
    margin-top: 10%;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 800;

}

</style>
