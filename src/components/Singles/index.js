
function changeStr(str) {
  // 首字母大写
  return str.charAt(0).toUpperCase() + str.slice(1)
}
// 找到上一级common目录下的.vue结尾的所有文件
const requireComponent = require.context('../Singles', false, /\.vue$/)
const components = [requireComponent]
// ["./child1.vue", "./child2.vue"]
const install = (Vue) => {
  components.map(component => {
    component.keys().forEach((fileName) => {
      const config = component(fileName)
      const componentName = changeStr(
        fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
      )
      // console.log(componentName); //Child1   Child2
      Vue.component(componentName, config.default || config)
    })
  })
}
export default {
  install
}
