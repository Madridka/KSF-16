<template>
  <div class="app">
    <div class="app">
      <addForm :order="order" formTitle="Добавление товара" @add-product="addProduct"/>
      <ol>
        <li v-for="product in order" :key="product.id">
          <div v-if="editingId !== product.id">
            {{ product.title }} ||

            <strong>Количество: </strong> {{ product.count }} шт. ||
            <strong>Стоимость за шт.: </strong> {{ product.price }} руб.
            <button class="btn btn-edit" @click="startEditing(product.id)">
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
            <button class="btn btn-save" @click="saveEdit">Сохранить</button>
            <button class="btn btn-cancel" @click="cancelEdit">Отмена</button>
          </div>
        </li>
      </ol>

      <div class="total" v-if="totalPrice > 0">
        Стоимость покупки: <strong> {{ totalPrice }} рублей </strong>
      </div>
    </div>
  </div>
</template>

<script>
import addForm from "./components/addForm.vue";

import "./assets/styles/normalize.css";
import "./assets/styles/styles.scss";
import "./assets/styles/btn-styles.scss";

export default {
  name: "App",
  components: {
    addForm,
  },
  data() {
    return {
      title: "",
      price: "",
      count: "",

      order: [
        { id: 1, title: "Мопс", count: "2", price: "8000" },
        { id: 2, title: "Кофе", count: "2", price: "1200" },
        { id: 3, title: "Вода", count: "4", price: "56" },
        ],

      editingId: null,
      editTitle: "",
      editPrice: "",
      editCount: "",
    };
  },

  methods: {
    addProduct(product) {
      this.order.push(product);

      // (this.title = ""), (this.price = ""), (this.count = "");
    },

    startEditing(id) {
      this.formTitle = "Редактирование товара";
      const product = this.order.find((p) => p.id === id);
      this.editingId = id;
      this.editTitle = product.title;
      this.editPrice = product.price;
      this.editCount = product.count;
    },

    saveEdit() {
      const index = this.order.findIndex((p) => p.id === this.editingId);
      this.order[index] = {
        id: this.editingId,
        title: this.editTitle,
        price: Number(this.editPrice),
        count: Number(this.editCount),
      };
      this.cancelEdit();
    },

    cancelEdit() {
      this.editingId = null;
      this.editTitle = "";
      this.editPrice = "";
      this.editCount = "";
    },

    deleteProd(id) {
      this.order = this.order.filter((p) => p.id !== id);
    },
  },

  computed: {
    totalPrice() {
      // Не работает, если редактировать
      let totalPrice = 0;
      for (const product of this.order) {
        totalPrice += product.price * product.count;
      }
      return totalPrice;
    },

    isDisable() {
      return this.title !== "" && this.price !== "" && this.count !== "";
    },

    formTitle() {
      if (this.editingId) {
        return "Редактирование товара";
      } else {
        return "Добавление товара";
      }
    },
  },
};
</script>

<style>
</style>
