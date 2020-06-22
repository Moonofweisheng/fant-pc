<template>
    <div class="basic-layout">
        <div class="basic-layout-sider">
            <div class="logo">
                <img class="logo-img" src="@/assets/logo.png" alt="logo">
            </div>
            <el-menu :collapse="isCollapse" :unique-opened="false" :default-active="activeMenu" background-color="#242633" text-color="#79879E" active-text-color="#FFFFFF">
                <div v-for="(item,key) in menus" :key="key">
                    <router-link :to="item.url" v-if="item.children.length === 0">
                        <el-menu-item :index="item.index" ref="menuItem">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.name}}</span>
                        </el-menu-item>
                    </router-link>
                    <el-submenu :index="item.index" v-else>
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <router-link v-for="(submenu,key) in item.children" :key="key" :to="submenu.url">
                            <el-menu-item :index="submenu.index" ref="menuItem">
                                <span slot="title">{{submenu.name}}</span>
                            </el-menu-item>
                        </router-link>
                    </el-submenu>
                </div>
            </el-menu>
        </div>
        <div class="basic-layout-container">
            <header class="header">
                <slot name="header"></slot>
            </header>
            <main class="main">
                <slot name="main"></slot>
            </main>
        </div>
    </div>
</template>
<script lang='ts' src="./BasicLayout.ts"></script>

<style lang="scss" scoped>
.basic-layout {
    display: flex;
    width: 100%;
    min-height: 100%;
    .basic-layout-sider {
        width: 200px;
        min-height: 100vh;
        flex: 0 0 auto;
        background: $--color-text-primary;
        a {
            text-decoration: none !important;
        }
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 60px;
            .logo-img {
                width: 86px;
                height: auto;
            }
        }
        .el-menu-vertical-demo {
            width: 200px;
        }
        /deep/.el-menu {
            border: none;
        }
    }

    .basic-layout-container {
        flex: 1 1 auto;
        min-height: 100%;
        .header {
            width: 100%;
            height: 64px;
            box-sizing: border-box;
            padding: 0 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #ffffff;
        }
        .main {
            width: 100%;
            height: calc(100% - 64px);
            box-sizing: border-box;
            padding: 20px;
            background-color: #f0f2f6;
            overflow: auto;
        }
    }
}
</style>
