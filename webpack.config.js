// 基于node环境 遵循commonJS
const { Configuration } = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index');
// const { FriendlyErrorsWebpackPlugin } = require("friendly-errors-webpack-plugin")

/**
 * 注解形式配置代码提示
 * @type { Configuration }
 */
const config = {
    // 模式 
    // development 不压缩，
    // production 压缩
    mode: "development",
    // 配置插件规则
    module: {
        rules: [
            // 解析vue
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            // 解析less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 解析css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 解析ts
            {
                test: /\.ts$/,  //解析ts
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                    appendTsSuffixTo: [/\.vue$/]
                },
            },
        ]
    },
    // 入口
    entry: "./src/main.ts",
    // 出口
    // 出口文件名\文件位置\是否清空dist
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        // 起别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        // 补全后缀
        extensions: ['.vue', '.ts', '.js']
    },
    // 去掉无用的提示
    stats: "errors-only",
    devServer: {
        // 端口配置
        port: 9001,
        // 指定地址
        // host:
        // 热更新
        hot: true,
        // 是否打开浏览器
        open: true,
        // 代理
        proxy: {}
    },
    // 插件
    plugins: [
        // 指定模板位置
        new htmlWebpackPlugin({
            template: "./public/index.html"
        }),
        // vue解析插件
        new VueLoaderPlugin(),
        // 控制台美化插件
        // new FriendlyErrorsWebpackPlugin({
        //     compilationSuccessInfo: {
        //         messages: ['Your application is running here http://localhost:8080']
        //     }
        // }),
    ],
    // CDN引入vue
    externals: {
        vue: 'Vue'
    }
}

module.exports = config