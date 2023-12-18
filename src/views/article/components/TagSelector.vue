<script setup lang="ts">
import { ref, reactive } from 'vue'
import AInput from '@/components/AInput.vue'
import ACheckbox from '@/components/ACheckbox.vue'

const newTag = ref<string>()

const tags = reactive([
  { id: 1, title: 'sadasd', selected: false },
  { id: 1, title: 'sadasd', selected: false },
  { id: 1, title: 'sadasd', selected: false },
  { id: 1, title: 'sadasd', selected: false },
  { id: 1, title: 'sadasd', selected: false },
  { id: 1, title: 'sadasd', selected: false },
  { id: 1, title: 'sadasd', selected: false },
  { id: 1, title: 'sadasd', selected: false },
  { id: 1, title: 'sadasd', selected: false }
])

const test = ref<any>()
</script>

<template>
  <div>
    <AInput v-model="newTag" :label="$t('tags')" type="text" placeholder="New tag" />

    <div class="p-4 border-light-gray solid border-1 rounded-sm">
      <!-- <ACheckbox v-for="tag in tags" :key="tag.id" v-model="tag.selected" label="Tag" /> -->

      <ACheckbox v-model="test" label="Tag" />

      <pre>{{ test }}</pre>
    </div>
  </div>
</template>
