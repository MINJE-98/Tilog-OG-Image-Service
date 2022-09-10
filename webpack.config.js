const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map', //크롬에서 디버깅 가능하도록 원본코드같이 bundle
  entry: './api/index.ts', //진입점
  resolve: {
    modules: [path.join(__dirname, './'), 'node_modules'], // 모듈 위치
    extensions: ['.ts', '.js'],
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      util: require.resolve('util/'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify'),
      url: require.resolve('url'),
      child_process: false,
      readline: false,
      constants: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
  output: {
    path: path.resolve(__dirname, './api/dist'), // bundle만들어질 장소
    filename: 'index.js', // bundle 될 파일 이름
  },
};
