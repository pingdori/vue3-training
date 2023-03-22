<template>
  <div class="underNav"></div>
  <div class="container">
    <div class="underNav d-sm-block d-md-none"></div>
    <div class="row align-items-center">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <!-- <li class="breadcrumb-item">
              <a class="text-muted" href="/">首頁</a>
            </li> -->
            <li class="breadcrumb-item">
              <a class="text-muted" href="/vue-pokedex-project/products"
                >周邊</a
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.category }}
            </li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>{{ product.origin_price }}元</del>
        </p>
        <p class="h4 fw-bold text-end">{{ product.price }}元</p>
        <div class="row align-items-center">
          <div class="col-6"></div>
          <addToCart class="col" :id="product.id"></addToCart>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-6">
        <p class="fs-5">
          {{ product.description }}
        </p>
      </div>
    </div>
    <h3 class="fw-bold">產品細節</h3>
    <div class="swiper-container mt-4 mb-5">
      <div class="swiper-wrapper">
        <div class="d-flex flex-column bd-highlight mb-3">
          <img
            :src="product.imageUrl"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div
            class="card-img-top rounded-0"
            v-for="(url, key) in product.imagesUrl"
            :key="url.id"
          >
            <img :src="url" class="card-img-top rounded-0" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-light py-4">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"
      >
        <p class="mb-0 fs-5">{{ product.content }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.underNav {
  height: 80px;
}
</style>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import addToCart from "../../components/AddToCart.vue";

export default {
  data() {
    return {
      product: [],
    };
  },
  components: { addToCart },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      // 等同於id=this.$route.params.id
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
