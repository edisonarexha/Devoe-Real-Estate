<template>
  <div class="card-div">
    <CardHouse v-for="house in houses" :key="house._id" :house="house" />
    <div
     
    >
      <el-button  v-if="user.data.email === 'admin@gmail.com'" type="info" class="add" @click="addFormVisible = true"
        ><i class="el-icon-plus"></i
      ></el-button>
      <el-dialog
        top="12vh"
        width="43%"
        height=""
        :visible.sync="addFormVisible"
      >
        <AddHouses @changeDisplay="addFormVisible = false"/>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import CardHouse from "../reusable/CardHouse.vue";
import AddHouses from "./AddHouses.vue";
import apiRequests from "../../utilities/apiRequests";
import { mapGetters, mapState } from "vuex";
export default {
  name: "HousePage",
  components: {
    CardHouse,
    AddHouses,
  },
  data() {
    return {
      addFormVisible: false,
    };
  },

  beforeMount(){
this.fetchHouses();
  },
  created() {
    this.fetchHouses();
  },
  computed: {
    ...mapGetters({
      user: "user",
      houses: "housesList",
    }),
    ...mapState('users', {
        user: (state) => state.user
      }),
  },
  methods: {
    async fetchHouses() {
      const result = await apiRequests.getHousesList();
      console.log("res", result);
      this.$store.dispatch("fetchHouses", result);
    },
  },
};
</script>
<style scoped>
.card-div {
  display: flex;
  flex-direction: row;
  flex: 1 0 25%;
  flex-wrap: wrap;
}
.add {
  position: fixed;
  text-align: center;
  padding-top: 10px;
  font-size: 22px;
  right: 12px;
  margin: 10px;
}
</style>
