<template :style="cssProps">
  <div>
    <div class="Carousel-div">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    </div>
    <div class="main-div">
      <div class="secondmain-div">
      
          <h2 style="display:inline;float:left;margin-top:5%">Devoe is an excellent application if your planning to sell houses</h2>
          <img src="../assets/logo3.png" style="width:200px"/>
      </div>
  <div class="thirdmain-div">
     <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

        </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // cssProps: {
      //       backgroundImage: `url(${require('@/assets/home.jpeg')})`
      //     }
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* template{
  background-image: url("@/assets/home.jpeg");
} */
.thirdmain-div{
   border:1px solid black;
  height:60%
}
.secondmain-div{
  border:1px solid black;
  height:30%
}
.Carousel-div{
position: sticky;
top:0;
z-index: 20;
}
.main-div{

height:800px;
position: sticky;
top:0;
z-index: 21;
background-color: white;
}
.el-carousel{
height: 800px;
overflow: hidden;
}

body {
  margin: 0;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: end;
}
.logo {
  cursor: pointer;
}
.flexed {
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
.el-menu-item:focus,
.el-menu-item:hover {
  outline: 0;
  background-color: #ffffff1a;
}
.container-div {
  margin-left: 10%;
  margin-top: 20%;
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
  font-weight: 800;
  height: 500px;
}

.el-carousel__item {
  height: 800px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  display: none;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
  /* background-clip: ; */
  background-image: url("../assets/houses.jpeg");
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
    background-image: url("../assets/r-architecture-2gDwlIim3Uw-unsplash.jpg");
     background-repeat: no-repeat;
    background-size: 100% 120%;


}
</style>
