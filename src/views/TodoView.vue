<template>
  <main>
    <button @click="login">click</button>
  </main>
</template>

<script setup lang="ts">
import type { TodoItem } from "@/types/TodoItem";
import { useStore } from "vuex";
import { ActionTypes } from "@/store/modules/auth/actions";

const todoList: TodoItem[] = [
  {
    id: 1,
    title: "title",
    createdAt: new Date(),
    description: "Lorem isprum dkjafdknfkj",
    status: "To do",
    priority: 1,
  }
]

const store = useStore();
const login = (): Promise<void> => store.dispatch(ActionTypes.registerUser, { email: "tanya@test.test", password: "123123123" });
</script>

<style scoped lang="scss">
</style>