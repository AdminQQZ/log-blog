const { defineConfig } = require('@vue/cli-service');

const { npm_package_name: packageName } = process.env;

if (packageName) {
    process.title = packageName;
}

module.exports = defineConfig({

    assetsDir: 'static',
    publicPath: './',
    outputDir: 'hqdist',

    productionSourceMap: false,
    transpileDependencies: false,

    devServer: {
        host: '0.0.0.0',
        port: 9000,
    },

});
