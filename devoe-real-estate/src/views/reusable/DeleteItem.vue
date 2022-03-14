<template>
  <div style="height: 220px;">
    <h1 class="h1">Delete Item</h1>

    <p class="p">Are you sure?</p>
    <button class="cancel" @click="cancel()">No</button>
    <button class="submit">Yes</button>
  </div>
</template>

<script>
export default {
  name: "DeleteItem",
  methods:{
    cancel(){
      this.$emit("changeDisplay", false);
    }
  }
};
</script>

<style scoped>

</style>