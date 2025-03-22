<template>
  <div class="app">
    <div id="app" class="app">
      <form @submit="addProduct" class="container">
        <p>{{ formTitle }}</p>
        <input type="text" v-model="title" placeholder="Название товара" />
        <input type="number" v-model="count" placeholder="Количество, шт" />
        <input type="number" v-model="price" placeholder="Стоимость, руб" />
        <button :disabled="!isDisable" class="btn btn-add">Добавить товар</button>
      </form>

      <ol>
        <li v-for="product in order" :key="product.id">
          <div v-if="editingId !== product.id">
            {{ product.title }} ||

            <strong>Количество: </strong> {{ product.count }} шт. || ,
            <strong>Стоимость за шт: </strong> {{ product.price }} руб.
            <button class="btn btn-edit" @click="startEditing(product.id)">
              Редактировать
            </button>
            <button class="btn btn-delete" @click="deleteProd(product.id)">
              Удалить
            </button>
          </div>
          <div v-else>
            <input type="text" v-model="editTitle" placeholder="Название" />
            <input type="number" v-model="editPrice" placeholder="Стоимость" />
            <input type="number" v-model="editCount" placeholder="Количество" />
            <button class="btn btn-save" @click="saveEdit">Сохранить</button>
            <button class="btn btn-cancel" @click="cancelEdit">Отмена</button>
          </div>
        </li>
      </ol>

      <div v-if="totalPrice > 0">
        Стоимость покупки: <strong> {{ totalPrice }} рублей </strong>
      </div>
    </div>
  </div>
</template>

<script>
import './styles/styles.scss'
import './styles/btn-styles.scss'

export default {
  data() {
    return {
      title: "",
      price: "",
      count: "",

      order: [],

      editingId: null,
      editTitle: "",
      editPrice: "",
      editCount: "",
    };
  },

  methods: {
    addProduct(e) {
      e.preventDefault();
      this.order.push({
        id: Date.now(),
        title: this.title,
        price: Number(this.price),
        count: Number(this.count),
      });

      (this.title = ""), (this.price = ""), (this.count = "");
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
      let totalPrice = 0;
      for (const product of this.order) {
        totalPrice += product.price * product.count;
      }
      return totalPrice;
    },
    isDisable() {
      return this.title !== '' && this.price !== '' && this.count !== '';
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
