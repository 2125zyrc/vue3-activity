const {merge} = require("webpack-merge");

const tsImportPluginFactory = require("ts-import-plugin");

const pxtorem = require('postcss-plugin-px2rem');

const px2remOpts ={
  rootValue: 37.5, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
  exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
  mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
  minPixelValue: 0 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
}


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
  },
  css: {
      loaderOptions: {
        postcss: {
          postcssOptions:{
            plugins: [
              pxtorem(px2remOpts)
            ]
          }
      }
    }
  }
};