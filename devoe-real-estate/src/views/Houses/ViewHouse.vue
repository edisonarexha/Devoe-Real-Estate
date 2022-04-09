<template>
  <section>
    <div v-if="this.house">
      <div class="col-5 col-md-8 col-lg-8">
        <Dropzone
          :houseId="this.$route.params.id"
          :initialFiles="house.files"
        />
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../../utilities/apiRequests";
import Dropzone from "../../components/Dropzones/DropzoneHouses.vue";
export default {
  name: "ViewHouse",
  components: {
    Dropzone,
  },
  created() {
    this.fetchHouse();
  },
  data() {
    return {
      house: null,
    };
  },
  methods: {
    async fetchHouse() {
      this.house = await apiRequest.getHouses(this.$route.params.id);
    },
  },
};
</script>

<style>
</style>