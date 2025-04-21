<template>
  <div class="modal" v-if="isVisible">
    <form
      @submit.prevent="
        addNewProduct();
        closeModal();
      "
      class="container modal-content"
    >
      <p>{{ formTitle }}</p>
      <input
        type="text"
        v-model="newProduct.title"
        placeholder="Название товара"
      />
      <input
        type="number"
        v-model="newProduct.count"
        placeholder="Количество, шт"
      />
      <input
        type="number"
        v-model="newProduct.price"
        placeholder="Стоимость, руб"
      />
      <textarea
        type="text"
        v-model="newProduct.shortDesc"
        placeholder="Короткое описание товара"
      />
      <textarea
        type="text"
        v-model="newProduct.fullDesc"
        placeholder="Полное описание товара"
      />
      <br />
      <input type="file" @change="handleImageUpload" accept="image/*" />
      <br />
      <div class="btn-center">
        <button :disabled="!isDisabled" class="btn btn-add">
          Добавить товар
        </button>
        <button class="btn btn-close" @click="closeModal" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "addForm",

  props: {
    order: {
      type: Array,
    },
    formTitle: {
      type: String,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      newProduct: {
        title: "",
        poster: "",
        count: null,
        price: null,
        shortDesc: "",
        fullDesc: "",
      },
    };
  },

  computed: {
    isDisabled() {
      return (
        this.newProduct.title &&
        this.newProduct.poster &&
        this.newProduct.count > 0 &&
        this.newProduct.price > 0 &&
        this.newProduct.shortDesc &&
        this.newProduct.fullDesc
      );
    },
  },

  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.newProduct.poster = URL.createObjectURL(file);
      }
    },
    addNewProduct() {
      this.$store.commit("addNewProduct", this.newProduct);
      this.resetAdd();
    },
    resetAdd() {
      this.newProduct = {
        title: "",
        poster: "",
        count: 0,
        price: 0,
        shortDesc: "",
        fullDesc: "",
      };
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>
