## 图片压缩webapck loader

用于weboack打包阶段的图片无损压缩

### 安装

```
npm install  @ep-fe-stu/image-compress-loader


yarn add  @ep-fe-stu/image-compress-loader

```
### 使用
  - 在webpack v5(Jupiter app-tools v4)使用方式
```
webpack: config => {
      const rules = config.module.rules[1].oneOf;
      rules.unshift({
        test: /\.(png|jpe?g)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: '@ep-fe-stu/test-webpack-loader',
            options: {
              pngCompress: {
                enable: true,
                optimizationLevel: 6,
              },
            },
          },
        ],
      });
 }
 ```
 
  -  webpack v4(Jupiter app-tools v3使用方式
```
webpack: config => {
      const rules = config.module.rules[1].oneOf;
      rules.unshift({
        test: /\.(png|jpe?g)$/i,
        use: [
          "file-loader",
          {
            loader: '@ep-fe-stu/test-webpack-loader',
            options: {
              pngCompress: {
                enable: true,
                optimizationLevel: 6,
              },
            },
          },
        ],
      });
 }
 ```
## loader配置校验
```
{
    "additionalProperties": false,
        "properties": {
            "pngCompress": {
                "additionalProperties": true,
                "type": "object"
        }
   },
   "type":"object"
}
```
