import { Component, Vue } from 'vue-property-decorator'
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";

@Component({
    components: { PageWrapper }
})
export default class ComplexDetail extends Vue {
    tableData: Array<object> = [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }]
    activeIndex = "1"

    // 切换菜单项
    handleSelect() { }

    // 审核
    doAudit() { }
    // 复制
    doCopy() { }
    // 导出
    doExport() { }
}