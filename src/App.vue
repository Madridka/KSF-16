<template>
  <div class="app">
    <addForm
      :is-visible="isModalOpen"
      @close="isModalOpen = false"
      :order="order"
      formTitle="Добавление товара"
      @add-product="addProduct"
      :is-disabled="isDisabled"
    />

    <div class="btn-center">
      <button class="btn btn-add" @click="isModalOpen = !isModalOpen">
        Хочешь добавить товар? нажми сюда
      </button>
    </div>

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
import addForm from "./components/addForm.vue";
import ShopList from "./components/shopList.vue";

import "./assets/styles/normalize.css";
import "./assets/styles/styles.scss";
import "./assets/styles/btn-styles.scss";

export default {
  name: "App",
  components: {
    addForm,
    ShopList,
  },
  data() {
    return {
      order: [
        {
          id: 1,
          title: "Мопс",
          count: "2",
          price: "8000",
          description: "Собака",
        },
        {
          id: 2,
          title: "Кофе",
          count: "2",
          price: "1200",
          description: "Jardin зерна, 1кг, который Crema",
        },
        {
          id: 3,
          title: "Вода",
          count: "4",
          price: "56",
          description: "Четыре пятерки",
        },
      ],

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

  computed: {
    isDisable() {
      return (
        this.title !== "" &&
        this.price !== "" &&
        this.count !== "" &&
        this.description !== ""
      );
    },
  },
};
</script>

<style>
</style>
