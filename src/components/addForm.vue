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
      <input type="text" v-model="title" placeholder="Название товара" />
      <input type="number" v-model="count" placeholder="Количество, шт" />
      <input type="number" v-model="price" placeholder="Стоимость, руб" />
      <textarea
        type="text"
        v-model="shortDesc"
        placeholder="Короткое описание товара"
      />
      <textarea
        type="text"
        v-model="fullDesc"
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
  components: {},
  data() {
    return {
      title: "",
      poster: "",
      count: "",
      price: "",
      shortDesc: "",
      fullDesc: "",
      isModalOpen: true,
    };
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
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.poster = URL.createObjectURL(file);
      }
    },
    addNewProduct() {
      const newProduct = {
        id: Date.now(),
        title: this.title,
        poster: this.poster,
        count: this.count,
        price: this.price,
        shortDesc: this.shortDesc,
        fullDesc: this.fullDesc,
      };
      this.$store.commit("addNewProduct", newProduct);
      this.title = "";
      this.poster = "";
      this.count = "";
      this.price = "";
      this.shortDesc = "";
      this.fullDesc = "";
    },
    closeModal() {
      this.$emit("close");
    },
  },

  computed: {
    isDisabled() {
      return (
        this.title !== "" &&
        this.poster !== "" &&
        this.count !== "" &&
        this.price !== "" &&
        this.shortDesc !== "" &&
        this.fullDesc !== ""
      );
    },
  },
};
</script>

<style>
</style>
