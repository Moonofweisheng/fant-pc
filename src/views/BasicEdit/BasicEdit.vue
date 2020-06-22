<template>
    <page-wrapper>
        <!-- 编辑页眉 开始 -->
        <template slot="header">
            <!-- 页面标题或自定义内容（若使用标题，则需用span包裹） -->
            <span>基础编辑</span>
            <!-- 页眉标题 结束 -->
            <!-- 页眉按钮组（按钮为一个时，可以不用div包裹） 开始 -->
            <div>
                <el-button type="primary" size="medium">提交</el-button>
                <el-button type="primary" size="medium" @click="doBack">返回</el-button>
            </div>
            <!-- 页眉按钮组 结束 -->
        </template>
        <!-- 编辑页眉 结束 -->

        <!-- 编辑主体 开始 -->
        <template slot="body">
            <!-- 详情视图 开始（可以作为详情与编辑的容器） -->
            <detail-view>
                <!-- 编辑卡片 参数有showTag,title,type 具体用法可参照本页面及组件内注释 -->
                <!-- 不同type对应不同颜色，可以作为编辑页面状态的容器 -->
                <detail-card title="基础信息" :showTag="true">
                    <template slot="right">
                        <el-form :rules="rules" :inline-message="true" ref="customerForm" label-width="120px">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="下单客户" prop="customer">
                                        <el-select ref="customer" filterable clearable value-key="uuid" placeholder="请下拉选择或输入查询">
                                            <el-option v-for="item in optionList" :key="item.uuid" :value="item" :label="item.name+'['+item.code+']'">
                                                {{ item.name }}[{{ item.mobile }}]
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="收货人信息" prop="consignee">
                                        <el-select ref="consignee" clearable value-key="uuid" placeholder="请点击选择">
                                            <el-option v-for="item in optionList" :key="item.uuid" :value="item" :label="item.name+item.mobile">
                                                {{ item.name }}{{ item.mobile }}
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="收货地址" prop="address">
                                        <el-select ref="address" clearable value-key="uuid" placeholder="请点击选择">
                                            <el-option v-for="item in optionList" :key="item.uuid" :value="item" :label="item.name+item.mobile">
                                                {{ item.name }}{{ item.mobile }}
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="支付方式">
                                        <div>资金账户</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="配送方式">
                                        <div>送货上门</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="备注信息" prop="remark">
                                        <el-input ref="remark" type="textarea" :rows="4" maxlength="50"></el-input>
                                        <div class="order-remark-limit">
                                            <!-- <div v-if="customerForm.remark">{{ customerForm.remark.length }}/50</div>
                                            <div v-else>0/50</div> -->
                                        </div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </template>
                </detail-card>
                <detail-card title="商品信息" :showTag="true">
                    <template slot="right">
                        <el-form :rules="rules" :inline-message="true" ref="customerForm" label-width="120px">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="下单客户" prop="customer">
                                        <el-select ref="customer" filterable clearable value-key="uuid" placeholder="请下拉选择或输入查询">
                                            <el-option v-for="item in optionList" :key="item.uuid" :value="item" :label="item.name+item.mobile">
                                                {{ item.name }}{{ item.mobile }}
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="收货人信息" prop="consignee">
                                        <el-select ref="consignee" clearable value-key="uuid" placeholder="请点击选择">
                                            <el-option v-for="item in optionList" :key="item.uuid" :value="item" :label="item.name+item.mobile">
                                                {{ item.name }}{{ item.mobile }}
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="收货地址" prop="address">
                                        <el-select ref="address" clearable value-key="uuid" placeholder="请点击选择">
                                            <el-option v-for="item in optionList" :key="item.uuid" :value="item" :label="item.name+item.mobile">
                                                {{ item.name }}{{ item.mobile }}
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="支付方式">
                                        <div>资金账户</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="配送方式">
                                        <div>送货上门</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="备注信息" prop="remark">
                                        <el-input ref="remark" type="textarea" :rows="4" maxlength="50"></el-input>
                                        <div class="order-remark-limit">
                                            <div>0/50</div>
                                        </div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </template>

                </detail-card>
            </detail-view>
            <!-- 详情视图 结束 -->
        </template>
        <!-- 编辑主体 结束 -->
    </page-wrapper>
</template>

<script lang='ts' src='./BasicEdit.ts'></script>

<style lang="scss" scoped>
</style>
