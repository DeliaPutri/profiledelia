<script setup>
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <img src="../assets/3.png" alt=".." class="c">
  <NavBar />
  <div class="y">
    <h3 class="m">Assalamu'alaikum</h3>
    <h1 class="h">I'm Delia Putri</h1>
    <h2 class="m">I’am a Collage Student & Web Designer soon xixi</h2>
  </div>
</template>

<style scoped>
.c {
  height: 750px;
  width: 1519px;
  position: fixed;
}

.y {
  position: relative;
  margin-left: 50px;
  margin-top: 200px;
}
.m {
  color: white;
  font-family: "Open Sans";
}

.h {
  font-family: "Open Sans";
  font-size: 90px;
  color: #8e5c63;
}
@media screen and (max-width: 360px) {
  body {
    background-image: url("src/assets/andro.png");
    background-size: cover;
  }
}
</style>
