<template>
  <div class="card-div">
    <CardFlat />
    <CardFlat />
    <CardFlat />
    <CardFlat />
    <CardFlat />

    <el-button
      type="text"
      class="add"
      @click="addFormVisible = true"
      ><i class="el-icon-plus"></i
    ></el-button>
    <el-dialog top="12vh" width="43%" height="" :visible.sync="addFormVisible">
      <AddFlats />
    </el-dialog>
  </div>
</template>
<script>
import CardFlat from "../reusables/CardFlat.vue";
import AddFlats from "./AddFlats";
export default {
  name: "HousesPage",
  components: {
    CardFlat,
    AddFlats,
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