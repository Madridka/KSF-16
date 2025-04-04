<template>
  <div>
    <router-view></router-view>
    <hr>
    <footer>
      <ul class="nav justify-content-center">
        <li>
          <router-link exact to="/">Главная</router-link>
        </li>
        <li>
          <router-link exact to="/admin">Админка</router-link>
        </li>
        <li>
          <p>Корзина</p>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import "./assets/styles/normalize.css";
import "./assets/styles/styles.scss";
import "./assets/styles/btn-styles.scss";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },

  methods: {},

  computed: {},
};
</script>

<style>
</style>
