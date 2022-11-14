// Import Packages
import { createApp } from 'vue'
import { createPinia } from 'pinia';

// Import Files
import App from './App.vue'
import router from './router';

import '../src/index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0FwVPztjuDkXMXvP4svll9lnJvfF3hhY",
  authDomain: "tronnftmash.firebaseapp.com",
  projectId: "tronnftmash",
  storageBucket: "tronnftmash.appspot.com",
  messagingSenderId: "654380496746",
  appId: "1:654380496746:web:f667a1f4ae3bea074a9713"
};

// // Initialize Firebase
const app1 = initializeApp(firebaseConfig);

const app = createApp(App)

// app.initializeApp(firebaseConfig);

app.use(createPinia())
app.use(router)
app.mount('#app')
