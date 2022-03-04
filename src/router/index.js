import VueRouter from "vue-router";
import Login from "@/pages/Login";
import Index from "@/pages/Index";

export  default new VueRouter({
    base: '/',
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/index',
            component: Index
        }
    ]
})