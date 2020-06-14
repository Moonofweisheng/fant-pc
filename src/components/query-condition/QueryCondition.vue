<template>
    <el-form label-width="96px" ref="queryCondition" class="query-condition" @keydown.native="bindFastCode">
        <template v-if="!opened">
            <slot name="closed"></slot>
            <el-row class="closed-action-row" v-if="showButton">
                <el-col :span="8" class="closed-action">
                    <el-form-item>
                        <el-button size="small" type="primary" @click="doSearch">查询</el-button>
                        <el-button size="small" @click="doReset">重置</el-button>
                        <el-button type="text" size="small" v-if="toggle" @click="doToggle" trigger="ic-ic_xiangxia">展开</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="16">
                    <slot></slot>
                </el-col>
            </el-row>
        </template>
        <template v-else>
            <slot name="opened"></slot>
            <el-row class="opened-action-row" v-if="showButton">
                <div class="opened-action">
                    <el-button size="medium" type="primary" @click="doSearch">查询</el-button>
                    <el-button size="medium" @click="doReset">重置</el-button>
                    <el-button size="medium" type="text" v-if="toggle" @click="doToggle" trigger="ic-ic_xiangshang">收起</el-button>
                </div>
            </el-row>
        </template>
    </el-form>
</template>

<script lang="ts" src="./QueryCondition.ts"></script>

<style lang="scss" >
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
        .opened-action {
            box-sizing: border-box;
            padding-left: 96px;
        }
    }

    .el-select {
        width: 100%;
    }
}
</style>
