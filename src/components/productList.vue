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
          <button @click.stop.prevent="addToPurchase" class="btn btn-shoplist">В корзину</button>
        </div>
      </router-link>
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

  methods: {
    addToPurchase() {
      console.log('Добавлен в корзину:');
    }
  },
};
</script>

<style>
</style>
