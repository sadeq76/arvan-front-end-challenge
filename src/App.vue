<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

// Components
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// Types
import type { Component } from 'vue'

const route = useRoute()

const layout = computed<Component | 'div'>(() => (route.meta.layout ? DefaultLayout : 'div'))
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
