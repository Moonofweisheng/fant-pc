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
                name: '详情页', icon: 'iconfont el-icon-location', index: 'detail', hasSecMenu: true, children: [
                    { name: '基础详情', url: '/basicDetail', index: 'basicDetail' }
                ]
            }
        ]
    }
    handleOpen(key: string, keyPath: string) {
        console.log(key, keyPath);
    }

    handleClose(key: string, keyPath: string) {
        console.log(key, keyPath);
    }
}