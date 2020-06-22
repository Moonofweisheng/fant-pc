import { Component, Vue } from 'vue-property-decorator'
import BasicLayout from "@/layouts/SimpleLayoutSingle/SimpleLayout.vue";

@Component({
    components: { BasicLayout }
})
export default class Index extends Vue {
    /**
     * 登出事件
     */
    doLogout() {}

}