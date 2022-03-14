<template>
  <div style="height: 485px">
    <h1 class="h1-create-edit">Edit Item</h1>

    <hr style="border: 1px solid #fd4b4b9e" />
    <div>
      <div>
        <form class="form">
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label">Name </label>
            <input class="input-create-edit form-control" />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label">Price</label>
            <input class="input-create-edit form-control" />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label">Stock</label>
            <input class="input-create-edit form-control" />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label"
              >Description</label
            >
            <textarea class="input-create-edit form-control"></textarea>
          </div>
          <div>
            <button class="cancel" @click="cancel()">Cancel</button>
            <button type="submit" class="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditItem",
  methods: {
    cancel() {
      this.$emit("changeDisplay", false);
    },
  },
};
</script>

<style>

</style>