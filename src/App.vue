<template>
  <div>
    <header>
      <ul class="nav nav-pills justify-content-center">
        <li v-for="route in navRoutes" :key="route.path">
          <router-link
            class="nav-link"
            exact
            :to="route.path"
            active-class="active"
          >
            {{ route.meta.title }}
          </router-link>
        </li>
      </ul>
    </header>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  computed: {
    navRoutes() {
      return this.$router.options.routes.filter((route) => route.meta.nav);
    },
  },
};
</script>

<style>
</style>
