import { Vue, Prop, Component } from 'vue-property-decorator'

@Component({
    name: 'QueryCondition'
})
export default class QueryCondition extends Vue {
    @Prop({ type: Boolean, default: false }) opened: boolean
    @Prop({ type: Boolean, default: true }) toggle: boolean // 允许折叠
    @Prop({ type: Boolean, default: true }) showButton: boolean // 是否显示查询重置按钮
    $refs: any

    /**
     * 键盘事件
     */
    bindFastCode(ev: KeyboardEvent) {
        if (ev.keyCode === 13) {
            // 如果是input，则回车触发查询
            const input = ev.target as any
            if (this.$refs.queryCondition.$el.contains(input) && input.type && input.type === 'text') {
                this.doSearch()
            }
        }
    }

    doSearch() {
        this.$emit('search', this.opened)
    }

    doReset() {
        this.$emit('reset')
    }

    doToggle() {
        this.opened = !this.opened
        this.$emit('toggle', this.opened)
    }
}
