import { Component, Vue } from 'vue-property-decorator'
import BasicLayout from "@/layouts/BasicLayoutSingle/BasicLayout.vue";

@Component({
    components: { BasicLayout }
})
export default class Index extends Vue {
    // 生成菜单
    get menus() {
        return [
            {
                name: '列表页', icon: 'iconfont el-icon-location', index: 'list', hasSecMenu: true, children: [
                    { name: '基础列表', url: '/basicList', index: 'basicList' },
                    { name: '商品列表', url: '/skuList', index: 'skuList' },
                    { name: '订单列表', url: '/orderList', index: 'orderList' }
                ]
            },
            {
                name: '表单页', icon: 'iconfont el-icon-location', index: 'form', hasSecMenu: true, children: [
                    { name: '基础表单', url: '/basicForm', index: 'basicForm' },
                    { name: '复杂表单', url: '/complexForm', index: 'complexForm' },
                    { name: '分步表单', url: '/stepForm', index: 'stepForm' }
                ]
            },
            {
                name: '详情页', icon: 'iconfont el-icon-location', index: 'detail', hasSecMenu: true, children: [
                    { name: '基础详情', url: '/basicDetail', index: 'basicDetail' }
                ]
            }
        ]
    }

    /**
     * 激活状态的菜单
     */
    get activeMenu() {
        return this.$route.name
    }

    /**
     * 登出事件
     */
    doLogout() { }

    handleOpen(key: string, keyPath: string) {
        console.log(key, keyPath);
    }

    handleClose(key: string, keyPath: string) {
        console.log(key, keyPath);
    }

}