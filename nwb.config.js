module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    config(config) {
      config.entry = {
        demo: ['./demo/src/index.tsx'],
      }
      config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
      config.module.rules.push({
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      })

      return config
    },
  },
}
