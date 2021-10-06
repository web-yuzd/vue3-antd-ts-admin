<template>
  <a-menu
    v-model:open-keys="openKeys"
    v-model:selected-keys="selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    class="menu-container"
    @click="clickMenuItem"
  >
    <template v-for="item in menus" :key="item.name">
      <menu-item :menu-info="item" />
    </template>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, toRaw, reactive, computed, watch, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import MenuItem from './menuItem.vue'
export default defineComponent({
  name: 'Menu',
  components: {
    MenuItem
  },
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean
    }
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const currentRoute = useRoute()

    const getOpenKeys = () => currentRoute.matched.map((route) => route.name)

    const keysState = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [currentRoute.name]
    })

    console.log(toRaw(currentRoute))

    console.log(getOpenKeys())

    const menus = computed(() => store.state.permission.routes)

    // 监听菜单收缩状态
    watch(
      () => props.collapsed,
      (newVal) => {
        keysState.openKeys = newVal ? [] : getOpenKeys()
        keysState.selectedKeys = [currentRoute.name]
      }
    )

    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => currentRoute.fullPath,
      () => {
        if (currentRoute.name == 'login' || props.collapsed) return
        keysState.openKeys = getOpenKeys()
        keysState.selectedKeys = [currentRoute.name]
      }
    )

    // 点击菜单
    const clickMenuItem = ({ item, key, keyPath }: any) => {
      if (/http(s)?:/.test(key)) {
        window.open(key)
      } else {
        router.push({ name: key })
      }
    }

    return {
      ...toRefs(keysState),
      menus,
      clickMenuItem
    }
  }
})
</script>
<style lang=""></style>
