<template>
  <div id="app">
    <h1>Hello World</h1>
    <!-- 根路由出口 -->
    <router-view />
    <p class="text">hello World</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import request from '@/utils/request'

export default Vue.extend({
  name: 'App'
})
</script>

<style lang="scss" scoped>
// @import "~@/styles/variables.scss";

.text {
  color: $success-color;
}
</style>
