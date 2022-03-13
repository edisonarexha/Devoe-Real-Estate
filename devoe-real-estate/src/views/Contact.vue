<template>

<div id="contact-form" class="contact-form">
		<h1 class="contact-form_title">Get in Touch</h1>
		<div class="separator"></div>

	

		<form class="form" @submit="onSubmit">
			<input required name="name" v-model='name' placeholder="Name" type="text" autocomplete="off">
			<input required name="email" v-model="email" placeholder="E-mail" type="email" autocomplete="off">
			<textarea name="message" v-model="message" rows="4" placeholder="Message"></textarea>
		   <button class="button">  Send  </button>
           
		</form>
	</div>
</template>

<script>
export default {

}
</script>

<style>
body {
	background: #f1f1f1;
	font-family: 'Roboto', sans-serif;
}

.contact-form {
	font-family: 16px;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
}

.contact-form .separator {
	border-bottom: solid 1px #ccc;
	margin-bottom: 15px;
}

.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}

.contact-form_title {
	 text-align: center;
  font-size: 32px;
  color: #303030;
  margin-bottom: 40px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
   width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
  margin-bottom: 8px;
}

.contact-form textarea {
	 width: 100%;
  background-color: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
  margin-bottom: 8px;
}

.contact-form .button {
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

}


</style>