<template>
  <div v-if="$route.name === 'login-view'">
    <div>
      <h4>Sign In</h4>
    </div>
    <el-form status-icon label-width="120px" class="demo-ruleForm">
      <el-form-item label="Email" prop="pass">
        <el-input type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="checkPass">
        <el-input type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Submit</el-button>
        <el-button>Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
  <router-view v-else />
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style></style>
