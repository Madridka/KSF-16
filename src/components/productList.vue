<template>
  <div class="product">
    <div class="product__item" v-for="product in allProducts" :key="product.id">
      <div class="product__image-wrapper">
        <img src="#" alt="Фото товара" />
      </div>
      <hr />
      <strong>{{ product.title }}</strong>
      <div style="font-size: 13px">{{ product.description }}</div>
      <button class="btn btn-shoplist">
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopList",
  components: {},
  data() {
    return {};
  },

  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
  },

  props: {},

  methods: {},
};
</script>

<style>
</style>
