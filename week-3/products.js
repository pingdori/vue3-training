import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const side = "https://vue3-course-api.hexschool.io/v2/";
const api_path = "pokebox";

let productModal = {};
let delProductModal = {};

const app = createApp({
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [], //寫入多張圖片，內層有陣列或物件建議先寫入
      },
      isNew: false, //確認是編輯或新增所使用
    };
  },
  methods: {
    getProducts() {
      const url = `${side}api/${api_path}/admin/products/all`;
      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          console.log(this.products);
        })
        .catch((err) => {
          console.log(err.data);
        });
    },
    openModal(status, product) {
      if (status === "create") {
        productModal.show();
        this.isNew = true;
        //帶入初始化資料
        this.tempProduct = {
          imagesUrl: [],
        };
      } else if (status === "edit") {
        productModal.show();
        this.isNew = false;
        //會帶入當前要編輯的資料
        this.tempProduct = { ...product };
      } else if (status === "delete") {
        delProductModal.show();
        this.tempProduct = { ...product }; //取id使用
      }
    },
    updateProduct() {
      let url = `${side}api/${api_path}/admin/product`;
      //用this.isNew判斷API要怎麼進行
      let method = "post";
      if (!this.isNew) {
        url = `${side}api/${api_path}/admin/product/${this.tempProduct.id}`;
        method = "put";
      }
      axios[method](url, { data: this.tempProduct }).then((res) => {
        this.getProducts();
        productModal.hide();
      });
    },
    //建立新增產品時要跳出modal視窗
    //modal會改由Vue做操作

    delProduct() {
      const url = `${side}api/${api_path}/admin/product/${this.tempProduct.id}`;
      axios.delete(url).then(() => {
        this.getProducts();
        delProductModal.hide();
      });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)pokebox\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common.Authorization = token;
    this.getProducts();
    //Bootstrap方法
    console.log(bootstrap);
    //1.初始化 new
    productModal = new bootstrap.Modal("#productModal");
    //2.呼叫方法 .show .hide
    // productModal.show();
    // <--驗證
    delProductModal = new bootstrap.Modal("#delProductModal");
  },
});
app.mount("#app");
