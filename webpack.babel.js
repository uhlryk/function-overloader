import path from "path";
import ExternalsPlugin from "webpack2-externals-plugin";

export default {
    entry: ["./src/index.js"],
    output: {
        libraryTarget: "umd",
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "es2016", "es2017", "stage-0"]
                    }
                }
            }
        ]
    },
    devtool: "sourcemap",
    plugins: [
        new ExternalsPlugin({
            type: "commonjs",
            include: __dirname + "/node_modules"
        })
    ]
};
