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
    axios.get('http://192.168.18.7:8081/BookManagerSystem/managers/checkToken', {
        params: {
            token
        }
    }).then(({data}) => {
        console.log(data)
        if (data.result) {
            /*强制跳转登录页*/
            if (to.path === '/') {
                next('/index')
            }
            next()
        } else {
            if (to.path === '/'){
                next()
                return
            }
            next('/')
        }
    }, () => {
        if (to.path === '/'){
            next()
            return
        }
        next('/')
    })
})