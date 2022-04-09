<template>
<div>
    <!-- <h3>Check our Apartments</h3> -->
  <div class="card-div">
    <CardFlat v-for="flat in flats" :key="flat._id" :flat="flat" />
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
        <AddFlat @changeDisplay="addFormVisible = false" />
      </el-dialog>
    </div>
  </div>
</div>
</template>
<script>
import CardFlat from "../reusable/CardFlat.vue";
import AddFlat from "./AddFlats.vue";
import apiRequests from "../../utilities/apiRequests";
import { mapGetters, mapState } from "vuex";
export default {
  name: "FlatPage",
  components: {
    CardFlat,
    AddFlat,
  },
  data() {
    return {
      addFormVisible: false,
    };
  },
  beforeMount(){
    this.fetchFlats();
  },
  created() {
    this.fetchFlats();
  },
  computed: {
    ...mapGetters({
      user: "user",
      flats: "flatsList",
    }),
  ...mapState('users', {
        user: (state) => state.user
      }),
  },
  methods: {
    async fetchFlats() {
      const result = await apiRequests.getFlatsList();
      console.log("res", result);
      this.$store.dispatch("fetchFlats", result);
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