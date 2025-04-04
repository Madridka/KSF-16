<template>
  <div class="product">
    <div class="product__item" v-for="product in $store.state.order" :key="product.id">
      <div class="product__image-wrapper"><img src="../assets/photo.jpg" alt="Фото товара"></div>
      <hr>
      <strong>{{ product.title }}</strong> 
      <div style="font-size: 14px">{{ product.description }}</div>
      <button class="btn btn-edit btn-center" @click="startEdit(product.id)">
        Купить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopList",
  components: {
  },
  data() {
    return {
      isEditFormOpen: false,
    };
  },

  props: {
    order: {
      type: Array,
      required: true,
    },
    editingId: {
      type: Number,
      default: null,
    },
    editTitle: {
      type: String,
      default: "",
    },
    editPrice: {
      type: Number,
      default: null,
    },
    editCount: {
      type: Number,
      default: null,
    },
    editDescription: {
      type: String,
      default: "",
    },
  },

  methods: {
    startEdit(id) {
      this.isEditFormOpen = true;
      this.$emit("start-edit", id);
    },
    saveEdit(updatedProduct) {
      this.$emit("save-edit", updatedProduct);
      this.isEditFormOpen = false;
    },
    cancelEdit() {
      this.isEditFormOpen = false;
      this.$emit("cancel-edit");
    },
    deleteProd(id) {
      this.$emit("delete-prod", id);
    },
  },
};
</script>

<style>
</style>
