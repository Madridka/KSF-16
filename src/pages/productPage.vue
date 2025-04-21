<template>
  <div class="product">
    <h2>
      <strong>{{ product.title }}</strong>
    </h2>
    <div>
      <img :src="product.poster" :alt="product.title" />
      <p>Количество: {{ product.count }} шт.</p>
      <p>Цена: {{ product.price }} руб.</p>
      <p>Описание: {{ product.shortDesc }}</p>
      <p>Полное описание: {{ product.fullDesc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "productPage",
  data() {
    return {
      id: this.$router.currentRoute.params.id,
    };
  },

  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
    product() {
      return this.allProducts.find((product) => product.id == this.id) || {};
    },
  },

  watch: {
    $route(to) {
      this.id = to.params.id;
    },
  },
};
</script>

<style>
</style>