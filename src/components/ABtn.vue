<script lang="ts" setup>
import { type BtnProps } from '@/models/props/btn'
const props = defineProps<BtnProps>()
</script>

<template>
  <button
    class="a-btn txt-white"
    :class="{ loading: props.loading, disabled: props.disabled }"
    :aria-disabled="!!disabled"
  >
    <span v-if="!loading">
      <slot v-if="$slots.default"></slot>

      <span v-else>
        {{ props.text }}
      </span>
    </span>

    <i v-else class="icon-loading spin txt-white"></i>
  </button>
</template>
