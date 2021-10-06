import { defineComponent, PropType, unref, computed, h } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'

let MyIconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1293667_q5mueod0z8.js'
  // iconfont字体图标本地化
  // scriptUrl: ''
})

export default defineComponent({
  name: 'IconFont',
  props: {
    type: {
      type: String as PropType<string>,
      default: ''
    },
    color: {
      type: String as PropType<string>,
      default: 'unset'
    },
    size: {
      type: [Number, String] as PropType<number | string>,
      default: 16
    },
    scriptUrl: {
      // 阿里图库字体图标路径
      type: String as PropType<string>,
      default: ''
    }
  },
  setup(props, { attrs }) {
    // 如果外部传进来字体图标路径，则覆盖默认的
    if (props.scriptUrl) {
      MyIconFont = createFromIconfontCN({
        scriptUrl: props.scriptUrl
      })
    }

    const wrapStyleRef = computed(() => {
      const { color, size } = props

      const fs = typeof size === 'string' ? parseFloat(size as string) : size

      return {
        color,
        fontSize: `${fs}px`
      }
    })

    return () => <MyIconFont type={props.type || ''} {...attrs} style={unref(wrapStyleRef)} />
  }
})
