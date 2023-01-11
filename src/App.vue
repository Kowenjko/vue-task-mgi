<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <Suspense>
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </Suspense>
</template>
