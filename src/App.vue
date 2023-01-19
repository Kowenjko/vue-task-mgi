<script setup>
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <Suspense>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </Suspense>
</template>
