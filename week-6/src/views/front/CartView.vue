<template>
    這是購物車頁面
    <table class="table align-middle">
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td style="width: 200px">
                  <div
                    style="
                    height: 100px;
                    background-size: cover;
                    background-position: center
                    "
                    :style="{backgroundImage:`url(${product.imageUrl})`}"
                    ></div>
                </td>
                <td>
                  {{ product.title }}
                </td>
                <td>
                  <div class="h5" v-if="product.price===product.origin_price">{{ product.price }} 元</div>
                  <del class="h6" v-else>原價 {{ product.origin_price }} 元</del>
                  <div class="h5">現在只要 {{ product.price }} 元</div>
                </td>
                <td>
                  <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-secondary"
                    @click="openModal(product.id)">
                      <i class="fas fa-spinner fa-pulse"></i>
                      查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger"
                    @click="addToCart(product.id)"
                    >
                      <i class="fas fa-spinner fa-pulse"></i>
                      加到購物車
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- 購物車列表 -->
          <div class="text-end">
            <button class="btn btn-outline-danger" type="button" @click="deleteAllCarts()">清空購物車</button>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                    :disabled="item.id===loadingItem"
                    @click="deleteItem(item)">
                      <i class="fas fa-spinner fa-pulse"></i>
                      x
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <select name="" id="" class="form-control" v-model="item.qty"
                      :disabled="item.id===loadingItem"
                      @change="updateCartItem(item)">
                        <option :value="i" v-for="i in 20" :key= "`${i}+1234`">{{i}}</option>
                      </select>
                    </div>
                  </td>
                  <td class="text-end">
                    {{ item.total }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ cart.total }}</td>
              </tr>
              <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ cart.final_total }}</td>
              </tr>
            </tfoot>
          </table>
</template>
<script lang="ts">
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productId: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {},
      loadingItem: '',
      isLoading: false
    }
  },
  methods: {
    deleteAllCarts () {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`
      this.$http
        .delete(url)
        .then((response) => {
          alert(response.data.message)
          this.getCarts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    getCarts () {
      // 區塊或全畫面的讀取
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          //   console.log("購物車列表", res.data);
          this.cart = res.data.data
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.product.id, // 產品id
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data }) // 購物車id
        .then((res) => {
          //   this.cart = res.data.data;
          this.getCarts()
          this.loadingItem = ''
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    deleteItem (item) {
      this.loadingItem = item.id
      this.$http
        .delete(`${VITE_APP_URL}//v2/api/${VITE_APP_PATH}/cart/${item.id}`) // 購物車id
        .then((res) => {
          //   console.log("刪除購物車", res.data);
          //   this.cart = res.data.data;
          this.loadingItem = ''
          this.getCarts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    createOrder () {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order`
      const order = this.form
      this.$http
        .post(url, { data: order })
        .then((response) => {
          alert(response.data.message)
          this.$refs.form.resetForm()
          this.getCarts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })

      //   console.log(this.form.user);
    }
  },

  mounted () {
    this.getCarts()
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
    // console.log(VueLoading);
  }
}

</script>
