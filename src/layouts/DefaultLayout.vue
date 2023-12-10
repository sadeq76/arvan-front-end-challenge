<script setup lang="ts"></script>

<template>
  <div class="layout">
    <nav class="navbar"></nav>
    <aside class="sidebar"></aside>
    <main class="px-8 py-6 p-sm-4">
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 3.75rem auto;
  grid-template-columns: 15.625rem auto;

  @media only screen and (max-width: $mobile-breakpoint) {
    grid-template-rows: 3.75rem auto 3.75rem;
    grid-template-columns: 1fr;
  }

  .navbar {
    background-color: rgb($charcoal-grey-color);
    grid-column: 1/3;
  }

  .sidebar {
    background-color: rgb($primary-color);
    @media only screen and (max-width: $mobile-breakpoint) {
      grid-row: 3;
    }
  }
}
</style>
