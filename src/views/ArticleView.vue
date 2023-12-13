<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

// Types
import type { TableProps } from '@/models/props/table'

// Components
import ATable from '@/components/ATable.vue'
import ABtn from '@/components/ABtn.vue'

const { t } = useI18n()

const tableProps = reactive<TableProps>({
  columns: [
    { key: 'index', title: '#' },
    { key: 'title', title: t('title') },
    { key: 'author', title: t('author') },
    { key: 'tags', title: t('tags') },
    { key: 'excerpt', title: t('excerpt') },
    { key: 'created', title: t('created') },
    { key: 'actions' }
  ],
  items: [
    {
      title: 'Article title',
      author: '@author_username',
      tags: ['article', 'test'],
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
      tags: ['hello', 'world', 'again', 'and', 'again', 'again', 'again', 'again', 'again'],
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
  <div class="h-100 flex column">
    <h1 class="mb-6">{{ $t('allPosts') }}</h1>

    <a-table v-bind="tableProps" class="grow-1">
      <template #index="{ index }">
        <span>{{ index + 1 }}</span>
      </template>

      <template #tags="{ tags }">
        <div class="tags w-100 flex items-center">
          <div class="flex">
            <div v-for="tag in tags.slice(0, 3)" :key="tag" class="mr-1 tag">{{ tag }}</div>
          </div>

          <span v-if="tags.length > 3">+ {{ tags.length - 3 }} more</span>
        </div>
      </template>

      <template #actions>
        <ABtn class="dark-sky-blue" data-toggle="popover">
          ...
          <i class="icon-angle-bottom md"></i>
        </ABtn>

        <div class="popover">Teesting this components</div>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped>
.tags {
  font-size: 0.75rem;
  overflow: hidden;

  .tag {
    color: white;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    border-radius: 0.25rem;
  }
  .tag:nth-child(4n) {
    background-color: #e3b4d0;
  }
  .tag:nth-child(4n + 1) {
    background-color: #4ec3c4;
  }
  .tag:nth-child(4n + 2) {
    background-color: #8fa4ee;
  }
  .tag:nth-child(4n + 3) {
    background-color: #ea998e;
  }
}
</style>
