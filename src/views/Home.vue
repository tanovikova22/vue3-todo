<template>
  <main>
    <button @click="login">click</button>
  </main>
</template>

<script setup lang="ts">
import type { TodoItem } from "@/types/TodoItem";

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
</script>

<style scoped lang="scss">
</style>