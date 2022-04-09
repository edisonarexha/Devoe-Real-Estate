<template>
  <div style="height: 485px">
    <h1 class="h1-create-edit">Edit Office</h1>

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
  name: "EditOffice",
  props: {
    offices: Object,
  },
  data() {
    return {
      form: {
        name: this.offices.name,
        price: this.offices.price,
        stock: this.offices.stock,
        description: this.offices.description,
      },
      office: null,
    };
  },
  created() {
    this.fetchOffice();
  },
  methods: {
    async fetchOffice() {
      this.office = await apiRequest.getOffices(this.$route.params.id);
    },
    cancel() {
      this.$emit("changeDisplay", false);
    },
    async editOffice() {
      await apiRequest.editOffices({ ...this.form }).then(() => {
        this.$emit("changeDisplay", false);
      });
    },
  },
};
</script>

<style>
.form {
  position: relative;
  left: 60px;
  width: 500px;
      display: flex;
    flex-direction: column;
    gap: 10px;
}
.h1-add {
  color: black;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  position: relative;
  text-decoration: none;
}
.div-create-edit {
  position: relative;
  left: 9px;
  color: black;
  font-weight: 500;
  font-family: Galdeano;
  font-size: 20px;
}
.div-create-edit{
      position: relative;
    left: 9px;
    color: black;
    font-weight: 500;
    font-family: Galdeano;
    font-size: 20px;
}
.submit-create-edit {
    margin-top: 13px;
    margin-bottom: 15px;
  background-color: rgb(0, 155, 245);
  border: 1px solid rgb(0, 155, 245);
  border-radius: 4px; 
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Galdeano;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  padding: 8px 20px;
  text-align: center;
}
.submit-create-edit:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}
.cancel-create-edit {
    margin-top: 13px;
    margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  cursor: pointer;
  font-family: Galdeano;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  padding: 8px 20px;
  text-align: center;
}
.cancel-create-edit:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}

.butoni{
  margin-bottom: 40px;
}
</style>
