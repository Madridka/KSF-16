<template>
  <div>
    <img :src="card.poster" :alt="card.title" />
    <h4>{{ card.title }}</h4>
    Цена: {{ card.price }} руб./шт.<br />
    Количество: {{ card.quantity }} шт.
    <baseButton label="+" type="edit" @click="increaseQuantity(card.id)" />

    <baseButton label="-" type="delete" @click="decreaseQuantity(card.id)" />
    <br />
    Итого: {{ getItemTotal(card) }} руб.
    <br />

    <baseButton
      label="удалить товар"
      type="cancel"
      @click="deleteCard(card.id)"
    />
  </div>
</template>

<script>
import baseButton from "../ui/baseButton.vue";
export default {
  name: "cartForm",
  components: {
    baseButton,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    increaseQuantity(id) {
      this.$emit("increase-quantity", id);
    },
    decreaseQuantity(id) {
      this.$emit("decrease-quantity", id);
    },
    deleteCard(id) {
      this.$emit("delete-card", id);
    },
    getItemTotal(card) {
      return card.price * card.quantity;
    },
  },
};
</script>

<style>
</style>