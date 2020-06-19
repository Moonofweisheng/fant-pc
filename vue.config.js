module.exports = {
    publicPath: "./",
    lintOnSave: false,

    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/var.scss";`
            }
        }
    },
    runtimeCompiler: true,
    productionSourceMap: true
};