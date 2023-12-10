<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue'

import { type InputProps } from '@/models/props/input'

const props = defineProps<InputProps>()

const showPassword = ref<boolean>(false)
const type = computed(() => {
  if (props.type?.toLowerCase() === 'password') return showPassword.value ? 'text' : 'password'
  return props.type
})

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
      <input
        v-bind="props"
        :id="props.label"
        class="a-input p-2"
        :class="{ 'border-error': hint }"
        :value="modelValue"
        :type="type"
        @input="onInput"
        style="flex-grow: 1"
      />

      <div v-if="props.type === 'password'" class="suffix">
        <button
          class="toggle-password transparent w-100 h-100"
          type="button"
          @click="showPassword = !showPassword"
        >
          <i
            class="toggle-password-icon"
            :class="{ 'icon-eye': showPassword, 'icon-close-eye': !showPassword }"
          ></i>
        </button>
      </div>
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
