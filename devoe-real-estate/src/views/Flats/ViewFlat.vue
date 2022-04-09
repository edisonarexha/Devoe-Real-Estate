<template>
  <section>
    <div v-if="this.flat">
      <div class="col-5 col-md-8 col-lg-8">
        <Dropzone
          :flatId="this.$route.params.id"
          :initialFiles="flat.files"
        />
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../../utilities/apiRequests";
import Dropzone from "../../components/Dropzones/DropzoneFlats.vue";
export default {
  name: "ViewFlat",
  components: {
    Dropzone,
  },
  created() {
    this.fetchFlat();
  },
  data() {
    return {
      flat: null,
    };
  },
  methods: {
    async fetchFlat() {
      this.flat = await apiRequest.getFlats(this.$route.params.id);
    },
  },
};
</script>

<style>
</style>