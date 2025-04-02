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
        v-model="description"
        placeholder="Описание товара"
      />
      <br />
      <div class="btn-center">
        <button :disabled="!isDisabled" class="btn btn-add">
          Добавить товар
        </button>
        <button class="btn btn-close" @click="closeModal">Х</button>
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
      count: "",
      price: "",
      description: "",
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
    addNewProduct() {
      const newProduct = {
        id: Date.now(),
        title: this.title,
        count: this.count,
        price: this.price,
        description: this.description,
      };
      this.$emit("add-product", newProduct);
      this.title = "";
      this.count = "";
      this.price = "";
      this.description = "";
    },
    closeModal() {
      this.$emit("close");
    },
  },

  computed: {
    isDisabled() {
      return (
        this.title !== "" &&
        this.count !== "" &&
        this.price !== "" &&
        this.description !== ""
      );
    },
  },
};
</script>

<style>
</style>
