<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container d-flex" style="width: 1290px">
      <a class="navbar-brand" href="#">
        <img src="../../public/Logo.svg" alt="" class="img-fluid" />
      </a>
      <div class="d-flex">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="btnStatus"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <button class="btn d-block d-lg-none">
          <span
            class="btn bi bi-cart rounded-pill fs-5 text-black"
            style="background: linear-gradient(#ffc076, #f4ee53)"
          ></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item mx-3">
            <router-link to="/" class="nav-link">寶可夢圖鑑</router-link>
          </li> -->
          <li class="nav-item mx-3">
            <router-link to="/products" class="nav-link">周邊</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link to="/articles" class="nav-link">文章</router-link>
          </li>
        </ul>
        <ul
          class="navbar-nav me-auto justify-content-end sm-d-none"
          v-show="isShow"
        >
          <li class="nav-item mx-3 px-5 align-middle">
            <router-link
              to="/cart"
              class="nav-link rounded-pill d-flex align-items-center"
              style="background: linear-gradient(#ffc076, #f4ee53)"
              ><i
                class="bi bi-cart px-1 mx-1 rounded-pill"
                style="background: #fff7b0"
              ></i>
              來收服寶可夢吧！</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr />
  <RouterView></RouterView>
  <darkFooter></darkFooter>
</template>

<script>
import { RouterView } from "vue-router";
import darkFooter from "../components/Footer.vue";
export default {
  data() {
    return {
      isShow: true,
      isHidden: false,
    };
  },
  components: {
    RouterView,
    darkFooter,
  },
  methods: {
    btnStatus() {
      this.isShow = false;
      this.isHidden = true;
    },
  },
};
</script>
