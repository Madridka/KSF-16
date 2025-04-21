<template>
  <div class="modal" v-if="isModalOpen">
    <div class="container modal-content">
      <h3 v-if="isEmpty">Корзина пуста</h3>
      <h3 v-else>Корзина</h3>
      <hr />
      <ul>
        <li v-for="card in $store.state.cart" :key="card">
          <cartForm
            :card="card"
            @increase-quantity="increaseQuantity"
            @decrease-quantity="decreaseQuantity"
            @delete-card="deleteCard"
            @get-item-total="getItemTotal"
          />
        </li>
      </ul>
      <div v-if="totalPrice > 0" class="total">
        Полная стоимость: {{ totalPrice }} руб.
      </div>

      <baseButton type="close" @click="closeModal" />
    </div>
  </div>
</template>

<script>
import baseButton from "../ui/baseButton.vue";
import cartForm from "../components/cartForm.vue";

export default {
  data() {
    return {
      isModalOpen: true,
    };
  },

  components: {
    baseButton,
    cartForm,
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