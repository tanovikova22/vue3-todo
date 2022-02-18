import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/signup",
      name: "SignIn",
      component: SignUp,
      meta: {
        requireAuth: false
      }
    }
  ]
})

export default router;
