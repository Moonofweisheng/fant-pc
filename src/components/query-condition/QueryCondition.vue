<template>
    <el-form label-width="96px" ref="queryCondition" class="query-condition" @keydown.native="bindFastCode">
        <el-row class="opened-action-row">
            <slot></slot>
            <template v-if="opened&&$slots.closed">
                <slot name="closed"></slot>
            </template>
            <el-col :span="8" v-if="showButton">
                <el-form-item>
                    <el-button size="medium" type="primary" @click="doSearch">查询</el-button>
                    <el-button size="medium" @click="doReset">重置</el-button>
                    <el-button size="medium" type="text" v-if="toggle&&opened" @click="doToggle"
                        icon="el-icon-arrow-up">收起
                    </el-button>
                    <el-button size="medium" type="text" v-if="toggle&&!opened" @click="doToggle"
                        icon="el-icon-arrow-down">展开
                    </el-button>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script lang="ts" src="./QueryCondition.ts"></script>

<style lang="scss" scoped>
.query-condition {
    padding: 0;

    .closed-action-row {
        display: flex;
        align-items: center;
        .closed-action {
            padding-left: 12px;
        }
    }

    .opened-action-row {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        /deep/.el-input {
            width: 100%;
        }
    }

    .el-select {
        width: 100%;
    }
}
</style>
