<script setup>
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <img src="../assets/port.png" alt=".." class="c">
  <NavBar />
  <h1 class="d">Myportfolio</h1>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-sm-4">
        <div class="card">
          <a href="">
            <img src="../assets/bsi.png" class="card-img-top" alt="..." />
          </a>
          <div class="card-body">
            <p class="card-text">Re-design BSI mobile Banking</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <a href="https://dribbble.com/shots/17030732-Figma-squad-Logo">
            <img src="../assets/figma.png" class="card-img-top" alt="..." />
          </a>
          <div class="card-body">
            <p class="card-text">Some idea for my lab Squad.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.d {
  position: relative;
  color: white;
  margin-left: 250px;
  margin-top: 25px;
}
.c {
  height: 750px;
  width: 1519px;
  position: fixed;
}

</style>
