import { Component, Vue } from 'vue-property-decorator'
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import DetailView from "@/components/detail-view/DetailView.vue";
import ListView from "@/components/list-view/ListView.vue";
import DetailCard from "@/components/detail-card/DetailCard.vue";

@Component({
    components: { PageWrapper, DetailView, DetailCard, ListView }
})
export default class StepForm extends Vue {
    active: number = 0 // 激活状态的步骤
}