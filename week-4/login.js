const api = "https://vue3-course-api.hexschool.io/v2/admin/signin";
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
createApp({
  data() {
    return {
      user: {
        username: "",
        password: "",
        //空值要抓取v-model的內容
      },
    };
  },
  methods: {
    login() {
      axios
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `pokebox=${token}; expires=${new Date(expired)};`;
          window.location = "products.html";
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
}).mount("#app");
