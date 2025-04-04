import VueRouter from "vue-router";
import homePage from "@/components/homePage.vue"
import adminPage from "@/components/admin/adminPage.vue"

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