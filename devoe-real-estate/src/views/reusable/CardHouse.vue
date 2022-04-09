<template>
  <div>
    <ul class="row-div">
      <li class="li-cards">
        <div>
          <a><img class="img" v-if="src" :src="src" /></a>
        </div>
        <div>
          <p class="name-p">

             <router-link
              :to="{ name: 'ViewHouse', params: { id: house._id } }"
              >{{ house.name }}</router-link
            >
          </p>
          <p class="price-p" step="0.01">{{ house.price }}</p>
          <div class="flexed">
          <p class="stock-p">Available</p>
        <div
        v-if="user.data.email === 'admin@gmail.com'"
          class="index-button-div"
         
        >
          <el-button
            class="edit-delete-houses"
            type="text"
            @click="editFormVisible = true"
            ><i class="el-icon-edit"></i
          ></el-button>
          <el-dialog top="13vh" width="43%" :visible.sync="editFormVisible">
            <edit-house
              :houses="house"
              v-on:changeDisplay="editFormNotVisible($event)"
            />
          </el-dialog>
          <el-button
            class="edit-delete-houses"
            type="text"
            @click="deleteFormVisible = true"
            ><i class="el-icon-delete"></i>
          </el-button>
          <el-dialog
            :visible.sync="deleteFormVisible"
            style="width: 65vw; top: 15vh; margin-left: 265px"
          >
            <delete-houses
              :id="id"
              v-on:changeDisplay="deleteFormNotVisible($event)"
            />
          </el-dialog>
        </div>
        </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import EditHouse from '../Houses/EditHouse.vue';
import DeleteHouses from '../Houses/DeleteHouses';
import { mapState } from 'vuex';
export default {
  components: {
    EditHouse,
    DeleteHouses,
  },
  data() {
    return {
      editFormVisible: false,
      deleteFormVisible: false,
      id: null,
    };
  },
  props: {
    house: Object,
  },
  computed: {
    ...mapState('users', {
        user: (state) => state.user
      }),
    src() {
      const filename = this.house.files?.split(";")[0];
      return filename ? `http://localhost:4000/static/${filename}` : null;
    },
  },
  mounted() {
    this.id = this.house._id;
  },
  methods: {
    deleteFormNotVisible(e) {
      this.deleteFormVisible = e;
    },
    editFormNotVisible(e) {
      this.editFormVisible = e;
    },
  },
};
</script>

<style scoped>
.flexed{
  display: flex;
  justify-content: space-between
}
.li-cards {
  display: flex;
  flex-direction: column;
  flex: 1 0 15%;
  align-items: center;
  width: 500px;
  border-radius: 5px;
  padding: 22px 20px 0px 20px;
  background-color: #ffffff;
  margin-right: 27px;
  margin-bottom: 25px;
  border-style: groove;
}
.row-div {
  position: relative;
  top: 10px;
  left: 55px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 1px 0px 17px;
}
.edit-delete-houses {
  background-color: black;
  border-radius: 19px;
  height: 30px;
  width: 30px;
  text-align: center;
  padding-top: 7px;
  margin-bottom: 8px;
  color: white;
}
.index-button-div {
  gap: 10px;
  position: row;
  display: flex;
  left: 120px;
  bottom: 130px;
}
.el-dialog__header {
  padding: 0 !important;
}
.img {
  width: 500px;
  height: 265px;
  border-radius: 4px;
}
.name-p {
  text-decoration: none;
  padding-top: 5px;
  font-size: 25px;
  margin-bottom: 0px;
  color: black;
  width: 460px;
  text-align: left;
  height: 75px;
  
}
.name-p a{
  text-decoration: none;
  color: black;
  text-transform: capitalize;
  font-family: "Georgia", Times, serif;
  
}
.price-p {
  text-decoration: none;
  font-family: monospace;
  font-size: 25px;
  text-align: right;
  color: black;
  margin-bottom: 30px;
  margin-top: -75px;
}
.stock-p {
  font-size: 12px;
  color: gray;
  text-align: center;
}

</style>