import { createApp } from 'vue'
import Router from './router/index'
import Store from './store/index'
import App from './App.vue'
import { Picker } from 'vant';


createApp(App)
.use(Picker)
.use(Store)
.use(Router)
.mount('#app')
