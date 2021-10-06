<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-button type="primary">haha</a-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(props) {
    const store = useStore()
    console.log(store.state)
  }
})
</script>
