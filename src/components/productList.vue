<template>
  <div>
    <h2>Товары</h2>
    <hr />
    <div class="products">
      <router-link
        v-for="product in allProducts"
        :key="product.id"
        :to="'/product/' + product.id"
        ><div class="products__item">
          <div class="products__image-wrapper">
            <img :src="product.poster" alt="Фото товара" />
          </div>
          <hr />
          <strong>{{ product.title }}</strong>
          <div style="font-size: 13px">{{ product.shortDesc }}</div>
          <button
            @click.stop.prevent="addToCart(product)"
            class="btn btn-shoplist"
          >
            Купить
          </button>
        </div>
      </router-link>
    </div>

    <!-- <cartPage /> -->
  </div>
</template>

<script>
// import cartPage from "../components/cartPage.vue";


export default {
  name: "shopList",
  components: {
    // cartPage,
  },
  data() {
    return {};
  },

  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
  },

  props: {},

  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
      window.alert('Товар добавлен в корзину!')
    }
  },
};
</script>

<style>
</style>
