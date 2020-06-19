<template>
    <div class="simple-layout">
        <header class="header">
        </header>
        <main class="main">
            <slot name="main"></slot>
        </main>
    </div>
</template>
<script lang='ts' src="./SimpleLayout.ts"></script>

<style lang="scss" scoped>
.simple-layout {
    display: flex;
    width: 100%;
    min-height: 100%;
    .header {
        width: 100%;
        height: 64px;
        background: #ffffff;
    }
}
</style>
