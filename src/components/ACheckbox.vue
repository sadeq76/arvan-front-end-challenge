<script setup lang="ts">
import { type CheckboxProps } from '@/models/props/checkbox'

const props = defineProps<CheckboxProps>()
const emit = defineEmits(['update:modelValue'])

const onInput = function (e: Event) {
  const value = (e.target as HTMLInputElement).value
  console.log(e)

  emit('update:modelValue', value)
}
</script>

<template>
  <div class="flex">
    <input
      v-bind="props"
      :checked="isChecked"
      value="value"
      type="checkbox"
      class="mr-2"
      @change="onInput"
    />

    <label :for="label" class="label">{{ label }}</label>
  </div>
</template>
