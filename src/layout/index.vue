<template>
  <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutIndex'
})

</script>

<style lang="scss" scoped>
.el-container {
    min-height: 100vh;
    min-width: 980px;
}
.el-aside {
    background:#D3DCE6;
}

.el-header {
    background:#B3C0D1;
}

.el-main {
    background: #E9EEF3;
}
</style>