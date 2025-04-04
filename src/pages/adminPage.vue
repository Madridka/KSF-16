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

    <ol>
      <li v-for="product in allProducts" :key="product.id">
        <div v-if="editingId !== product.id">
          <strong>Товар: </strong> {{ product.title }}
          <br />
          <strong>Количество: </strong>{{ product.count }} шт.
          <br>
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
        </div>
        <div v-else>
          <input type="text" v-model="editTitle" placeholder="Название" />
          <input type="number" v-model="editCount" placeholder="Количество" />
          <input type="number" v-model="editPrice" placeholder="Стоимость" />
          <textarea
            type="text"
            v-model="editDescription"
            placeholder="Описание"
          />
          <button class="btn btn-save" @click="saveEdit">Сохранить</button>
          <button class="btn btn-cancel" @click="cancelEdit">Отмена</button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import addForm from "../components/addForm.vue";

export default {
  name: "adminPage",
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

  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
  },

  methods: {
    addProduct(product) {
      this.order.push(product);
    },

    startEdit(id) {
      const product = this.allProducts.find((p) => p.id === id);
      this.editingId = id;
      this.editTitle = product.title;
      this.editPrice = product.price;
      this.editCount = product.count;
      this.editDescription = product.description;
    },

    saveEdit() {
      const updatedProduct = {
        id: this.editingId,
        title: this.editTitle,
        count: this.editCount,
        price: this.editPrice,
        description: this.editDescription,
      };
      this.$store.commit("updateProduct", updatedProduct); // Обновляем через Vuex
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
      this.$store.state.products = this.$store.state.products.filter(
        (p) => p.id !== id
      );
    },
  },
};
</script>

<style>
</style>