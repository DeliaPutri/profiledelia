<script setup>
import NavBar from "../components/NavBar.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.getElementsByTagName("body")[0].style.backgroundColor = `#8E5C63`;
  document.getElementsByTagName("body")[0].style.backgroundImage = ``;
});
</script>

<template>
  <NavBar />
  <div class="text-center gg">
    <a href="https://github.com/DeliaPutri">
      <i class="fa-brands fa-github y"></i>
    </a>
    <a href="https://www.instagram.com/_machasu">
      <i class="fa-brands fa-instagram y"></i>
    </a>
    <a href="tel:+6281373022132">
      <i class="fa-solid fa-phone y"></i>
    </a>
    <a href="https://dribbble.com/machaaa01">
      <i class="fa-brands fa-dribbble y"></i>
    </a>
    <a href="mailto:deliaputri041202@gmail.com">
      <i class="fa-solid fa-envelope y"></i>
    </a>
    <a href="https://www.youtube.com/channel/UChVniWN4UoSlWd1OKjJEqEA">
      <i class="fa-brands fa-youtube y"></i>
    </a>
  </div>

  <h6 class="p text-center">Design and build with love by Delia Putri</h6>
</template>
<style scoped>
.y {
  height: 50px;
  margin-left: 50px;
  margin-right: 50px;
  color: #451e20;
}
.gg {
  margin-top: 250px;
}
.p {
  color: white;
  margin-top: 350px;
  opacity: 30%;
}
</style>
