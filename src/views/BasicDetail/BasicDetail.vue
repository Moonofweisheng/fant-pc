<template>
    <PageWrapper>
        <!-- 详情页眉 开始 -->
        <template slot="header">
            <!-- 页面标题或自定义内容（若使用标题，则需用span包裹） -->
            <span>基础详情</span>
            <!-- 页眉标题 结束 -->
            <!-- 页眉按钮组（按钮为一个时，可以不用div包裹） 开始 -->
            <div>
                <el-button type="primary" size="medium">编辑</el-button>
                <el-button type="primary" size="medium">返回</el-button>
            </div>
            <!-- 页眉按钮组 结束 -->
        </template>
        <!-- 详情页眉 结束 -->

        <!-- 详情主体 开始 -->
        <template slot="body">
            <DetailView>
                <!-- 详情卡片 参数有showTag,title,type 具体用法可参照本页面及组件内注释 -->
                <DetailCard type="success">
                    <template slot="left">
                        啊书法大赛发
                    </template>
                    <template slot="right">
                        <el-form>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="下单客户：">
                                        撒旦萨达[ 撒倒萨倒萨十大]
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="收货人：">
                                        但是大师傅士大夫是大师傅士大夫是
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="下单客户：">
                                        撒旦萨达[ 撒倒萨倒萨十大]
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="收货人：">
                                        但是大师傅士大夫是大师傅士大夫是
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </template>
                </DetailCard>

                <DetailCard title="基础信息" :showTag="true">
                    <template slot="right">
                        <el-form>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="下单客户：">
                                        撒旦萨达[ 撒倒萨倒萨十大]
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="收货人：">
                                        但是大师傅士大夫是大师傅士大夫是
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="收货地址：">ds
                                        啊实打实大大阿萨打算大d's
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="订单类型：">
                                        撒大苏打啊啊啊啊啊啊啊啊啊啊啊
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="下单渠道：">
                                        反对哈哈哈哈哈哈哈哈哈哈哈
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="配送方式：">送货上门</el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="支付方式：">
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">
                                    <el-form-item label="备注信息：">撒啊啊啊啊啊啊啊啊啊啊啊啊啊</el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </template>
                </DetailCard>
                <DetailCard title="商品信息" :showTag="true">
                    <template slot="right">
                        <el-tabs v-model="sysState" @tab-click="doSearch">
                            <el-tab-pane label="全部订单" name="all"></el-tab-pane>
                            <el-tab-pane label="待付款" name="CONFIRMED"></el-tab-pane>
                            <el-tab-pane label="待审核" name="PAID"></el-tab-pane>
                            <el-tab-pane label="待发货" name="DELIVERING"></el-tab-pane>
                            <el-tab-pane label="待收货" name="DELIVERED"></el-tab-pane>
                            <el-tab-pane label="已完成" name="FINISHED"></el-tab-pane>
                            <el-tab-pane label="已取消" name="CANCELED"></el-tab-pane>
                        </el-tabs>
                        <list-view ref="lineDataList" :selectable="false" :data="lineDataList" :total="lineTotal"
                            @load="doOrderListLoad">
                            <el-table-column prop="gdName" label="商品信息">
                                <template slot-scope="scope">{{ scope.row.gdName|empty }}</template>
                            </el-table-column>
                            <el-table-column prop="barcode" label="商品条码">
                                <template slot-scope="scope">{{ scope.row.barcode|empty }}</template>
                            </el-table-column>
                            <el-table-column prop="qpc" label="规格">
                                <template slot-scope="scope">{{ scope.row.qpc|empty }}</template>
                            </el-table-column>
                            <el-table-column prop="unit" label="单位">
                                <template slot-scope="scope">{{ scope.row.unit|empty }}</template>
                            </el-table-column>
                            <el-table-column prop="price" label="订货价（元）" align="right">
                                <template slot-scope="scope">{{ scope.row.price|fmt|empty }}</template>
                            </el-table-column>
                            <el-table-column prop="qty" label="订货数量" align="right">
                                <template slot-scope="scope">{{ scope.row.qty|empty }}</template>
                            </el-table-column>
                            <el-table-column prop="amount" label="订货商品金额（元）" align="right">
                                <template slot-scope="scope">{{ scope.row.amount|fmt|empty }}</template>
                            </el-table-column>
                        </list-view>
                    </template>

                </DetailCard>
            </DetailView>
        </template>
        <!-- 详情主体表格 结束 -->
    </PageWrapper>
</template>

<script lang='ts' src='./BasicDetail.ts'></script>

<style lang="scss" scoped>
</style>
