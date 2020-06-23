<template>
    <page-wrapper>
        <!-- 表单页眉 开始 -->
        <template slot="header">
            <!-- 页面标题或自定义内容（若使用标题，则需用span包裹） -->
            <span>分步表单</span>
            <!-- 页眉标题 结束 -->
        </template>
        <!-- 表单页眉 结束 -->

        <!-- 表单主体 开始 -->
        <template slot="body">
            <!-- 详情视图 开始（可以作为详情与表单的容器） -->
            <detail-view>
                <el-steps :active="active" finish-status="success">
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3"></el-step>
                </el-steps>
            </detail-view>
            <!-- 详情视图 结束 -->
        </template>
        <!-- 表单主体 结束 -->
    </page-wrapper>
</template>

<script lang='ts' src='./StepForm.ts'></script>
<style lang="scss" scoped>
</style>
