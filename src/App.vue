<template>
  <div>
    <header>
      <ul class="nav nav-pills justify-content-center">
        <li>
          <router-link class="nav-link" exact to="/" active-class="active">Главная</router-link>
        </li>
        <li>
          <router-link class="nav-link" exact to="/admin" active-class="active">Админка</router-link>
        </li>
        <li>
          <router-link class="nav-link" exact to="#" active-class="active">Корзина</router-link>
        </li>
      </ul>
    </header>
    <hr />
    <router-view></router-view>
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
