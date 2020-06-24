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
                <div class="example-steps">
                    <el-steps :space="300" :active="active" finish-status="success" align-center>
                        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"> </el-step>
                        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
                    </el-steps>
                </div>
                <step1></step1>
                <!-- <el-form :model="form" :rules="rules" ref="basicForm" label-width="120px" class="example-form">
                    <el-form-item label="商品名称" prop="code">
                        <span class="tip">- 系统自动生成，可修改，最多不超过10个字符</span>
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    <el-form-item label="商品副标题" prop="name">
                        <span class="tip">撒打瞌睡打款收到师傅的</span>
                        <el-input ref="name" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品编码" prop="code">
                        <span class="tip">- 系统自动生成，可修改，最多不超过10个字符</span>
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    <el-form-item label="商品ID" prop="name">
                        <span class="tip">撒打瞌睡打款收到师傅的</span>
                        <el-input ref="name" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="门店类型" prop="type">
                        <el-select v-model="form.type" ref="type" filterable clearable value-key="uuid" placeholder="请下拉选择或输入查询">
                            <el-option v-for="item in optionList" :key="item.uuid" :value="`${item.name}[${item.mobile}]`" :label="`${item.name}[${item.mobile}]`">
                                {{ item.name }}[{{ item.mobile }}]
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品ID" prop="name">
                        <span class="tip">撒打瞌睡打款收到师傅的</span>
                        <el-input ref="name" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-button style="margin-top: 12px;margin-left:120px" type="primary" @click="next">下一步</el-button>
                    <el-button style="margin-left:16px" @click="next">上一步</el-button>
                </el-form> -->
            </detail-view>
            <!-- 详情视图 结束 -->
        </template>
        <!-- 表单主体 结束 -->
    </page-wrapper>
</template>

<script lang='ts' src='./StepForm.ts'></script>
<style lang="scss" scoped>
.example-steps {
    position: relative;
    width: 1040px;
    margin: 0 auto 20px;

    text-align: center;
}
.example-form {
    position: relative;
    width: 560px;
    margin: 0 auto;
    /deep/.el-input {
        max-width: 416px;
    }
    /deep/.el-select {
        max-width: 416px;
    }
}
</style>
