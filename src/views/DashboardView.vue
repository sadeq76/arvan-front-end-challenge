<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

// Types
import type { TableProps } from '@/models/props/table'

// Components
import ATable from '@/components/ATable.vue'

const { t } = useI18n()

const tableProps = reactive<TableProps>({
  columns: [
    { key: 'index', title: '#' },
    { key: 'title', title: t('title') },
    { key: 'author', title: t('author') },
    { key: 'tags', title: t('tags') },
    { key: 'excerpt', title: t('excerpt') },
    { key: 'created', title: t('created') }
  ],
  items: [
    {
      title: 'Article title',
      author: '@author_username',
      tags: ['hello', 'world'],
      excerpt: 'First 20 words of article body',
      created: ''
    },
    {
      title: 'Article title',
      author: '@author_username',
      tags: ['hello'],
      excerpt: 'First 20 words of article body',
      created: ''
    },
    {
      title: 'Article title',
      author: '@author_username',
      tags: ['hello', 'world', 'again', 'and', 'again'],
      excerpt:
        'First 20 words of article body First 20 words of article body First 20 words of article body First 20 words of article body',
      created: ''
    },
    {
      title: 'Article title',
      author: '@author_username',
      tags: ['hello', 'world'],
      excerpt:
        'First 20 words of article body First 20 words of article body First 20 words of article body First 20 words of article body First 20 words of article body',
      created: ''
    },
    {
      title: 'Article title',
      author: '@author_username',
      tags: ['hello', 'world'],
      excerpt:
        'First 20 words of article body First 20 words of article body First 20 words of article body First 20 words of article body First 20 words of article body',
      created: ''
    }
  ]
})
</script>

<template>
  <div>
    <h1>{{ $t('allPosts') }}</h1>

    <a-table v-bind="tableProps">
      <template #tags="{ tags }">
        <div v-for="tag in tags" :key="tag" class="tag">{{ tag }}</div>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  color: white;
  padding: 0.25rem;
  border-radius: 0.25rem;
}
.tag:nth-child(3n + 4) {
  background-color: #e3b4d0;
}
.tag:nth-child(3n + 2) {
  background-color: #4ec3c4;
}
.tag:nth-child(3n + 1) {
  background-color: #8fa4ee;
}
</style>
