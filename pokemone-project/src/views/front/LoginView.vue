<template>
  <div class="container mt-5">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6 mb-5">
        <h1 class="h3 mb-3 font-weight-normal">管理員登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            v-model="user.username"
            required
            autofocus
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            v-model="user.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="text-end mt-4">
          <button
            class="btn btn-lg btn btn-outline-secondary btn-block"
            type="submit"
          >
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env;

// import emitter from "@/methods/eventBus";
// import ToastMessages from "@/components/ToastMessages.vue";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      isLoading: false,
      user: {},
    };
  },
  methods: {
    signIn() {
      const api = `${VITE_APP_URL}admin/signin`;
      this.isLoading = true;
      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data;
          document.cookie = `pokebox=${token};expires=${new Date(expired)};`;
          this.isLoading = false;
          this.$router.push("/admin");
        })
        .catch((error) => {
          this.isLoading = false;
          Swal.fire({
            title: "登入失敗",
            text: "請重新輸入帳號密碼",
            icon: "error",
            confirmButtonText: "確定",
          });
        });
    },
  },
};
</script>
