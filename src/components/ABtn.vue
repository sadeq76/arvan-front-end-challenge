<script lang="ts" setup>
import { type BtnProps } from '@/models/props/btn'
const props = defineProps<BtnProps>()

console.log(props.outlined)
</script>

<template>
  <button
    class="a-btn txt-white"
    :class="{ loading: props.loading, disabled: props.disabled }"
    :aria-disabled="!!disabled"
  >
    <span v-if="!loading">
      {{ props.text }}
    </span>

    <i v-else class="icon-loading spin txt-white"></i>
  </button>
</template>
