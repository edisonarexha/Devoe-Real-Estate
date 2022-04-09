<template>
<div>
    <!-- <h3>Check our Apartments</h3> -->
  <div class="card-div">
    <CardFlat v-for="flat in flats" :key="flat._id" :flat="flat" />
    <div
      >
      <el-button type="info" size="medium" class="add" @click="addFormVisible = true"
      >Add Apartment</el-button>
      <el-dialog
        top="12vh"
        width="43%"
        height=""
        :visible.sync="addFormVisible"
      >
        <AddFlat />
      </el-dialog>
    </div>
  </div>
</div>
</template>
<script>
import CardFlat from "../reusable/CardFlat.vue";
import AddFlat from "./AddFlats.vue";
import apiRequests from "../../utilities/apiRequests";
import { mapGetters } from "vuex";
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
  created() {
    this.fetchFlats();
  },
  computed: {
    ...mapGetters({
      user: "user",
      flats: "flatsList",
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