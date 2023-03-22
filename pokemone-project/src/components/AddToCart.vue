<template>
  <button
    type="button"
    @click="addToCart(id)"
    class="btn rounded-pill mb-2"
    style="background: #ffc076"
  >
    加入購物車
  </button>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  props: ["id"],
  methods: {
    addToCart(id) {
      const data = {
        product_id: id,
        qty: 1,
      };
      console.log(data);
      // this.$http.post作為套件使用不用每個檔案做匯入
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res);
          alert("已新增至購物車");
        });
    },
  },
};
</script>
