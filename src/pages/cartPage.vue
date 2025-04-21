<template>
  <div class="modal" v-if="isModalOpen">
    <div class="container modal-content">
      <h3 v-if="isEmpty">Корзина пуста</h3>
      <h3 v-else>Корзина</h3>
      <hr />
      <ul>
        <li v-for="card in $store.state.cart" :key="card">
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
      <div v-if="totalPrice > 0" class="total">
        Полная стоимость: {{ totalPrice }} руб.
      </div>
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

  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    isEmpty() {
      return this.$store.state.cart.length === 0;
    },
  },

  methods: {
    closeModal() {
      this.isModalOpen = !this.isModalOpen;
      this.$router.push("/");
    },
    getItemTotal(card) {
      return card.price * card.quantity;
    },
    increaseQuantity(id) {
      this.$store.commit("increaseQuantity", id);
    },
    decreaseQuantity(id) {
      this.$store.commit("decreaseQuantity", id);
    },
    deleteCard(id) {
      this.$store.commit("deleteCard", id);
    },
  },
};
</script>

<style>
</style>