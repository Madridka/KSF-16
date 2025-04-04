<template>
  <div class="app">
    <shopList
      :order="order"
      :editingId="editingId"
      :editTitle="editTitle"
      :editPrice="editPrice"
      :editCount="editCount"
      :editDescription="editDescription"
      @start-edit="startEditing"
      @save-edit="saveEdit"
      @cancel-edit="cancelEdit"
      @delete-prod="deleteProd"
    />
  </div>
</template>

<script>
// import addForm from "./addForm.vue";
import ShopList from "./shopList.vue";

export default {
  name: "App",
  components: {
    // addForm,
    ShopList,
  },
  data() {
    return {
      editingId: null,
      editTitle: "",
      editPrice: "",
      editCount: "",
      editDescription: "",

      isModalOpen: false,
    };
  },

  methods: {
    addProduct(product) {
      this.order.push(product);
    },

    startEditing(id) {
      this.formTitle = "Редактирование товара";
      const product = this.order.find((p) => p.id === id);
      this.editingId = id;
      this.editTitle = product.title;
      this.editPrice = product.price;
      this.editCount = product.count;
      this.editDescription = product.description;
    },

    saveEdit(updatedProduct) {
      const index = this.order.findIndex((p) => p.id === this.editingId);
      if (index !== -1) {
        this.order[index] = {
          id: this.editingId,
          title: updatedProduct.title,
          price: Number(updatedProduct.price),
          count: Number(updatedProduct.count),
          description: updatedProduct.description,
        };
      }
      this.cancelEdit();
    },

    cancelEdit() {
      this.editingId = null;
      this.editTitle = "";
      this.editPrice = "";
      this.editCount = "";
      this.editDescription = "";
    },

    deleteProd(id) {
      this.order = this.order.filter((p) => p.id !== id);
    },
  },

  computed: {},
};
</script>

<style>
</style>
