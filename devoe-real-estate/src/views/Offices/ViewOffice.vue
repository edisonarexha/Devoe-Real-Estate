<template>
  <section>
    <div v-if="this.office">
      <div class="col-5 col-md-8 col-lg-8">
        <Dropzone
          :officeId="this.$route.params.id"
          :initialFiles="office.files"
        />
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../../utilities/apiRequests";
import Dropzone from "../../components/Dropzones/DropzoneOffices.vue";
export default {
  name: "ViewOffice",
  components: {
    Dropzone,
  },
  created() {
    this.fetchOffice();
  },
  data() {
    return {
      office: null,
    };
  },
  methods: {
    async fetchOffice() {
      this.office = await apiRequest.getOffices(this.$route.params.id);
    },
  },
};
</script>

<style>
</style>