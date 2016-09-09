// Webpack configuration file
// Webpack can be used to run transformations for the code

// This file is used to define the transformations
// Here we define the starting point of the app in `entry` section

// define a `module` property to the object, and then define a property called
// `loaders` for the `module`
// We can define the `loaders` which will define the transformations (eg:
// CoffeeScript to JavaScript)

// Each loader comprises of three things:
// 1.) which file type to run the specific transformation on
// 2.) which dirs to be included or excluded
// 3.) specific loader we want to run

// We also need to have a section for the `output`
// `filename` and `path` need to be provided


// Webpack plugin lets us dynamically put the path of the generated script,
// whenever webpack is run
// `template` provides the HTML template which is modified
// `filename` provides the name of the output file
// `inject`: tells where the injected script tag is going to be put (in this
// case - body)
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    output: {
        filename: 'index_bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [HtmlWebpackPluginConfig]
}
