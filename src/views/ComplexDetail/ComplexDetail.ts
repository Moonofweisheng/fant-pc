import { Component, Vue } from 'vue-property-decorator'
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";

@Component({
    components: { PageWrapper }
})
export default class ComplexDetail extends Vue {

    activeIndex = "1"

    // 切换菜单项
    handleSelect() {}

    // 审核
    doAudit() {}
    // 复制
    doCopy() {}
    // 导出
    doExport() {}
}