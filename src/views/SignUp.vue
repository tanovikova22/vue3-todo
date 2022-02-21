<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="@/assets/images/todo.svg" alt="todo-logo" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="signUp">
        <div class="rounded-md shadow-sm">
          <div class="mb-2">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="false" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <router-link to="/login" class="font-medium text-primary hover:text-accent"> Already have an account? </router-link>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-accent group-hover:text-lime-50" aria-hidden="true" />
            </span>
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LockClosedIcon } from '@heroicons/vue/solid';
import { authStore } from "@/store/auth";
import { ref } from "vue";
import type { UserCredential } from "firebase/auth";

const store = authStore();
const email = ref("");
const password = ref("");

const signUp = ():Promise<UserCredential> => store.signUp({ email: email.value, password: password.value });
</script>

<style scoped>

</style>