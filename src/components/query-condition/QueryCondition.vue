<template>
    <el-form label-width="96px" ref="queryCondition" class="query-condition" @keydown.native="bindFastCode">
        <template>
            <el-row class="opened-action-row" v-if="showButton">
                <slot></slot>
                <el-col :span="6" style="text-align:center">
                    <el-button size="medium" type="primary" @click="doSearch">查询</el-button>
                    <el-button size="medium" @click="doReset">重置</el-button>
                </el-col>
            </el-row>
        </template>
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
