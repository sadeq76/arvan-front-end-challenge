<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import type { SidebarItemProps } from '@/models/props/sidebar-item'
const props = defineProps<SidebarItemProps>()
</script>

<template>
  <div>
    <RouterLink class="sidebar-item" :to="props.path">{{ props.name }}</RouterLink>

    <SidebarItem
      v-for="(child, index) in props.children"
      :key="index"
      v-bind="child"
      class="px-4 sidebar-item-child"
    />
  </div>
</template>

<style lang="scss" scoped>
.sidebar-item {
  display: inline-block;
  color: white;
  font-size: 1.375rem;
  font-weight: 500;
  margin-inline: 1.5rem;
  margin-block: 0.75rem;
}

.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
