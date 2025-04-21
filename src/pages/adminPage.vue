<template>
  <div class="admin">
    <addForm
      :is-visible="isModalOpen"
      @close="isModalOpen = false"
      formTitle="Добавление товара"
    />

    <div class="btn-center">
      <button class="btn btn-add" @click="isModalOpen = !isModalOpen">
        Добавить товар
      </button>
    </div>
    <hr />
    <ol>
      <li v-for="product in allProducts" :key="product.id">
        <div v-if="!editProduct || editProduct.id !== product.id">
          <img :src="product.poster" :alt="product.title" />
          <strong>Товар: </strong> {{ product.title }}
          <br />
          <strong>Количество: </strong>{{ product.count }} шт.
          <br />
          <strong>Стоимость за шт.: </strong> {{ product.price }} руб.
          <br />
          <strong>Короткое описание товара: </strong>
          {{ product.shortDesc }}
          <br />
          <strong>Полное описание товара: </strong>
          {{ product.fullDesc }}
          <br />
          <button class="btn btn-edit" @click="startEdit(product)">
            Редактировать
          </button>
          <button class="btn btn-delete" @click="deleteProd(product.id)">
            Удалить
          </button>
        </div>
        <div v-else>
          <img :src="editProduct.poster" :alt="editProduct.title" width="100" />
          <input type="file" @change="handleImageUpload" accept="image/*" />
          <input
            type="text"
            v-model="editProduct.title"
            placeholder="Название"
          />
          <input
            type="number"
            v-model="editProduct.count"
            placeholder="Количество"
          />
          <input
            type="number"
            v-model="editProduct.price"
            placeholder="Стоимость"
          />
          <textarea
            type="text"
            v-model="editProduct.shortDesc"
            placeholder="Короткое описание"
          />
          <textarea
            type="text"
            v-model="editProduct.fullDesc"
            placeholder="Полное описание"
          />

          <br />
          <button
            :disabled="!isDisabled"
            class="btn btn-save"
            @click="saveEdit"
          >
            Сохранить
          </button>
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
      editProduct: null,
      isModalOpen: false,
    };
  },

  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
    isDisabled() {
      return (
        this.editProduct.title &&
        this.editProduct.poster &&
        this.editProduct.count > 0 &&
        this.editProduct.price > 0 &&
        this.editProduct.shortDesc &&
        this.editProduct.fullDesc
      );
    },
  },

  methods: {
    startEdit(product) {
      this.editProduct = { ...product };
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.editProduct.poster = URL.createObjectURL(file);
      }
    },

    saveEdit() {
      this.$store.commit("updateProduct", this.editProduct);
      this.cancelEdit();
    },

    cancelEdit() {
      this.editProduct = null;
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