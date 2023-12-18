<script setup lang="ts">
import { reactive } from 'vue'

import AInput from '@/components/AInput.vue'
import ATextArea from '@/components/ATextArea.vue'
import ABtn from '@/components/ABtn.vue'

import TagSelector from './components/TagSelector.vue'

import { required } from '@/utils/validations'

const model = reactive({
  title: undefined,
  description: undefined,
  body: undefined,
  tags: []
})
</script>

<template>
  <form class="h-100 flex column">
    <h1 class="mb-6">{{ $t('newArticles') }}</h1>

    <div class="row">
      <div class="col-8 col-sm-12">
        <AInput
          v-model="model.title"
          :label="$t('title')"
          type="text"
          placeholder="title"
          :rules="[required]"
          class="mb-6"
        />

        <AInput
          v-model="model.description"
          :label="$t('description')"
          type="text"
          placeholder="This is a place for your description"
          class="mb-6"
        />

        <ATextArea
          v-model="model.body"
          :label="$t('body')"
          :rows="12"
          placeholder="This is a place for your body"
          class="mb-4"
        />
      </div>

      <div class="col-4 col-sm-12">
        <TagSelector v-model="model.tags" />
      </div>
    </div>

    <ABtn :text="$t('submit')" class="w-fit px-8" />
  </form>
</template>
