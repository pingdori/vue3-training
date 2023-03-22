import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "",
          name: "pokedex",
          component: () => import("../views/front/PokedexView.vue"),
        },
        {
          path: "pokemone",
          name: "pokemone",
          component: () => import("../views/front/PokemoneView.vue"),
        },
        {
          path: "products",
          component: () => import("../views/front/ProductsView.vue"),
        },
        {
          path: "product/:id",
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "cart",
          component: () => import("../views/front/CartView.vue"),
        },
        {
          path: "order/:id",
          component: () => import("../views/front/OrderInquiryView.vue"),
        },
        {
          path: "articles",
          component: () => import("../views/front/ArticlesView.vue"),
        },
        {
          path: "article/:articleId",
          component: () => import("../views/front/UserArticleView.vue"),
        },
        {
          path: "login",
          component: () => import("../views/front/LoginView.vue"),
        },
      ],
    },
    {
      path: "/admin",
      component: () => import("../views/DashboardView.vue"),
      children: [
        {
          path: "products",
          component: () => import("../views/admin/AdminProductsView.vue"),
        },
        {
          path: "orders",
          component: () => import("../views/admin/AdminOrdersView.vue"),
        },
        {
          path: "articles",
          component: () => import("../views/admin/UserArticlesView.vue"),
        },

        {
          path: "coupons",
          component: () => import("../views/admin/CouponsView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
