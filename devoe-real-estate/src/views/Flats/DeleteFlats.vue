<template>
  <div style="height: 220px;">
    <h1 class="h1">Delete Apartment</h1>

    <p class="p">Are you sure you want to delete this apartament?</p>
    <el-button class="butoni" type="danger" @click="cancel()">No</el-button>
    <el-button class="butoni" type="primary" @click="deleteFlats">Yes</el-button>
  </div>
</template>

<script>
import apiRequest from "../../utilities/apiRequests";
export default {
  name: "DeleteFlat",
  props: {
    id: String,
  },
  methods:{
    cancel(){
      this.$emit("changeDisplay", false);
      console.log(this.id);
    },
     deleteFlats() {
       apiRequest.deleteFlats(this.id);
      this.$emit("changeDisplay", false);

      const result = apiRequest.getFlatsList();
      this.$store.dispatch("fetchFlats", result);
    },
  }
};
</script>

<style scoped>

.h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: black;
  text-decoration: none;
}
.p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
}
.cancel {
  width: 95px;
  height: 36px;
  background-color: rgb(0, 155, 245);
  border: 1px solid rgb(0, 155, 245);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Galdeano;
  position: relative;
  right: 45px;
  font-size: 22px;
  top: 22px; 
}
.cancel:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
.submit {
  background-color: rgb(221, 27, 27);
  border: 1px solid rgb(221, 27, 27);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Galdeano;
  width: 95px;
  height: 36px;
  border-radius: 6px;
  text-align: center;
  position: relative;
  left: 50px;
}
.submit:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}

.butoni{
  margin-bottom: 40px;
}
</style>