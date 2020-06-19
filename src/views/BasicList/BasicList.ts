import { Component, Vue } from 'vue-property-decorator'
import BasicLayout from "@/layouts/BasicLayoutSingle/BasicLayout.vue";
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import QueryCondition from "@/components/query-condition/QueryCondition.vue";
import ListView from "@/components/list-view/ListView.vue";

@Component({
    components: {
        BasicLayout, PageWrapper, QueryCondition, ListView
    }
})
export default class BasicList extends Vue {
    
}