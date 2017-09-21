const path = require('path');
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonChunksPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

const del = require('del');

require('dotenv').config();

del.sync("dist/**");

module.exports = () => {
    const isProd = process.env.ENV == 'production';
    console.log(`ENV: ${process.env.ENV}`);


    const config = {
        resolve: { extensions: ['.ts', '.js'] },
        entry: {
            app: './src/main.ts',
            vendor: './src/vendor.ts',
            polyfills: './src/polyfills.ts'
        },
        output: {
            filename: 'bundles/[name].[hash].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                { test: /\.ts$/, use: isProd ? '@ngtools/webpack' : ['awesome-typescript-loader?slient=true', 'angular2-template-loader'] },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
                { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
                { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]' }                
            ]
        },
        plugins: [
            new ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),             
            new HtmlWebpackPlugin({
                filename: __dirname + '/dist/index.html',
                template: __dirname + '/src/index.html'
            }),

        ].concat(!isProd ? [
            new ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)@angular/,
                path.join(__dirname, 'src'), // location of your src
                {
                    // your Angular Async Route paths relative to this root directory
                }
            )]:
            [
                new CommonChunksPlugin({
                    names: ['app', 'vendor', 'polyfills']
                }),                
                new UglifyJsPlugin(),
                new AotPlugin({
                    tsConfigPath: './tsconfig.json',
                    entryModule: path.join(__dirname, 'src/app/app.module#AppModule')
                })
            ])
    };

    return config;
};