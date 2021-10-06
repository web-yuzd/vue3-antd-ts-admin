const file = require.context('./', true, /index.ts$/)
const modules: Record<string, any> = {}

file.keys().forEach((key) => {
  if (key === './index.ts') return
  const name = key.replace(/(.\/)*([^/]+).*/gi, '$2')
  modules[name] = file(key).default
})

export default modules
