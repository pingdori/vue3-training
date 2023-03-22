<template>
  這是後台頁面
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">寶可夢圖鑑屋</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link"
              >周邊列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/articles" class="nav-link"
              >文章列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link"
              >訂單列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link"
              >優惠券管理</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">回到前台</router-link>
          </li>

          <li class="nav-item">
            <a href="#" @click.prevent="logout" class="nav-link">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr />
  <RouterView></RouterView>
</template>

<script>
import Swal from "sweetalert2";
import { RouterView } from "vue-router";
const { VITE_APP_URL } = import.meta.env;
export default {
  data() {
    return {
      status: false,
    };
  },
  components: {
    RouterView,
  },
  methods: {
    logout() {
      document.cookie = `pokebox=; expires=${new Date()};`;
      this.$router.push("/login");
      Swal.fire({
        title: "登出成功",
        text: "已登出",
        icon: "success",
      });
    },
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)pokebox\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common.Authorization = token;
      const url = `${VITE_APP_URL}api/user/check`;
      this.$http.post(url).then((res) => {
        console.log(res);
        if (!res.data.success) {
          this.$router.push("/login");
          Swal.fire({
            title: "登入失敗",
            text: "請重新輸入帳號密碼",
            icon: "error",
            confirmButtonText: "確定",
          });
        }
      });
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
