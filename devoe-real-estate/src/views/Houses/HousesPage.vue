<template>
  <div class="card-div">
    <CardHouse />
    <CardHouse />
    <CardHouse />
    <CardHouse />
    <CardHouse />

    <el-button
      type="text"
      class="add"
      @click="addFormVisible = true"
      ><i class="el-icon-plus"></i
    ></el-button>
    <el-dialog top="12vh" width="43%" height="" :visible.sync="addFormVisible">
      <AddHouses />
    </el-dialog>
  </div>
</template>
<script>
import CardHouse from "../reusables/CardHouse.vue";
import AddHouses from "./AddHouses";
export default {
  name: "HousesPage",
  components: {
    CardHouse,
    AddHouses,
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