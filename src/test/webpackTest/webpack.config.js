// const ModuleGraphPlugin = require('module-graph-webpack-plugin');
 
module.exports = {
    mode:"development",
    entry: "./src/index.js",
    output: { filename:'output.js'},
    module: {
        
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    plugins: [
        // new ModuleGraphPlugin({
        //     filename: 'module-graph.graphml',
        //     use_groups: true
        // })
    ]}