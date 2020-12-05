import directive from './directives'

const importDirective = Vue => {
  /**
   * 拖拽指令 v-draggable="options"
   * options = {
   *  trigger: /这里传入作为拖拽触发器的CSS选择器/,
   *  body:    /这里传入需要移动容器的CSS选择器/,
   *  recover: /拖动结束之后是否恢复到原来的位置/
   * }
   *<div style="height:100px;width:100px;" v-draggable="{
        trigger: '.draggable-btn',
        body: '.draggable-btn'
      }" class="draggable-btn">
     <Button >这个按钮也是可以拖动的</Button>
  </div>
   */
  Vue.directive('draggable', directive.draggable)
}

export default importDirective
