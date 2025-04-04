import VueRouter from "vue-router";
import homePage from "@/pages/homePage.vue"
import adminPage from "@/pages/adminPage.vue"

export default new VueRouter({
    routes: [{
        path: "",
        component: homePage
    },
    {
        path: "/admin",
        component: adminPage
    }
    ],
    mode: 'history'
})