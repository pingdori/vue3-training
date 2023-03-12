<template>
登入頁面
<form class="form-signin" @submit.prevent="login">
              <!-- v-on 可以用 @ 縮寫表達。 -->
              <div class="form-floating mb-3">
                <input type="email" class="form-control" v-model="user.username" id="floatingInput"
                  placeholder="name@example.com" required autofocus>
                  <!-- v-model 可雙向綁定，此處綁定user.username -->
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" v-model="user.password" id="floatingPassword"
                  placeholder="Password" required>
                  <!-- v-model 可雙向綁定，此處綁定user.password -->
                <label for="floatingPassword">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                登入
              </button>
            </form>
  </template>
<script lang="ts">
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
        // 空值要抓取v-model的內容
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${VITE_APP_URL}admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `pokebox=${token}; expires=${new Date(expired)};`
          this.$router.push('admin/products')
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  }

}
</script>
