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
            @click.stop.prevent="
              addToCart(product);
              showNotification();
            "
            class="btn btn-shoplist"
          >
            Купить
          </button>
        </div>
      </router-link>
    </div>
    <transition>
      <div class="animate__animated animate__fadeIn addedToCard" v-if="show">
        Товар добавлен к корзину
      </div></transition
    >
  </div>
</template>

<script>
export default {
  name: "shopList",
  components: {},
  data() {
    return {
      show: false,
    };
  },

  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
  },

  props: {},

  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    showNotification() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
  },
};
</script>

<style>
</style>
