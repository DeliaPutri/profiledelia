<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-transparent justify-content-center">
    <router-link class="y nav-link" to="/">Home</router-link>
    <router-link class="y nav-link" to="/about">About</router-link>
    <router-link class="y nav-link" to="/portfolio">Portfolio</router-link>
    <router-link class="y nav-link" to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>
.y {
  color: white;
}
</style>
