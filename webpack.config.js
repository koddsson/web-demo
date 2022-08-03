const path = require('path')
const swcConfig = require('./swc.config')

module.exports = {
  mode: 'development',
  entry: "./app/javascript/react/app.jsx",
  output: {
    path: path.resolve("./public/")
  },
  module: {
    rules: [
        {
        /**
         * All of our ts and tsx files need to be transpiled to javascript. We do this using SWC,
         * which will transpile them _without_ doing any type checking.
         */
        test: /\.jsx?$/,
        loader: 'swc-loader',
        options: swcConfig
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ]
  }
}
