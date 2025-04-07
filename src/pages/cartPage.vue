<template>
  <div class="modal" v-if="isModalOpen">
    <div class="modal-content">
      <h3>Корзина</h3>
      <ul>
        <li v-for="card in $store.state.cart" :key="card">
          {{ card.id }} //
          {{ card.title }}
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
    },
  },
};
</script>

<style>
</style>