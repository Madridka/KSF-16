<template>
  <div>
    <form @submit.prevent="addNewProduct" class="container">
      <p>{{ formTitle }}</p>
      <input type="text" v-model="title" placeholder="Название товара" />
      <input type="number" v-model="count" placeholder="Количество, шт" />
      <input type="number" v-model="price" placeholder="Стоимость, руб" />
      <!-- <button :disabled="!isDisable" class="btn btn-add">Добавить товар</button> -->
      <button class="btn btn-add">Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addForm",
  components: {},
  data() {
    return {
      title: '',
      count: '',
      price: ''
    };
  },
  props: {
    order: {
      type: Array
    }, 
    formTitle: {
      type: String
    }
  },
  methods: {
    addNewProduct() {
      const newProduct = {
        id: Date.now(),
        title: this.title,
        count: this.count,
        price: this.price
      }
      this.$emit('add-product', newProduct)
      this.title = '';
      this.count = '';
      this.price = '';

    }
  },

  computed: {},
};
</script>

<style>
</style>
