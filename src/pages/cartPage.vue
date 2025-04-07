<template>
  <div class="modal" v-if="isModalOpen">
    <div class="container modal-content">
      <h3>Корзина</h3>
      <ul>
        <li v-for="card in $store.state.cart" :key="card.id">
          <img :src="card.poster" :alt="card.title" />
          <h4>{{ card.title }}</h4>
          Цена: {{ card.price }} <br />
          Количество: {{ card.quantity }} <br />
          Итого: {{ getItemTotal(card) }}
        </li>
      </ul>
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
  },
};
</script>

<style>
</style>