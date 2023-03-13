<script>
export default {
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
}
</script>
