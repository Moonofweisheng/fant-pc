import { Component, Vue } from 'vue-property-decorator'
import BasicLayout from "@/layouts/BasicLayoutSimple/BasicLayout.vue";
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import DetailView from "@/components/detail-view/DetailView.vue";
import ListView from "@/components/list-view/ListView.vue";
import DetailCard from "@/components/detail-card/DetailCard.vue";

@Component({
    components: { BasicLayout, PageWrapper, DetailView, DetailCard, ListView }
})
export default class BasicDetail extends Vue {
}