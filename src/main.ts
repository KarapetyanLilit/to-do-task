import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/variables.scss'
import '@/assets/scss/global.scss'
import '@/assets/scss/todoList.scss'

createApp(App).use(store).use(router).mount('#app')
