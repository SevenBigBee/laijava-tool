const { defineConfig } = require("@vue/cli-service");
const PreRenderSPAPlugin = require("prerender-spa-plugin-next");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const CompressionPlugin = require("compression-webpack-plugin");
// 站点地图
const paths = [
  {
    path: "/",
    lastmod: "2021-12-20 18:00:00",
  },
  {
    path: "/json/jsonEditor",
    lastmod: "2022-12-20 18:00:00",
  },
];

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/tools/",
  configureWebpack: {
    plugins: [
      new PreRenderSPAPlugin({
        routes: ["/", "/json/jsonEditor"],
      }),
      new SitemapPlugin({ base: "https://laijava.com/tools", paths }),
      new CompressionPlugin({
        algorithm: "gzip", // 使用gzip压缩
        test: /\.js$|\.html$|\.css$/, // 匹配文件名
        // filename: "[path].gz[query]", // 压缩后的文件名(保持原文件名，后缀加.gz)
        minRatio: 1, // 压缩率小于1才会压缩
        threshold: 4096, // 对超过4k的数据压缩
        // deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
      }), //maxChunks：使用大于或等于 1 的值，来限制 chunk 的最大数量。使用 1 防止添加任何其他额外的 chunk，这是因为entry/main chunk 也会包含在计数之中。
    ],

    resolve: {
      fallback: {
        fs: false,
      },
    },
  },
});
