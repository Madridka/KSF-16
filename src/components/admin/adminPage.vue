<template>
  <div class="app">
    <addForm
      :is-visible="isModalOpen"
      @close="isModalOpen = false"
      :order="order"
      formTitle="Добавление товара"
      @add-product="addProduct"
    />

    <div class="btn-center">
      <button class="btn btn-add" @click="isModalOpen = !isModalOpen">
        Хочешь добавить товар? нажми сюда
      </button>
    </div>
    <div>
      <ol>
        <li v-for="product in $store.state.order" :key="product.id">
          <strong>Товар: </strong> {{ product.title }}
          <br />
          <strong>Количество: </strong>{{ product.count }} шт. ||
          <strong>Стоимость за шт.: </strong> {{ product.price }} руб.
          <br />
          <strong>Описание товара: </strong>
          {{ product.description }}
          <br />
          <button class="btn btn-edit" @click="startEdit(product.id)">
            Редактировать
          </button>
          <button class="btn btn-delete" @click="deleteProd(product.id)">
            Удалить
          </button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import addForm from "../addForm.vue";

import "../../assets/styles/normalize.css";
import "../../assets/styles/styles.scss";
import "../../assets/styles/btn-styles.scss";

export default {
  name: "App",
  components: {
    addForm,
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