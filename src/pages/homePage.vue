<template>
  <div class="app">
    <productList />
  </div>
</template>

<script>
import productList from "../components/productList.vue";

export default {
  name: "App",
  
  components: {
    productList,
  },
};
</script>

<style>
</style>
