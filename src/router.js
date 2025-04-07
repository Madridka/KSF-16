import VueRouter from "vue-router";
import homePage from "@/pages/homePage.vue"
import adminPage from "@/pages/adminPage.vue"
import productPage from "@/pages/productPage.vue"
import cartPage from "@/pages/cartPage.vue"


export default new VueRouter({
    routes: [{
        path: "",
        component: homePage
    },
    {
        path: "/admin",
        component: adminPage
    },
    {
        path: "/product/:id",
        component: productPage,
    },
    {
        path: "/cart",
        component: cartPage,
    }
    ],
    mode: 'history'
})