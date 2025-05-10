import VueRouter from "vue-router";
import homePage from "@/pages/homePage.vue"
import adminPage from "@/pages/adminPage.vue"
import productPage from "@/pages/productPage.vue"
import cartPage from "@/pages/cartPage.vue"


export default new VueRouter({
    routes: [{
        path: "/",
        component: homePage,
        meta: { nav: true, title: "Главная" }

    },
    {
        path: "/admin",
        component: adminPage,
        meta: { nav: true, title: "Админка" }

    },
    {
        path: "/product/:id",
        component: productPage,
        meta: { nav: false, title: "Продукт" }
    },
    {
        path: "/cart",
        component: cartPage,
        meta: { nav: true, title: "Корзина" }
    }
    ],
    mode: 'history'
})