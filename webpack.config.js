const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),  // Polyfill for crypto
      buffer: require.resolve('buffer/'),            // Polyfill for buffer
      stream: require.resolve('stream-browserify'),  // Polyfill for stream
      util: require.resolve('util/'),                // Polyfill for util
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // For TypeScript files
        use: 'ts-loader', // or 'babel-loader' if using Babel
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
    }),
],
};
