import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "@/assets/styles/index.scss";
import { createPinia } from 'pinia'

import { initializeApp } from "firebase/app";

const app = createApp(App)
app.use(router);
app.use(createPinia());

initializeApp({
    apiKey: "AIzaSyBYPTUMncQ5GkOhikWT0MDR-1P1TiFLatE",
    authDomain: "vue3-todo-48dd5.firebaseapp.com",
    projectId: "vue3-todo-48dd5",
    storageBucket: "vue3-todo-48dd5.appspot.com",
    messagingSenderId: "1081476549077",
    appId: "1:1081476549077:web:1480c62c634574e6c9d55c",
    measurementId: "G-R1D7XS4J58"
});

app.mount('#app')
