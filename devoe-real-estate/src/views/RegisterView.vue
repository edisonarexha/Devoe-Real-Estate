<template>
  <div class="form-wrap">
    <form class="register">
      <h2>Create your Account</h2>
      <div class="inputs">
        <div class="input">
          <input
            type="text"
            placeholder="First Name"
            v-model="firstName"
            name=""
            id=""
          />
          <!-- <email class="icon"/> -->
        </div>
        <div class="input">
          <input
            type="text"
            placeholder="Last Name"
            v-model="lastName"
            name=""
            id=""
          />
          <!-- <email class="icon"/> -->
        </div>
        <div class="input">
          <input
            type="text"
            placeholder="Email"
            v-model="username"
            name=""
            id=""
          />
          <!-- <email class="icon"/> -->
        </div>
        <div class="input">
          <input
            type="text"
            placeholder="Username"
            v-model="email"
            name=""
            id=""
          />
          <!-- <email class="icon"/> -->
        </div>
        <div class="input">
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            name=""
            id=""
          />
          <!-- <password class="icon"/> -->
        </div>
      </div>

      <el-button
        size="large"
        type="success"
        plain
        style="width: 150px; margin-top: 10px"
        @click.prevent ="register"
        >Sign Up</el-button
      >
       <div v-show="error" style="margin-top: 10px;color:red">{{ errorMsg }}</div>
      <p class="login-register">
        Already have an account?
        <span @click="goToSignIn()" style="cursor: pointer; color: #67c23a"
          >Sign In</span
        >
      </p>
      <div class="angle"></div>
    </form>
      <div class="background">test</div>
  </div>
</template>

<script>
import apiRequests from "../../src/utilities/apiRequests";
export default {
  name: "RegisterView",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    goToSignIn() {
      this.$router.push({
        name: "login-view",
      });
    },
    async register() {
      try {
        await apiRequests.registerUser(
          this.firstName,
          this.lastName,
          this.username,
          this.email,
          this.password
        );
        this.$router.replace({ name: "login-view" });
      } catch (err) {
        this.error = true;
        this.errorMsg = "Please fill out all the fields" + err;
      }
      return;
    },
   
  },
};
</script>
<style>
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  width: 100%;
}

.router-link {
  color: #000;
}

form {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

h2 {
  text-align: center;
  font-size: 32px;
  color: #303030;
  margin-bottom: 40px;
}

.inputs {
  width: 100%;
  max-width: 350px;
}

.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}

input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
}

/* .icon{
            width: 12px;
            position: absolute;
            left: 6px;
          }
         */

.forgot-password {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease all;
}

.angle {
  display: flex;
  position: absolute;
  background-color: #fff;
  transform: rotateZ(3deg);
  width: 60px;
  right: -30px;
  height: 101%;
}

.background {
  flex: 2;
  background-size: cover;
  background-image: url("@/assets/houses.jpeg");
  width: 100%;
  height: 100%;
}
</style>
