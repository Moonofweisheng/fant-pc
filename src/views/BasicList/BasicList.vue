<template>
    <PageWrapper>
        <!-- 列表页眉 开始 -->
        <template slot="header">
            <!-- 页面标题或自定义内容（若使用标题，则需用span包裹） -->
            <el-tabs v-model="sysState" @tab-click="doSearch">
                <el-tab-pane label="全部订单" name="all"></el-tab-pane>
                <el-tab-pane label="待付款" name="CONFIRMED"></el-tab-pane>
                <el-tab-pane label="待审核" name="PAID"></el-tab-pane>
                <el-tab-pane label="待发货" name="DELIVERING"></el-tab-pane>
                <el-tab-pane label="待收货" name="DELIVERED"></el-tab-pane>
                <el-tab-pane label="已完成" name="FINISHED"></el-tab-pane>
                <el-tab-pane label="已取消" name="CANCELED"></el-tab-pane>
            </el-tabs>
            <!-- 页眉标题 结束 -->

            <!-- 页眉按钮组（按钮为一个时，可以不用div包裹） 开始 -->
            <div>
                <el-button type="primary" size="medium">代客下单</el-button>
                <el-button type="primary" size="medium">代客下单</el-button>
            </div>
            <!-- 页眉按钮组 结束 -->

        </template>
        <!-- 列表页眉 结束 -->

        <!-- 列表查询条件 开始 -->
        <template slot="query">
            <query-condition :opened="true" :toggle="false" @search="doSearch" @reset="doReset">
                <template slot="opened">
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="订单号">
                                <el-input ref="flowNo" v-model="flowNo" clearable placeholder="等于"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="客户信息">
                                <el-input ref="memberKeyword" v-model="memberKeyword" clearable placeholder="客户名称/客户代码">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="下单日期">
                                <el-date-picker type="date" ref="created" v-model="created" value-format="yyyy-MM-dd"
                                    placeholder="选择日期范围"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </template>
            </query-condition>
        </template>
        <!-- 列表查询条件 结束 -->

        <!-- 列表主体表格 开始 -->
        <template slot="body">
            <list-view ref="orderDataList" :selectable="false" :data="orderDataList" :total="orderTotal"
                @load="doListLoad">
                <el-table-column prop="flowNo" label="订单号">
                    <template slot-scope="scope">{{ scope.row.flowNo|empty }}</template>
                </el-table-column>
                <el-table-column prop="sysState" label="订单状态" align="center">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.sysState === OrderState.FINISHED" type="success" size="mini">
                            {{ OrderState.string(scope.row.sysState) }}</el-tag>
                        <el-tag v-else-if="scope.row.sysState === OrderState.CANCELED" type="info" size="mini">
                            {{ OrderState.string(scope.row.sysState) }}</el-tag>
                        <el-tag v-else-if="scope.row.sysState === OrderState.PAID" size="mini">
                            {{ OrderState.string(scope.row.sysState) }}</el-tag>
                        <el-tag v-else type="warning" size="mini">{{ OrderState.string(scope.row.sysState) }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="type" label="订单类型">
                    <template slot-scope="scope">{{ OrderType.string(scope.row.type) }}</template>
                </el-table-column>
                <el-table-column prop="appId" label="下单渠道">
                    <template slot-scope="scope">{{ OrderAppId.string(scope.row.appId) }}</template>
                </el-table-column>
                <el-table-column prop="memberInfo" label="客户信息">
                    <template slot-scope="scope">
                        <div :title="scope.row.memberInfo.memberName + '[' + scope.row.memberInfo.memberId + ']'">
                            {{ scope.row.memberInfo.memberName|empty }}[{{ scope.row.memberInfo.memberId|empty }}]
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="consignee" label="收货人信息">
                    <template slot-scope="scope">
                        <div :title="scope.row.consignee.name + ' ' +scope.row.consignee.mobile">
                            {{ scope.row.consignee.name|empty }} {{ scope.row.consignee.mobile|empty }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="realAmount" label="下单金额（元）" align="right">
                    <template slot-scope="scope">{{ scope.row.realAmount|fmt }}</template>
                </el-table-column>
                <el-table-column prop="created" label="下单时间">
                    <template slot-scope="scope">
                        <div :title="scope.row.created">{{ scope.row.created|fullDate|empty }}</div>
                    </template>
                </el-table-column>
                <el-table-column label="操作" minWidth="150px">
                    <template slot-scope="scope">
                        <el-button type="text" @click="doOrderDtl(scope.row)">查看</el-button>
                        <el-button
                            v-if="scope.row.appId === OrderAppId.wholesaleweb && scope.row.sysState === OrderState.CONFIRMED"
                            type="text" @click="doPay(scope.row)">
                            付款</el-button>
                        <el-button v-if="scope.row.sysState === OrderState.PAID" type="text"
                            @click="doAgree(scope.row)">同意申请</el-button>
                        <el-button v-if="scope.row.sysState === OrderState.PAID" type="text"
                            @click="doRefuse(scope.row)">拒绝申请</el-button>
                        <el-button v-if="scope.row.sysState === OrderState.DELIVERING" type="text"
                            @click="doTerminate(scope.row)">终止订单</el-button>
                        <el-button v-if="scope.row.sysState === OrderState.DELIVERED" type="text"
                            @click="doFinish(scope.row)">确认完成</el-button>
                    </template>
                </el-table-column>
            </list-view>
        </template>
        <!-- 列表主体表格 结束 -->
    </PageWrapper>
</template>

<script lang='ts' src='./BasicList.ts'></script>
<style lang="scss" scoped>
</style>
