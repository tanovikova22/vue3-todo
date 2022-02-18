<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from "@/components/common/Header.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
</script>

<template>
  <Header/>
  <AuthLayout>
    <RouterView />
  </AuthLayout>
</template>
