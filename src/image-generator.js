let Promise = require('es6-promise').Promise

/**
 * rectange 类
 *
 * @class Rectange
 */
class Rectange {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  log() {
    console.log(this.x, this.y, this.width, this.height)
  }
}

/**
 * banner图片生成工具
 *
 * @class ImageGenerator
 */
class ImageGenerator {
  /**
   * Creates an instance of ImageGenerator.
   * @param {Object} { topBannerHeight = 100, bottomBannerHeight = 300 }
   * @memberof ImageGenerator
   */
  constructor({ topBannerHeight = 100, bottomBannerHeight = 300, wrap = 'body' } = {}) {
    this.image = ''
    this.imageUrl = ''
    this.imagePromise = null
    this.wrap = wrap
    this.topBannerHeight = topBannerHeight
    this.bottomBannerHeight = bottomBannerHeight
    this.canvas = this._generatorCanvas()
    this.context = this._getContext()
  }
  /**
   * 生成canvas元素
   * private
   * @returns canvas标签对象
   * @memberof ImageGenerator
   */
  _generatorCanvas() {
    let canvas = document.createElement('canvas')
    document.querySelector(this.wrap).appendChild(canvas)
    return canvas
  }
  /**
   * 获取canvas元素的上下文对象
   * private
   * @returns canvas的上下文对象
   * @memberof ImageGenerator
   */
  _getContext() {
    return this.canvas.getContext('2d')
  }
  /**
   * 更新banner顶部高度
   * public
   * @param {Number} height
   * @memberof ImageGenerator
   */
  updateTopBannerHeight(height) {
    this.topBannerHeight = height
  }

  /**
   * 更新banner底部高度
   * public
   * @param {Number} height
   * @memberof ImageGenerator
   */
  updateBottomBannerHeight(height) {
    this.bottomBannerHeight = height
  }

  /**
   * 更新canvas大小
   * public
   * @param {Object} {width = 1920, height = 0}
   * @returns canvas element
   * @memberof ImageGenerator
   */
  updateCanvasSize({width = 1920, height = 0} = {}) {
    this.canvas.width = width
    this.canvas.height = height
    return this.canvas
  }
  /**
   * 设置图片地址, 并加载图片
   * public
   * @param {String} url
   * @returns Promise
   * @memberof ImageGenerator
   */
  setImage(url) {
    this.imagePromise = new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => {
        this.image = img
        this.imageUrl = url

        console.log('更新image', img, url)
        resolve(img)
      }
      img.onerror = err => {
        reject(err)
      }
      img.src = url
    })
    return this.imagePromise
  }
  /**
   * 生成Banner快照图片
   * public
   * @param {Object} { width = 1920 + 'px', height = 0}
   * @memberof ImageGenerator
   */
  getBannerImage() {
    return this.imagePromise.then(img => {
      this.image = img
      return this._drawImage()
    })
  }

  /**
   * 绘制banner图
   * private
   * @param {*} {width, height}
   * @memberof ImageGenerator
   */
  _drawImage() {
    let width = this.canvas.width
    let height = this.canvas.height
    let imgWidth = this.image.naturalWidth

    // 绘制Header
    let rectangeHeaderSource = new Rectange(0, 0, imgWidth, this.topBannerHeight)
    let rectangeHeaderTarget = new Rectange(0, 0, width, this.topBannerHeight)
    this._draw(this.image, rectangeHeaderSource, rectangeHeaderTarget)

    // ctx.drawImage(this.image, 0, 0, width, this.topBannerHeight, 0, 0, width, height)

    // 绘制Body
    let rectangeBodySource = new Rectange(0, this.topBannerHeight, imgWidth, this.image.naturalHeight - this.topBannerHeight - this.bottomBannerHeight)
    let rectangeBodyTarget = new Rectange(0, this.topBannerHeight, width, height - this.topBannerHeight - this.bottomBannerHeight)
    this._draw(this.image, rectangeBodySource, rectangeBodyTarget)

    // ctx.drawImage(this.image, 0, this.topBannerHeight, width, this.image.naturalHeight - this.topBannerHeight - this.bottomBannerHeight, 0, this.topBannerHeight, width, height - this.topBannerHeight - this.bottomBannerHeight)
    // 绘制Footer

    let rectangeFooterSource = new Rectange(0, this.image.naturalHeight - this.bottomBannerHeight, imgWidth, this.bottomBannerHeight)
    let rectangeFooterTarget = new Rectange(0, height - this.bottomBannerHeight, width, this.bottomBannerHeight)
    this._draw(this.image, rectangeFooterSource, rectangeFooterTarget)

    return this.canvas.toDataURL()
    // ctx.drawImage(this.image, 0, this.image.naturalHeight - this.bottomBannerHeight, width, this.bottomBannerHeight, 0, height - this.bottomBannerHeight, width, this.bottomBannerHeight)
  }
  /**
   * 绘制方法
   * private
   * @memberof ImageGenerator
   */
  _draw(image, source, target) {
    let ctx = this.context
    console.log('绘制数据 : 图片区域 ', source, ' \n绘制到canvas区域 ==> ', target)
    ctx.drawImage(image, source.x, source.y, source.width, source.height, target.x, target.y, target.width, target.height)
  }

}

export { ImageGenerator }
