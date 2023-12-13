<script setup lang="ts">
// components
import ABtn from '@/components/ABtn.vue'
import NavbarItem from './components/NavbarItem.vue'

// constants
import navbarItems from '@/constants/navbar-items'
</script>

<template>
  <div class="layout overflow-hidden">
    <header class="header px-8 py-6 p-sm-4 flex items-center">
      <div>
        <span role="heading" class="arvan-challenge">{{ $t('arvanChallenge') }}</span>

        <span class="welcome-user px-4">{{ $t('welcome_user_', { user: 'hello' }) }}</span>
      </div>

      <div class="spacer"></div>

      <ABtn :text="$t('logout')" class="outlined-primary" />
    </header>

    <nav class="navbar">
      <NavbarItem v-for="(item, index) in navbarItems" :key="index" v-bind="item" />
    </nav>

    <main class="px-8 py-6 p-sm-4 overflow-hidden">
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

  .header {
    background-color: rgb($charcoal-grey-color);
    grid-column: 1/3;
    color: rgb($white-color);

    .arvan-challenge {
      font-size: 1.375rem;
    }

    .welcome-user {
      font-size: 1rem;
      font-weight: 100;
    }
  }

  .navbar {
    background-color: rgb($primary-color);
    @media only screen and (max-width: $mobile-breakpoint) {
      grid-row: 3;
    }
  }
}
</style>
