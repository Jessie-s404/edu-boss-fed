<template>
  <div id="app">
    <h1>Hello World</h1>
    <p>{{ a }}</p>
    <button @click="test">测试</button>
    <!-- 根路由出口 -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  a = 1
  b = '2'
  c = {
    a: 1,
    b: '2'
  }

  test () {
    console.log(this.a)
  }

  created () {
    console.log('app created')
  }
}
</script>

// 1.编辑器给的类型提示
// 2.TypeScript 编译期间的类型验证
// export default {
//   data () {
//     return {
//       a: 1,
//       b: '2',
//       c: [],
//       d: {
//         a: 1,
//         b: '2'
//       }
//     }
//   },

//   methods: {
//     test() {
//       this.a.abc()
//     }
//   }
// }

<style lang="scss" scoped></style>
