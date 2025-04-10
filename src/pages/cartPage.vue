<template>
  <div class="modal" v-if="isModalOpen">
    <div class="container modal-content">
      <h3>Корзина</h3>
      <hr />
      <ul>
        <h3 v-if="$store.state.cart.length === 0">Корзина пуста</h3>
        <li v-else v-for="card in $store.state.cart" :key="card.id">
          <img :src="card.poster" :alt="card.title" />
          <h4>{{ card.title }}</h4>
          Цена: {{ card.price }} руб./шт.<br />
          Количество: {{ card.quantity }} шт.
          <button class="btn btn-edit" @click="increaseQuantity(card.id)">
            +
          </button>
          <button class="btn btn-delete" @click="decreaseQuantity(card.id)">
            -
          </button>
          <br />
          Итого: {{ getItemTotal(card) }} руб.
          <br />
          <button class="btn btn-cancel" @click="deleteCard(card.id)">
            удалить товар
          </button>
        </li>
      </ul>
      <div class="total">Полная стоимость: {{ totalPrice }} руб. </div>
      <button class="btn btn-close" @click="closeModal"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: true,
    };
  },
  components: {},
  methods: {
    closeModal() {
      this.isModalOpen = !this.isModalOpen;
      this.$router.push("/");
    },
    getItemTotal(card) {
      return card.price * card.quantity;
    },
    increaseQuantity(card) {
      this.$store.commit("increaseQuantity", card);
    },
    decreaseQuantity(card) {
      this.$store.commit("decreaseQuantity", card);
    },
    deleteCard(card) {
      this.$store.commit("deleteCard", card);
    },
  },
  computed: {
    totalPrice() {
      console.log(this.$store.getters.totalPrice)
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style>
</style>