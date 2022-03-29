const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const CSS_PATH = '/blogs/css'
const NET_PATH = '/blogs/net'
const PERFORM_PATH = '/blogs/perform'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
    createSideBarConfig('JS-深入数组', JAVASCRIPT_PATH + '/js-array'),
    createSideBarConfig('JS-其它API原理', JAVASCRIPT_PATH + '/js-api'),
    createSideBarConfig('JS-V8引擎原理', JAVASCRIPT_PATH + '/js-v8'),
  ],
  [CSS_PATH]: [createSideBarConfig('CSS 技巧', CSS_PATH)],
  [NET_PATH]: [],
  [PERFORM_PATH]: [createSideBarConfig('前端性能相关', PERFORM_PATH)],
}