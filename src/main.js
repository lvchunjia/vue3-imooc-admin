import './styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'

const app = createApp(App)
// installIcons(app)
app.use(createPinia())
app.use(router)
app.mount('#app')
