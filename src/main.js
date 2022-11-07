// Import Packages
import { createApp } from 'vue'
import { createPinia } from 'pinia';

// Import Files
import App from './App.vue'
import router from './router';
import '../src/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
