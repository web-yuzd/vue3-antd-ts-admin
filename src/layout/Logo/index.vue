<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="" />
    <h2 v-show="!collapsed" class="title">管理系统</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    collapsed: Boolean
  }
})
</script>

<style lang="less">
.logo {
  display: flex;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  white-space: nowrap;
  align-items: center;

  img {
    height: 32px;
    margin-right: 8px;
  }

  .title {
    margin-bottom: 0;
    color: white;
  }
}
</style>
