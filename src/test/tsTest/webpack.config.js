const path =require('path');

module.exports = {
  mode:'development',
  entry: './src/index.ts',
  devtool:'cheap-source-map',
  output:{
    filename:'[id].[hash].js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.ts?$/,
        use:'ts-loader',
        exclude:/node_modules/
      }
    ]
  },
  resolve: {
    extensions:['.tsx','.ts','.js']
  }
}
