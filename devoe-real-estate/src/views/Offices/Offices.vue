<template>
  <div class="card-div">
    <CardOffice />
    <CardOffice />
    <CardOffice />
    <CardOffice />
    <CardOffice />

    <el-button
      type="text"
      class="add"
      @click="addFormVisible = true"
      ><i class="el-icon-plus"></i
    ></el-button>
    <el-dialog top="12vh" width="43%" height="" :visible.sync="addFormVisible">
      <AddOffices />
    </el-dialog>
  </div>
</template>
<script>
import CardOffice from "../reusables/CardOffice.vue";
import AddOffices from "./AddOffices";
export default {
  name: "HousesPage",
  components: {
    CardOffice,
    AddOffices,
  },
  data(){
      return{
          addFormVisible: false,
      }
  }
};
</script>
<style scoped>
</style>