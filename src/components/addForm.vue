<template>
  <div>
    <form @submit="addNewProduct" class="container">
      <p>{{ formTitle }}</p>
      <input type="text" v-model="title" placeholder="Название товара" />
      <input type="number" v-model="count" placeholder="Количество, шт" />
      <input type="number" v-model="price" placeholder="Стоимость, руб" />
      <button :disabled="!isDisable" class="btn btn-add">Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addForm",
  components: {},
  data() {
    return {};
  },

  methods: {
    addNewProduct() {
      this.$emit('add-product', this.addNewProduct);
      this.addNewProduct = "";
    }
  },

  computed: {},
};
</script>

<style>
</style>
