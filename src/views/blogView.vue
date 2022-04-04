<script setup>
import NavBar from "../components/NavBar.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.getElementsByTagName(
    "body"
  )[0].style.backgroundImage = `url('src/assets/blog.png')`;
  document.getElementsByTagName("body")[0].style.backgroundSize = `cover`;
});
</script>

<template>
  <NavBar />
  <!-- Button trigger modal -->
  <div class="a">
    <button
      type="button"
      class="btn x"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      here friends
    </button>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Announcement</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          I'll build my own blog soon see you next time
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            byee
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.a {
  position: relative;
  margin-top: 250px;
  margin-left: 700px;
}

.x {
  position: relative;
  background-color: #8e5c63;
  color: white;
}
</style>
