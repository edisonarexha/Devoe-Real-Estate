<template>
  <div class="card-div">
    <card-office v-for="office in offices" :key="office._id" :office="office" />
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
        <add-offices @changeDisplay="addFormVisible = false"/>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import apiRequests from "../../utilities/apiRequests";
import { mapGetters, mapState } from "vuex";
import CardOffice from '../reusable/CardOffice.vue';
import AddOffices from './AddOffices.vue';
export default {
  name: "OfficePage",
  components: {
    CardOffice,
    AddOffices,
  },
  data() {
    return {
      addFormVisible: false,
    };
  },
  created() {
    this.fetchOffices();
  },
  computed: {
    ...mapGetters({
      user: "user",
      offices: "officesList",
    }),
    ...mapState('users', {
        user: (state) => state.user
      }),
  },
  methods: {
    async fetchOffices() {
      const result = await apiRequests.getOfficesList();
      this.$store.dispatch("fetchOffices", result);
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
