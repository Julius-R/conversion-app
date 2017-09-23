module.export = {
  entry: "./app/src/scripts/index.js",
  output: {
    path: ["./app/dist/scripts"],
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
