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
            },
            {
                name: '异常页', icon: 'iconfont el-icon-location', index: 'abnormal', hasSecMenu: true, children: [
                    { name: '暂无内容', url: '/abnormal/暂无内容/暂无内容暂无内容暂无内容', index: 'noContent' },
                    { name: '暂无任务', url: '/abnormal/暂无任务/暂无任务暂无任务暂无任务', index: 'noTask' },
                    { name: '暂无搜索结果', url: '/abnormal/暂无搜索结果/暂无搜索结果暂无搜索结果暂无搜索结果', index: 'noSearchResult' },
                    { name: '系统异常', url: '/abnormal/系统异常/系统异常系统异常系统异常', index: 'systemErr' },
                    { name: '网络异常', url: '/abnormal/网络异常/网络异常网络异常网络异常', index: 'networkErr' },
                    { name: '权限控制', url: '/abnormal/权限控制/权限控制权限控制权限控制', index: 'rightControl' },
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