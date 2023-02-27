const path = require('path')

module.exports = [
    {
        entry: {
            client: './client/index.tsx',
            server: './server/index.ts',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            fallback: {
                    "fs": false,
                    "tls": false,
                    "net": false,
                    "path": false,
                    "zlib": false,
                    "http": false,
                    "https": false,
                    "stream": false,
                    "crypto": false,
                    "crypto-browserify": require.resolve('crypto-browserify'),
            }
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 9000,
        },
    },
]
