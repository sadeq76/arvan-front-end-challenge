<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import type { NavbarItemProps } from '@/models/props/navbar-item'
const props = defineProps<NavbarItemProps>()
const component = props.name ? RouterLink : 'span'
</script>

<template>
  <div>
    <component class="sidebar-item w-100 p-4" :is="component" :to="{ name: props.name }">
      {{ $t(props.title) }}
    </component>

    <NavbarItem
      v-for="(child, index) in props.children"
      :key="index"
      v-bind="child"
      class="child"
    />
  </div>
</template>

<style lang="scss" scoped>
.sidebar-item {
  display: inline-block;
  color: white;
  font-size: 1.375rem;
  font-weight: 500;
}

.child {
  a {
    padding-inline: 2rem;
    font-size: 1rem;
  }
}
.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
