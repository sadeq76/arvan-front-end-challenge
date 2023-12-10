<script lang="ts" setup>
import { type BtnProps } from '@/models/props/btn'
const { text, loading, disabled } = defineProps<BtnProps>()
</script>

<template>
  <button
    class="a-btn primary txt-white"
    :class="{ loading, disabled }"
    :aria-disabled="!!disabled"
  >
    <span v-if="!loading">
      {{ text }}
    </span>

    <i v-else class="icon-loading spin txt-white"></i>
  </button>
</template>
