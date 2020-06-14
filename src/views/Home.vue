<template>
    <BasicLayout>
        <template slot="main">
            <router-view></router-view>
        </template>
    </BasicLayout>
</template>

<script>
// @ is an alias to /src
import BasicLayout from "@/layouts/BasicLayoutSimple/BasicLayout.vue";
export default {
    name: "Home",
    components: {
        BasicLayout
    },
    data() {
        return {
            activeName: "second"
        };
    }
};
</script>

<style lang="scss" scoped>
.home {
    height: 100%;
}
</style>
