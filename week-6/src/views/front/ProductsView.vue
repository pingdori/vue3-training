<template>
    這是產品列表頁面
    <table class="table">
        <tbody>
        <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
            <td><img :src="product.imageUrl" width="200" alt=""></td>
            <td></td>
            <RouterLink :to="`/product/${product.id}`"
            class="btn btn-outline-secondary">產品細節</RouterLink>
            <button type="button" class="btn btn-outline-primary" @click="addToCart(product.id)">加入購物車</button>
        </tr>
    </tbody>
    </table>
</template>
<script lang="ts">
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
// const一定要放在import後
export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res)
          this.products = res.data.products
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      // this.$http.post作為套件使用不用每個檔案做匯入
      this.$http.post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
