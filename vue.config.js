const {merge} = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  parallel: false,
  //配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
                // style: name => `${name}/style/less`
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  }
};