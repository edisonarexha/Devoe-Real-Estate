<template>
  <div style="height: 485px">
    <h1 class="h1-create-edit">Edit Apartment</h1>

    <hr  />
    <div>
      <div>
        <form class="form">
          <div class="form-group div-create-edit">
            <el-input class="input-create-edit form-control" v-model="form.name" />
          </div>
          <div class="form-group div-create-edit">
            <el-input class="input-create-edit form-control" v-model="form.price"/>
          </div>
          <div class="form-group div-create-edit">
            <el-input class="input-create-edit form-control" v-model="form.stock"/>
          </div>
          <div class="form-group div-create-edit">
            <el-input type="textarea" class="input-create-edit form-control" v-model="form.description"></el-input>
          </div>
          <div>
            <el-button type="danger" class="butoni" @click="cancel()">Cancel</el-button>
            <el-button style="background-color: lightblue;" type="submit" class="butoni" @click="editFlat">Submit</el-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import apiRequest from "../../utilities/apiRequests";
export default {
  name: "EditFlat",
  props:{
    flats:Object,
  },
  data() {
    return {
      form: {
        name: this.flats.name,
        price: this.flats.price,
        stock: this.flats.stock,
        description: this.flats.description,
      },
      flat: null,
    };
  },
  created() {
    this.fetchFlat();
  },
  methods: {
    async fetchFlat() {
      this.flat = await apiRequest.getFlats(this.$route.params.id);
    },
    cancel() {
      this.$emit("changeDisplay", false);
    },
    async editFlat() {
    await apiRequest.editFlats({ ...this.form }).then(()=>{
       this.$emit("changeDisplay", false);
    })
    },
  },
};
</script>

<style>
.el-dialog__body {
  padding: 0px 12px !important;
  color: black;
    text-align: center;
     font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    position: relative;
    text-decoration: none;
}
.form {
  position: relative;
  left: 60px;
  width: 500px;
}
.submit {
  background-color: rgb(221, 27, 27);
  border: 1px solid rgb(221, 27, 27);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-family: Galdeano;
  font-size: 20px;
  width: 95px;
  height: 36px;
  border-radius: 6px;
  text-align: center;
  position: relative;
  /* position: relative;
    width: 102px;
    height: 43px;
    font-size: 20px;
    border-radius: 6px;
    background-color: lightseagreen;
    color: white;
    border: none;*/
    top: 22px;
    left: 161px; 
}
.submit:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
.label {
  float: left;
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
  right: 141px;
  font-size: 20px;
  top: 22px;
}
.cancel:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
.div-create-edit {
  position: relative;
  left: 9px;
  color: black;
  font-weight: 500;
  font-family: Galdeano;
  font-size: 20px;
}
.butoni{
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>