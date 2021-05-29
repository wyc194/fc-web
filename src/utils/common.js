/**
 * 复制指定内容到剪切板
 * @param content
 */
export const copy = (content) => {
  const tempInput = document.createElement('input')
  tempInput.value = content
  document.body.appendChild(tempInput)
  tempInput.select()
  const successFlag = document.execCommand('copy')
  if (!successFlag) {
    throw new Error('复制失败!')
  }
}

/**
 * 获取window访问基础路径
 * @returns {string | * | parser.Node[]}
 */
export const baseUrl = () => window.location.href.split('/#/')[0] + '/#'

/**
 * SVG节点转换成图像
 * @param node
 * @param name
 * @param width
 * @param height
 * @param type
 */
export const covertSVG2Image = (node, name, width, height, type = 'png') => {
  const serializer = new XMLSerializer()
  const source = '<?xml version="1.0" standalone="no"?>\r\n' + serializer.serializeToString(node)
  const image = new Image()
  image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source)
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  context.fillStyle = '#fff'
  context.fillRect(0, 0, 10000, 10000)
  image.onload = () => {
    context.drawImage(image, 0, 0)
    const a = document.createElement('a')
    a.download = `${name}.${type}`
    a.href = canvas.toDataURL(`image/${type}`)
    a.click()
  }
}
