<template>
  <div class="form">
    <h1 class="h1-create-edit">Edit Office</h1>

    <hr style="border: 1px solid #fd4b4b9e" />
    <div class="form">


     <!-- <div style="margin: 20px;">
        <el-form :label-position="labelPosition" label-width="100px">
          
            <label >Name </label>
            <el-input  v-model="form.name" />
          
          <div>
            <label >Price</label>
            <el-input v-model="form.price" />
          </div>
          <div >
            <label >Stock</label>
            <el-input v-model="form.stock"/>
          </div>
          <div>
            <label>Description</label>
            <textarea v-model="form.description"></textarea>
          </div>
          <div>
            <button class="cancel" @click="cancel()">Cancel</button>
            <button type="submit" class="submit" @click="editOffice">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>-->

 
 <div style="margin: 20px;">
<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
  <el-form-item label="Name">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
</el-form> 

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
        name: this.office.name,
        price: this.office.price,
        stock: this.office.stock,
        description: this.office.description,
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
.el-dialog__body {
  padding: 0px 12px !important;
  color: black;
  text-align: center;
  font-family: GrandHotel;
  font-size: 55px;
  position: relative;
}
.form {
    width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.submit {
  background-color: rgb(221, 27, 27);
  border: 1px solid rgb(221, 27, 27);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
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
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
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
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
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
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
  transform: translateY(-2px);
}
.div-create-edit {
  position: relative;
  left: 9px;
  color: #fd4b4b;
  font-weight: 500;
  font-family: Galdeano;
  font-size: 20px;
}
</style>
