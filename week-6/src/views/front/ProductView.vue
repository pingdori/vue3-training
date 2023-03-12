<template>
    這是單一產品頁面
    <h2>{{ product.title }}</h2>
    <img :src="product.imageUrl" class="img-fluid" alt="">
</template>
<script lang="ts">
// import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {}
    }
  },
  components: {
    // RouterLink
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      // 等同於id=this.$route.params.id
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<!-- getProducts () {
    console.log(this.$route.params)
    const { id } = this.$route.params
    this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/${id}`)
      .then((res) => {
        console.log(res)
      })
  } -->
