import { Component, Vue } from 'vue-property-decorator'
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import DetailView from "@/components/detail-view/DetailView.vue";
import ListView from "@/components/list-view/ListView.vue";
import DetailCard from "@/components/detail-card/DetailCard.vue";

@Component({
    components: { PageWrapper, DetailView, DetailCard, ListView }
})
export default class BasicEdit extends Vue {
    optionList = [{
        uuid: '232423543645756',
        // 联系人
        name: '张三',
        // 联系人电话
        mobile: '11554546564',
        // 是否设为默认
        isDefault: true
    }, {
        uuid: '23242354362226',
        // 联系人
        name: '李四',
        // 联系人电话
        mobile: '155666555555',
        // 是否设为默认
        isDefault: false
    }, {
        uuid: '22445423543645756',
        // 联系人
        name: '张三',
        // 联系人电话
        mobile: '120564665465',
        // 是否设为默认
        isDefault: false
    }]

    rules = {
        customer: [{ required: true, message: '请输入查询或选择下单客户', trigger: 'change' }],
        consignee: [{ required: true, message: '请先去客户列表维护客户的收货人信息', trigger: 'change' }],
        address: [{ required: true, message: '请先去客户列表维护客户的收货地址', trigger: 'change' }],
        remark: [{ required: false, message: '请输入备注信息', trigger: 'change' }]
    } // 客户信息表单验证

    /**
     * 后退
     */
    doBack() {
        this.$router.go(-1)
    }
}