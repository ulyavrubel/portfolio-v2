const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
    {
        name: 'aboutme',
        title: 'About Me'
    },
    {
        name: 'api',
        title: 'API and Microservices'
    },
    {
        name: 'contact',
        title: 'Contact'
    },
    {
        name: 'musicdb',
        title: 'MisicDB'
    },
    {
        name: 'portfolio',
        title: 'Portfolio'
    },
    {
        name: 'recipe',
        title: 'Recipe Generator'
    },
]

module.exports = {
    entry: {
        index: './src/index.js',
        ...Object.fromEntries(pages.map(({ name }) => [name, `./src/js/${name}`]))
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        compress: true
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ulyana Sichkar',
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index'],
            favicon: './src/img/icon.png'
        }),
        ...pages.map(({ name, title }) => new HtmlWebpackPlugin({
            title,
            template: `./src/pages/${name}.html`,
            filename: `pages/${name}.html`,
            chunks: [name],
            favicon: './src/img/icon.png'
        }))
        ,
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: {
                        list: [
                            '...',
                            {
                                tag: 'a',
                                attribute: 'href',
                                type: 'src'
                            }
                        ],
                        urlFilter: (attribute, value) => {
                            if (attribute == 'href') {
                                if (/\.pdf$/.test(value)) {
                                    return true;
                                }
                                return false;
                            }

                            return true;
                        }
                    }
                }
            },
            {
                test: /\.(scss|sass)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
};

