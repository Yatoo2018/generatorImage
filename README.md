# generatorImage
一个通过给定图片，生成拉伸中间部分适应任意元素高度的图片的JavaScript小工具

## 使用方法

### 如何引用

```js
import * as G from './image-generator.js'
```

## 使用

```
/**
 *
 * 实例化
 * 参数对象中的属性
 * 属性：topBannerHeight 原图上部不拉伸的高度值
 * 属性：bottomBannerHeight 原图底部不拉伸的高度值
 * 属性：wrap canvas将被包裹的位置
 */
let imageGenerator = new G.ImageGenerator(
  {topBannerHeight, bottomBannerHeight, wrap})

/**
 * 更新canvas的大小
 * 参数对象中的属性
 * 属性： width 添加背景图的元素的宽度
 * 属性： height 添加背景图的元素的高度
 */
imageGenerator.updateCanvasSize({width, height})


/**
 * 设置原始图片路径
 * 该方法会立即加载图片
 */
 imageGenerator.setImage(imgUrl)

 /**
  * 生成banner图
  */
  imageGenerator.getBannerImage().then(res => {
    console.log(res) // 获取到图片的dataurl
  })
```


详细用法可以参考[示例](./index.html)

## 运行示例

1. 直接打开index.html文件即可
2. 修改脚本后，重新编译
```shell
npm i
npm run dev // 脚本编译完成
```
