const path =require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  target: "node",
  mode:'none',
  entry: './src/index.js',
  devtool: 'cheap-source-map',
  output:{
    filename: 'bundle.js',
    libraryExport: 'default',
    libraryTarget:'umd',
    path:path.resolve(__dirname,'dist')
  },
  
  optimization: {
    minimizer: true,
    minimizer: [
      new TerserPlugin({
        include:/\.js$/
      })
    ]
  },
  

}
