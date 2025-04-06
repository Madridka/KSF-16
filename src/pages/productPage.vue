<template>
  <div>
    <h3>Продукт {{ product.title }}</h3>
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