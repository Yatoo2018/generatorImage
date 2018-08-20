import * as G from './image-generator.js'


window.onload = function() {

  let g = new G.ImageGenerator({topBannerHeight: 100, bottomBannerHeight: 100, wrap: 'body'})
  let stageDom = document.querySelector('#stage')
  let stageHeight = stageDom.getBoundingClientRect().height
  let stageWidth = stageDom.getBoundingClientRect().width
  g.updateCanvasSize({width: stageWidth, height: stageHeight})
  window.g = g

}


