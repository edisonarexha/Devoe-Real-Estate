<template>
  <VueDropzone
    id="customdropzone"
    ref="filesDropzone"
    :options="dropzoneOptions"
    :useCustomSlot="true"
    @vdropzone-mounted="handleMount"
    @vdropzone-removed-file="removeFile"
    :destroyDropzone="false"
    class="rounded-lg mb-4"
  >
    <div class="justify-content-center">
      <span style="font-size:10px">Click to select a file from your computer</span>
    </div>
  </VueDropzone>
</template>

<script>
import VueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import apiRequest from "../../utilities/apiRequests";

export default {
  components: {
    VueDropzone,
  },
  props: {
    officeId: String,
    initialFiles: String,
  },
  data() {
    return {
      dropzoneOptions: {
        url: `http://localhost:4000/offices/${this.officeId}/uploadFile`,
        method: "put",
        thumbnailWidth: 300,
        maxFilesize: 5,
        addRemoveLinks: true,
      },
    };
  },
  methods: {
    removeFile(file) {
      apiRequest.removeFile(this.officeId, file);
    },
    async handleMount() {
      if (!this.initialFiles || this.initialFiles.length === 0) {
        return;
      }

      const documentFiles = await apiRequest.getFilesDetails(this.initialFiles);

      documentFiles.forEach(({ fileDetails, fileUrl }) => {
        this.$refs.filesDropzone.manuallyAddFile(
          fileDetails,
          `http://localhost:4000/${fileUrl}`
        );
      });
    },
  },
};
</script>
<style scoped>
 #customdropzone {
   margin-top: 50px;
   width: 400px;
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.2px;
    color: #777;
    transition: background-color .2s linear;
    height: 440px;
    padding: 40px;
    position: relative;
    left: 217px;
    padding-top: 15%;
    bottom: 25px;

}
</style>