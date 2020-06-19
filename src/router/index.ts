import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Home.vue'),
        redirect:"/basicList",
        children: [
            {
                path: '/basicList', name: 'basicList',
                meta: { title: '基础列表' },
                component: () => import('../views/BasicList/BasicList.vue')
            },
            {
                path: '/basicDetail', name: 'basicDetail',
                meta: { title: '基础详情' },
                component: () => import('../views/BasicDetail/BasicDetail.vue')
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
