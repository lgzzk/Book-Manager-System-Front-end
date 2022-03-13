import VueRouter from "vue-router";
import Login from "@/pages/Login";
import Index from "@/pages/Index";
import axios from "axios";
import Home from "@/pages/Home";
import LibrarySet from "@/pages/LibrarySet";
import ParamSet from "@/pages/ParamSet";

export const router = new VueRouter({
    base: '/',
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/index',
            component: Index,
            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: 'library-set',
                    component: LibrarySet
                },
                {
                    path: 'param-set',
                    component: ParamSet
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('access-admin')
    if (!token && to.path !== '/') {
        return next('/')
    } else {
        axios.get('http://192.168.18.7:8081/BookManagerSystem/managers/checkToken', {
            params:{
                token
            }
        }).then(({data}) => {
            if (data.result) {
                /*强制跳转登录页*/
                // if (to.path === '/'){
                //     return next('/index')
                // }
                next()
            }else {
                return next('/')
            }
        }, reason => {
            console.log(reason)
        })
    }
    next()
})