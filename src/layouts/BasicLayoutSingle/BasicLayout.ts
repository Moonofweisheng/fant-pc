import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class BasicLayout extends Vue {

    // 生成菜单
    get menus() {
        return [
            {
                name: '列表页', icon: 'iconfont el-icon-location', index: 'list', hasSecMenu: true, children: [
                    { name: '基础列表', url: '/basicList', index: 'basicList' }
                ]
            },
            {
                name: '表单页', icon: 'iconfont el-icon-location', index: 'form', hasSecMenu: true, children: [
                    { name: '基础表单', url: '/basicForm', index: 'basicForm' }
                ]
            },
            {
                name: '详情页', icon: 'iconfont el-icon-location', index: 'detail', hasSecMenu: true, children: [
                    { name: '基础详情', url: '/basicDetail', index: 'basicDetail' }
                ]
            }
        ]
    }

    // 获得聚焦菜单
    get activeMenu() {
        console.log(this.$route.name);
        return this.$route.name
    }

    handleOpen(key: string, keyPath: string) {
        console.log(key, keyPath);
    }

    handleClose(key: string, keyPath: string) {
        console.log(key, keyPath);
    }
}