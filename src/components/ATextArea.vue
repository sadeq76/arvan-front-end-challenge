<script setup lang="ts">
import { ref, computed } from 'vue'

import type { TextAreaProps } from '@/models/props/text-area'

const props = defineProps<TextAreaProps>()

const emit = defineEmits(['update:modelValue'])

const hint = ref<string | false>()

const checkValidation = (value: string) => {
  for (const rule of props.rules) {
    const executedRule = rule(value)

    if (typeof executedRule === 'string') return (hint.value = executedRule)
  }

  return (hint.value = false)
}

const onInput = function (e: Event) {
  const value = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
  checkValidation(value)
}

const labelColor = computed(() => `txt-${hint.value ? 'error' : 'charcoal-grey'}`)
</script>

<template>
  <div class="flex column items-start">
    <label :for="label" class="label mb-2" :class="labelColor">{{ label }}</label>

    <div class="a-input-box w-100 mb-2 flex">
      <textarea
        v-bind="props"
        :value="modelValue"
        :id="props.label"
        :class="{ 'border-error solid': hint }"
        style="border-width: 1px"
        class="a-input p-2 grow-1"
        @input="onInput"
      />
    </div>

    <p class="txt-error">{{ hint || '‎' }}</p>
  </div>
</template>

<style scoped lang="scss">
.label {
  font-size: 1rem;
  font-weight: normal;
}

.toggle-password {
  border: none;
  cursor: pointer;
  &-icon {
    font-size: 1rem;
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
