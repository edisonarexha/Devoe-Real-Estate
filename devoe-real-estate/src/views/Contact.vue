<template>

<div id="contact-form" class="contact-form">
	<div class="maindiv">
  <div class="divForDecord">
  <div>
    <h1 style="display:inline;color:white; font-family: 'Raleway', sans-serif;text-decoration:none;margin-top:15%;float:left;margin-left:10%">
      Devoe INC - Contact us
    </h1>
  </div>
  </div>
  </div>
		<!-- <h1 class="contact-form_title">Get in Touch</h1>
		<div class="separator"></div>

	

		<form class="form" @submit="onSubmit">
			<input required name="name" v-model='name' placeholder="Name" type="text" autocomplete="off">
			<input required name="email" v-model="email" placeholder="E-mail" type="email" autocomplete="off">
			<textarea name="message" v-model="message" rows="4" placeholder="Message"></textarea>
		   <button class="button">  Send  </button>
           
		</form> -->
				<header>FILL THE FORM</header>

		<form id="form" class="topBefore" style="margin-bottom:10%;">
		
		  <input id="name" type="text" placeholder="NAME">
		  <input id="email" type="text" placeholder="E-MAIL">
		  <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
  			<input id="submit" type="submit" value="GO!">
  
</form>
<div class="DivDec">

    </div>
<div style="height:300px">
	<button class="card">
  <div class="row clearfix">
    <div class="left big">05994924124</div>
    <div class="right"><p><span class="big">D</span>evoe <span class="big">C</span>Oorperation</p><p><span class="med no-space">D</span><span class="small no-space">evoe Inc  and</span><span class="med no-space">U</span><span class="small no-space">BT</span></p></div>
  </div>
  <div class="row">
    <p><span class="big">J</span>oell <span class="big">Nissan</span></p>
    <p><span class="big">V</span>ice <span class="big">P</span>resident</p>
  </div>
  <div class="row">
    <p><span class="med">358 U</span><span class="small">lpian </span><span class="med">P</span><span class="small">rishtine </span><span class="med">K</span><span class="small">osove </span><span class="med">Sh</span><span class="small">qiperi</span><span class="med">,Durres 21942</span><span class="small">ax </span><span class="med">212 555 6390 T</span><span class="small">elex </span><span class="med">10 4534</span>
    </p>
  </div>
</button>
</div>
<div class="DivDec">

    </div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.DivDec{
   width: 100%;
  height: 200px;
 
   background-image: url("../assets/r-architecture-2gDwlIim3Uw-unsplash.jpg");
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
}

.divForDecord{
width:100%;
height:600px;
background-color: black;
opacity:0.5;
 

}
.maindiv{
  width: 100%;
  height: 600px;
 
   background-image: url("../assets/r-architecture-2gDwlIim3Uw-unsplash.jpg");
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;

}
/* body {
	background: #f1f1f1;
	font-family: 'Roboto', sans-serif;
}

.contact-form {
	font-family: 16px;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
/* } */

/* .contact-form .separator {
	border-bottom: solid 1px #ccc;
	margin-bottom: 15px;
} */

/* .contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}

.contact-form_title {
	 text-align: center;
  font-size: 32px;
  color: #303030;
  margin-bottom: 40px;
} */

/* .contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
   width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
  margin-bottom: 8px;
} */

/* .contact-form textarea {
	 width: 100%;
  background-color: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
  margin-bottom: 8px;
} */

/* .contact-form .button {
 text-decoration: none;
 position: middle;
 border: none;
 font-size: 14px;
 font-family: inherit;
 color: #fff;
 width: 9em;
 height: 3em;
 line-height: 2em;
 text-align: center;
 background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
 background-size: 300%;
 border-radius: 30px;
 z-index: 1;

} */ 



@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400);

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #b3aca7;
  font-size: 0.875em;
}

input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
  color: #bbb5af;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::-moz-placeholder, textarea:focus::-moz-placeholder {
  color: #bbb5af;
}

input::placeholder, textarea::placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::placeholder, textarea::focus:placeholder {
  color: #bbb5af;
}

input::-ms-placeholder, textarea::-ms-placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::-ms-placeholder, textarea:focus::-ms-placeholder {
  color: #bbb5af;
}

/* on hover placeholder */

input:hover::-webkit-input-placeholder, textarea:hover::-webkit-input-placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::-webkit-input-placeholder, textarea:hover:focus::-webkit-input-placeholder {
  color: #cbc6c1;
}

input:hover::-moz-placeholder, textarea:hover::-moz-placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::-moz-placeholder, textarea:hover:focus::-moz-placeholder {
  color: #cbc6c1;
}

input:hover::placeholder, textarea:hover::placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::placeholder, textarea:hover:focus::placeholder {
  color: #cbc6c1;
}

input:hover::placeholder, textarea:hover::placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::-ms-placeholder, textarea:hover::focus:-ms-placeholder {
  color: #cbc6c1;
}

body {
  font-family: 'Lato', sans-serif;
  background: #e2dedb;
  color: #b3aca7;
}

header {
  position: relative;
  margin: 100px 0 25px 0;
  font-size: 2.3em;
  text-align: center;
  letter-spacing: 7px;
}

#form {
  position: relative;
  width: 500px;
  margin: 50px auto 100px auto;
}

input {
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  width: 470px;
  height: 50px;
  padding: 0px 15px 0px 15px;
  
  background: transparent;
  outline: none;
  color: #726659;
  
  border: solid 1px #b3aca7;
  border-bottom: none;
  
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:hover {
  background: #b3aca7;
  color: #e2dedb;
}

textarea {
  width: 470px;
  max-width: 470px;
  height: 110px;
  max-height: 110px;
  padding: 15px;
  
  background: transparent;
  outline: none;
  
  color: #726659;
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  
  border: solid 1px #b3aca7;
  
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  background: #b3aca7;
  color: #e2dedb;
}

#submit {
  /* width: 502px; */
  
  padding: 0;
  margin: -5px 0px 0px 0px;
  
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  color: #b3aca7;
  
  outline:none;
  cursor: pointer;
  
  border: solid 1px #b3aca7;
  border-top: none;
}

#submit:hover {
  color: #e2dedb;
}

/*
  Hover and click on the card for animations!
*/

@import url(https://fonts.googleapis.com/css?family=Cormorant+Garamond);

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Cormorant Garamond", serif;
  text-transform: uppercase;
  box-sizing: inherit;
  font-size: 10.5px;
  letter-spacing: 1px;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5),
                -1px -1px 1px rgba(179, 179, 179, .5),
                1px 1px 0 rgba(255, 255, 255, 0.55),
                0 1px 3px white;
  overflow: hidden;
  color: #191919;
  background-color: azure;
}

button {
  display: block;
  position: relative;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  text-shadow: inherit;
  cursor: pointer;
  outline: inherit;
  z-index: 10;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.big {
  font-size: 150%;
}

.med {
  font-size: 100%;
  letter-spacing: .5px;
}

.small {
  font-size: 65%;
  letter-spacing: .5px;
}

.no-space {
  letter-spacing: 0px;
}

.card {
  background-color: #f4f1eb;
  background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png");
  height: 200px;
  width: 350px;
  margin: 20vh auto 0 auto;
  padding: 20px 10px 10px 10px;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
  /*transform-origin: 50% 100%;*/
  box-shadow: 0;
  transition: transform .4s ease,
              box-shadow .4s ease;
}

.card:hover {
  cursor: pointer;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg) translateZ(10px);
  box-shadow: 20px 20px 20px rgba(0, 0, 0, .4);
}

.card:focus {
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(10px);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, .4);
}

.card:focus::before {
  transform: skewX(0deg) translateX(0px) translateY(0px);
  height: 0px;
}

.card:focus::after {
  transform: skewY(0deg) translateX(0px) translateY(0px);
  width: 0px;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  display: block;
  background-color: grey;
  transition: transform .4s ease,
              height .4s ease,
              width .4s ease;
}

.card::before {
  width: 100%;
  height: 6px;
  bottom: 0;
  left: 0;
  transform: skewX(45deg) translateX(-3px) translateY(6px);
}

.card::after {
  height: 100%;
  width: 6px;
  top: 0;
  right: 0;
  transform: skewY(45deg) translateX(6px) translateY(-3px);
}

.row {
  display: block;
  text-align: center;
}

.row:nth-child(2) {
  margin: 35px 0 50px 0;
}

.left {
  float: left;
}

.right {
  float: right;
}

p {
  margin: 0;
}
</style>