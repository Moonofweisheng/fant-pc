import { Component, Vue, Watch } from 'vue-property-decorator'
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";

@Component({
    components: { PageWrapper }
})
export default class BasicDetail extends Vue {
    // 监听路由变化，hintTitle、hintDescribe动态传参接收
    @Watch('$route')
    routechange() {
        // 提示图案
        this.judgeTitle()
        // 提示标题
        this.hintTitle = this.$route.params.hintTitle
        // 提示内容
        this.hintDescribe = this.$route.params.hintDescribe
    }

    // 提示图片
    imgUrl = require('@/assets/img/common/img_blank.png')
    // 提示标题
    hintTitle:string = ''
    // 提示内容
    hintDescribe:string = ''

    // 刷新当前页时，hintTitle、hintDescribe值为当前url指定值
    mounted() { 
        // 提示图案
        this.judgeTitle()
        // 提示标题
        this.hintTitle = this.$route.params.hintTitle
        // 提示内容
        this.hintDescribe = this.$route.params.hintDescribe
    }

    // 判断异常页类型，显示不同提示图案
    judgeTitle(){
        switch (this.$route.params.hintTitle) {
            case '暂无内容':
                this.imgUrl = require('@/assets/img/common/img_blank.png');
                break;
            case '暂无任务':
                this.imgUrl = require('@/assets/img/common/img_notask.png');
                 break;
            case '暂无搜索结果':
                this.imgUrl = require('@/assets/img/common/img_noresult.png');
                 break;
            case '系统异常':
                this.imgUrl = require('@/assets/img/common/img_systemmistake.png');
                 break;
            case '网络异常':
                this.imgUrl = require('@/assets/img/common/img_networkmistake.png');
                 break;
            case '权限控制':
                this.imgUrl = require('@/assets/img/common/img_permission.png');
                 break;
        }
    }
    // 修改
    doEdit() {}
    // 返回
    doBack() {}
    // 主要按钮
    mainBtn() {}
    // 默认按钮
    normalBtn() {}
}