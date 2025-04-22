<template>
  <div class="admin">
    <addForm
      :is-visible="isModalOpen"
      @close="isModalOpen = false"
      formTitle="Добавление товара"
    />

    <div class="btn-center">
      <baseButton
        label="Добавить товар"
        purpose="add"
        @click="isModalOpen = !isModalOpen"
      />
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

          <baseButton
            label="Редактировать"
            purpose="edit"
            @click="startEdit(product)"
          />

          <baseButton
            label="Удалить"
            purpose="delete"
            @click="deleteProd(product.id)"
          />
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
          <baseButton
            :disabled="!isDisabled"
            label="Сохранить"
            purpose="save"
            @click="saveEdit"
          />

          <baseButton label="Отмена" purpose="cancel" @click="cancelEdit" />
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import addForm from "../components/addForm.vue";
import baseButton from "../ui/baseButton.vue";

export default {
  name: "adminPage",
  components: {
    addForm,
    baseButton,
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