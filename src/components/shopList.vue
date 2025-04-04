<template>
  <div class="product">
    <div class="product__item" v-for="product in order" :key="product.id">
      <div class="product__image-wrapper"><img src="../assets/photo.jpg" alt="Фото товара"></div>
      <hr>
      <strong>{{ product.title }}</strong> 
      <div style="font-size: 14px">{{ product.description }}</div>
      <button class="btn btn-edit btn-center" @click="startEdit(product.id)">
        Купить
      </button>
      <!-- <button class="btn btn-delete" @click="deleteProd(product.id)">
        Удалить
      </button> -->

      <!-- <editForm
        :is-visible="isEditFormOpen"
        @close="isEditFormOpen = false"
        formTitle="Редактирование товара"
        :order="order"
        :editingId="editingId"
        :editTitle="editTitle"
        :editPrice="editPrice"
        :editCount="editCount"
        :editDescription="editDescription"
        @save-edit="saveEdit"
        @cancel-edit="cancelEdit"
      /> -->
    </div>
  </div>
</template>

<script>
// import editForm from "./editForm.vue";

export default {
  name: "shopList",
  components: {
    // editForm,
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
