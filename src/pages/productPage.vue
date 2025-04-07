<template>
  <div class="product">
    <h2><strong>{{ product.title }}</strong></h2>
    <div>
      <img :src="product.poster" :alt="product.title">
      <h3>О товаре:</h3>
      <p>Цена: {{product.price}} руб. </p>
      <p>Описание: {{product.shortDesc}} </p>
      <p>Полное описание: {{product.fullDesc}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "productPage",
  components: {},
  data() {
    return {
      id: this.$router.currentRoute.params.id,
    };
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
    },
  },
    computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
    product() {
      return this.allProducts.find((product) => product.id == this.id) || {};
    },
  },
};
</script>

<style>
</style>