
<template :style="cssProps">

  <div>
  <div>
    <Header/>
  </div>
    
   <div class="showoffdiv">
   <div style="background-color:black;width:100%;height:600px;opacity:0.7">
       <h2  class="divText" style="color:white;opacity:1;margin-top:15%;margin-left:20%">Devoe is an excellent application
         <br/> if your planning to sell houses</h2>
          <!-- <img src="../assets/logo3.png" style="width:200px;color:white;fill:white"/> -->
 <svg width="213" height="212" viewBox="0 0 213 212" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top:10%">
<path d="M211 106C211 163.429 164.223 210 106.5 210C48.7774 210 2 163.429 2 106C2 48.5713 48.7774 2 106.5 2C164.223 2 211 48.5713 211 106Z" fill="black" stroke="white" stroke-width="4"/>
<path d="M24.5315 99.75L60.5 36.0507L96.4685 99.75H24.5315Z" fill="black" stroke="white" stroke-width="3"/>
<path d="M66.4503 99.75L102 36.077L137.55 99.75H66.4503Z" fill="black" stroke="white" stroke-width="3"/>
<path d="M113.45 99.75L149 36.077L184.55 99.75H113.45Z" fill="black" stroke="white" stroke-width="3"/>
<path d="M44.9957 192H167.888M3 121H209M7.4206 142.846H205.021M11.3991 153.769H200.601M18.9142 165.147H193.086M29.9657 178.801H182.918" stroke="white" stroke-width="3"/>
<line x1="4" y1="130.5" x2="209" y2="130.5" stroke="white" stroke-width="3"/>
</svg>


   </div>
    </div>

      <div class="main-div">
        <div class="secondmain-div">
      
          <p class="divText" style="color:black;text-weight:bold">Devoe is an excellent application if your planning to sell houses</p>
          <img src="../assets/logo3.png" style="width:200px"/>
        </div>
         <div class="divForSpace">
           <div class="divForEffect">

            </div>
   </div>

  <div class="thirdmain-div">
          <el-carousel :interval="4000" type="card"  class="SecondDiv" style="margin-left:5.5%">
          <el-carousel-item v-for="item in 6" :key="item" class="SecondDiv">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
          </el-carousel>

    </div>
    <div style="" class="DFD">
    <div class="DFD-Decor">


    </div>
    </div>
    <div style="background-color:white;width:100%;height:700px;">
      <!-- <p style="float:left;padding-top:5%;padding-left:6%;font-weight:bold">Meet our beautiful Team</p> -->
 <div class="container">
   
  <div class="card card0">
    <div class="border">
      <h2>Joell Nissan</h2>
      <div class="icons">
        <i class="el-icon-message" aria-hidden="true"></i>
        <i class="el-icon-bank-card" aria-hidden="true"></i>
        <i class="el-icon-share" aria-hidden="true"></i>
        <i class="el-icon-info" aria-hidden="true"></i>
        <i class="el-icon-phone" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="card card1">
    <div class="border">
      <h2>Cedrica Williams</h2>
      <div class="icons">
        <i class="el-icon-message" aria-hidden="true"></i>
        <i class="el-icon-bank-card" aria-hidden="true"></i>
        <i class="el-icon-share" aria-hidden="true"></i>
        <i class="el-icon-info" aria-hidden="true"></i>
        <i class="el-icon-phone" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="card card2">
    <div class="border">
      <h2>Patricia Stewart</h2>
      <div class="icons">
        <i class="el-icon-message" aria-hidden="true"></i>
        <i class="el-icon-bank-card" aria-hidden="true"></i>
        <i class="el-icon-share" aria-hidden="true"></i>
        <i class="el-icon-info" aria-hidden="true"></i>
        <i class="el-icon-phone" aria-hidden="true"></i>
      </div>
    </div>

</div>

</div>
   
    </div>
    <div style="" class="DFD">
    <div class="DFD-Decor">


    </div>
    </div>
     <div style="width:100%;height:100px;background-color:white;">
       <!-- <p>
         This is Devoe Inc , All rights Reserved!
         </p> -->
         <Footer/>
  </div>
 
  </div>
 
  </div>
    
</template>

<script>
import Header from '../views/Header.vue'
import Footer from '../views/Footer.vue'
export default {
  
  components:{Header,Footer},
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












.DFD-Decor{
   background-color: black;
  opacity: 0.7;
    width:100%;height:300px;
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;

}
.DFD{
  width:100%;height:300px;
 background-image: url("../assets/Important3.jpg");
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
 
}

.showoffdiv{
  
  height:600px;
  width: 100%;
    background-image: url("../assets/Important3.jpg");
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
}
.SecondDiv{
  width: 50%;
  height: 300px;
}
/* template{
  background-image: url("@/assets/home.jpeg");
} */

.divForSpace{

  /* border:1px solid white; */
  width:100%;
       background-image: url("../assets/Important3.jpg");

  height: 200px;
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;

}
.divForEffect{
  background-color:black;
  width:100%;
  height:500px;
  opacity:0.7;
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.thirdmain-div{
   /* border:1px solid white; */
  
   height: 600px
}
.secondmain-div{
  /* border:1px solid white; */
  height:30%;
    position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
 z-index: 10;
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
height: 500px;
width: 1400px;
overflow: hidden;
    position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 20;
  margin-top:50px
}

.divText{
display:inline;
float:left;
margin-top:6%;
margin-left: 15%;
font-weight: bold;
font-family: 'Montserrat', sans-serif;
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
  height: 400px;
  width:50%;
  /* border:1px solid white; */
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

.el-carousel__item:nth-child(2n+1) {
  /* background-color: #d3dce6; */
    background-image: url("../assets/r-architecture-2gDwlIim3Uw-unsplash.jpg");
     background-repeat: no-repeat;
    background-size: 100% 120%;


}
/*  */

</style>

<style lang="stylus" scoped>
.container
  height: 100vh
  width: 100vw
  max-height: 800px
  max-width: 1280px
  min-height: 600px
  min-width: 1000px
  display: flex
  justify-content: space-around
  align-items: center
  margin: 0 auto

.border
  height: 369px
  width: 290px
  background: transparent
  border-radius: 10px
  transition: border 1s
  position: relative

  &:hover
    border: 1px solid white

.card
  height: 379px
  width: 300px
  background: grey
  border-radius: 10px
  transition: background 0.8s
  overflow: hidden
  background: black
  box-shadow: 0 70px 63px -60px #000000
  display: flex
  justify-content: center
  align-items: center
  position: relative

.card0
  background: url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80') center center no-repeat
  background-size: 300px
  filter: grayscale(1)

  &:hover
    background: url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80') left center no-repeat
    background-size: 600px

    h2
      opacity: 1

    .fa
      opacity: 1

.card1
  background: url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80') center center no-repeat
  background-size: 300px
  filter: grayscale(1)

  &:hover
    background: url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80') left center no-repeat
    background-size: 600px

    h2
      opacity: 1

    .fa
      opacity: 1

.card2
  background: url('https://images.unsplash.com/photo-1571513800374-df1bbe650e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80') center center no-repeat
  background-size: 300px
  filter: grayscale(1)

  &:hover
    background: url('https://images.unsplash.com/photo-1571513800374-df1bbe650e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80') left center no-repeat
    background-size: 600px

    h2
      opacity: 1

    .fa
      opacity: 1

h2
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif
  color: white
  margin: 20px
  opacity: 0
  transition: opacity 1s

.fa
  opacity: 0
  transition: opacity 1s

.icons
  position: absolute
  fill: #fff
  color: #fff
  height: 130px
  top: 226px
  width: 50px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-around
</style>
