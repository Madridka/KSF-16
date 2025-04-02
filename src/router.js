import VueRouter from "vue-router";
import homePage from "@/components/homePage.vue"
import infoPage from "@/components/infoPage.vue"

export default new VueRouter({
    routes: [{
        path: "",
        component: homePage
    },
    {
        path: "/info",
        component: infoPage
    }
    ],
    mode: 'history'
})