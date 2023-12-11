<script lang="ts" setup>
import type { TableProps } from '@/models/props/table'
const props = defineProps<TableProps>()
</script>

<template>
  <table class="a-table">
    <thead>
      <tr>
        <th v-for="column in props.columns" :key="column.key">{{ column.title }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in props.items" :key="index">
        <td v-for="cell in columns" :key="cell.key">
          <span v-if="item[cell.key]">
            {{ item[cell.key] }}
          </span>

          <slot :name="cell.key" v-bind="item"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
