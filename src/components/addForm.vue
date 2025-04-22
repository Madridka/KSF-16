<template>
  <div class="modal" v-if="isVisible">
    <form class="container modal-content">
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
        <baseButton
          :disabled="!isDisabled"
          label="Добавить товар"
          purpose="add"
          @click="
            addNewProduct();
            closeModal();
          "
        />

        <baseButton purpose="close" @click="closeModal" />
      </div>
    </form>
  </div>
</template>

<script>
import baseButton from "../ui/baseButton.vue";

export default {
  name: "addForm",

  components: {
    baseButton,
  },

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
        count: null,
        price: null,
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
