import { Component, Vue } from 'vue-property-decorator'
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import DetailView from "@/components/detail-view/DetailView.vue";
import ListView from "@/components/list-view/ListView.vue";
import DetailCard from "@/components/detail-card/DetailCard.vue";
import AccountApi from '@/http/account/AccountApi';

@Component({
    components: { PageWrapper, DetailView, DetailCard, ListView }
})
export default class BasicDetail extends Vue {
    mounted() {
        AccountApi.disable().then((resp) => {
            console.log(resp);
        }).catch((error) => {
            console.log(222);
        })
    }
}