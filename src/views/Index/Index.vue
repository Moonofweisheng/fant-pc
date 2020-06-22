<template>
    <!-- 此处为布局容器组件，由layouts目录引入，可以选择切换不同的布局 -->
    <basic-layout>
        <template slot="header">
            <div class="header-left">
                <img src="@/assets/logo.png" class="header-left-logo">
                <span>海鼎微信进件平台</span>
            </div>
            <el-dropdown class="header-right" trigger="click" @command="doLogout">
                <div class="user-name">
                    <img src="@/assets/img/common/ic_portrait@2x.png" class="user-name-icon">
                    <span>小星星</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>登出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </template>

        <!-- 容器主体 -->
        <template slot="main">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </template>
    </basic-layout>
</template>

<script lang="ts" src="./Index.ts"></script>

<style lang="scss" scoped>
.header-left {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: $--color-text-primary;
    .header-left-logo {
        height: 32px;
        margin-right: 10px;
    }
}
.header-right {
    .user-name {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: $--color-text-primary;
        .user-name-icon {
            height: 38px;
            margin-right: 10px;
        }
    }
}
</style>
