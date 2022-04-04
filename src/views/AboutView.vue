<script setup>
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <img src="../assets/about.png" alt=".." class="z">
  <NavBar />
  <div class="about">
    <h1 class="y">About Me!</h1>
    <h3 class="y justify">
      My Name is Delia Putri I’am a Collage Student from state islamic
      University of Sultan Syarif kasim Riau, I’m Interested in UI/UX Design. If
      you guys have the same interested with me let’s be a mutual friend
    </h3>
    <h6 class="a">
      and i forgot that soon i would like to build a blog, soo i put the button
      here before i really add the button blog to navigation bar ehe
    </h6>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <router-link class="btn btn-light" to="/Blog">Blog</router-link>
    </div>
  </div>
</template>

<style scoped>
.about {
  margin-top: 200px;
  margin-left: 700px;
  margin-right: 200px;
}

.y {
  position: relative;
  color: white;
}
.a {
  position: relative;
  color: white;
}
.z {
  height: 750px;
  width: 1519px;
  position: fixed;
}
.btn {
  position: relative;
}
</style>
