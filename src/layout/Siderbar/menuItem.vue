<template>
  <template v-if="!menuInfo.meta?.hidden">
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
      <a-menu-item :key="theOnlyOneChild.name">
        <icon-font :type="theOnlyOneChild.meta.icon" />
        <span>{{ theOnlyOneChild.meta?.title }}</span>
      </a-menu-item>
    </template>
    <a-sub-menu v-else :key="menuInfo.name" v-bind="$attrs">
      <template #title>
        <span>
          <icon-font :type="menuInfo.meta.icon" />
          <span>{{ menuInfo.meta?.title }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <icon-font :type="item.meta.icon" />
            <span>{{ item.meta?.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <menu-item :key="item.name" :menu-info="item" />
        </template>
      </template>
    </a-sub-menu>
    <!-- <template v-else>
      <a-menu-item :key="menuInfo.name">
        <icon-font :type="menuInfo.meta.icon" />
        <span>{{ menuInfo.meta?.title }}</span>
      </a-menu-item>
    </template> -->
  </template>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { Menu } from 'ant-design-vue'
import IconFont from '@/components/IconFont'

export default defineComponent({
  name: 'MenuItem',
  components: {
    IconFont,
    'a-sub-menu': Menu.SubMenu,
    'a-menu-item': Menu.Item
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const alwaysShowRootMenu = computed(() => {
      if (props.menuInfo?.meta?.alwaysShow) {
        return true
      } else {
        return false
      }
    })

    const showingChildNumber = computed(() => {
      if (props.menuInfo.children) {
        const showingChildren = props.menuInfo.children.filter((item: RouteRecordRaw) => {
          if (item.meta && item.meta.hidden) {
            return false
          } else {
            return true
          }
        })
        return showingChildren.length
      }
      return 0
    })

    const theOnlyOneChild = computed(() => {
      if (showingChildNumber.value > 1) {
        return null
      }
      if (props.menuInfo.children) {
        for (let child of props.menuInfo.children) {
          if (!child.meta || !child.meta.hiden) {
            return child
          }
        }
      }

      return { ...props.menuInfo, path: '' }
    })

    return {
      alwaysShowRootMenu,
      showingChildNumber,
      theOnlyOneChild
    }
  }
})
</script>

<style scoped></style>
