<template>
  <a-layout-header class="navbar">
    <div class="navbar-left">
      <span class="navbar-left-trigger" @click="toggleSiderbar">
        <menu-unfold-outlined v-if="collapsed" />
        <menu-fold-outlined v-else />
      </span>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Layout } from 'ant-design-vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    [Layout.Header.name]: Layout.Header,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup() {
    const store = useStore()
    const collapsed = computed(() => store.state.app.collapsed)

    const toggleSiderbar = () => {
      store.dispatch('app/setSidebar', undefined)
    }

    return {
      collapsed,
      toggleSiderbar
    }
  }
})
</script>
<style lang="less">
@navbar-height: 64px;
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: @navbar-height;
  line-height: @navbar-height;
  background: #fff;
  padding: 0;
  &-left {
    display: flex;
    align-items: center;
    height: 100%;
    &-trigger {
      display: flex;
      height: 100%;
      padding: 1px 10px 0;
      cursor: pointer;
      align-items: center;
      .anticon {
        font-size: 16px;
      }
      &:hover {
        background-color: #f6f6f6;
      }
    }
  }
}
</style>
