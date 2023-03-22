<template>
  <div class="underNav d-sm-block d-md-none"></div>
  <div class="container mt-md-5 mt-3 mb-7">
    <productSwiper></productSwiper>
    <div
      class="row row-cols-1 row-cols-md-3 row-cols-sm-2 mx-3 justify-content-center"
    >
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="`/product/${product.id}`"
        class="nav-link"
      >
        <div class="container col mb-5 border border-1 mx-1">
          <div class="card border-0 position-relative">
            <img
              :src="product.imageUrl"
              class="card-img-top rounded-0 img-fluid"
              alt="..."
            />
            <div class="card-body p-0">
              <h4 class="mb-2 mt-3">{{ product.title }}</h4>
              <p class="card-text text-muted mb-0" style="height: 100px">
                {{ product.description }}
              </p>
              <p class="text-muted fs-5 mt-5">{{ product.price }}元</p>
            </div>
            <div
              class="d-flex justify-content-between t-md-5 mt-3 mb-7 d-none d-md-block d-xs-block"
            >
              <addToCart :id="product.id"></addToCart>
            </div>
            <div
              class="d-flex justify-content-between t-md-5 mt-3 mb-7 d-md-none"
            >
              <addToCart :id="product.id"></addToCart>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style>
.underNav {
  height: 110px;
}
</style>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

import addToCart from "../../components/AddToCart.vue";
import productSwiper from "../../components/ProductSwiper.vue";
export default {
  data() {
    return {
      products: [],
      isShow: true,
      isHidden: false,
    };
  },
  components: { addToCart, productSwiper },
  methods: {
    getData() {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          console.log(res);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    btnStatus() {
      this.isShow = false;
      this.isHidden = true;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
