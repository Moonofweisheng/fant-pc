import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Index/Index.vue'),
        redirect: "/basicList",
        children: [
            {
                path: '/basicList', name: 'basicList',
                meta: { title: '基础列表', keepAlive: true, parent: 'list' },
                component: () => import('../views/BasicList/BasicList.vue')
            },
            {
                path: '/skuList', name: 'basicList',
                meta: { title: '商品列表', keepAlive: false, parent: 'list' },
                component: () => import('../views/SkuList/SkuList.vue')
            },
            {
                path: '/basicDetail', name: 'basicDetail',
                meta: { title: '基础详情', keepAlive: false, parent: 'detail' },
                component: () => import('../views/BasicDetail/BasicDetail.vue')
            },
            {
                path: '/basicForm', name: 'basicForm',
                meta: { title: '基础表单', keepAlive: false, parent: 'form' },
                component: () => import('../views/BasicForm/BasicForm.vue')
            },
            {
                path: '/complexForm', name: 'complexForm',
                meta: { title: '复杂表单', keepAlive: false, parent: 'form' },
                component: () => import('../views/ComplexForm/ComplexForm.vue')
            },
            {
                path: '/stepForm', name: 'stepForm',
                meta: { title: '复杂表单', keepAlive: false, parent: 'form' },
                component: () => import('../views/StepForm/StepForm.vue')
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
