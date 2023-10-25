<script setup>
import { ElConfigProvider } from 'element-plus'

const size = 'small'
const zIndex = 3000
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <RouterView />
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
