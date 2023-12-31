import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './assets/scss/all.scss';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
