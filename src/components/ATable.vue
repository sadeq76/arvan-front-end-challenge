<script lang="ts" setup>
import type { TableProps } from '@/models/props/table'
const props = defineProps<TableProps>()
</script>

<template>
  <table class="a-table">
    <thead>
      <tr>
        <th v-for="column in props.columns" :key="column.key" :class="column.class">
          {{ column.title }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in props.items" :key="index">
        <td v-for="cell in columns" :key="cell.key">
          <slot v-if="$slots[cell.key]" :name="cell.key" v-bind="{ ...item, index }"></slot>

          <span v-else :class="cell.class">
            {{ item[cell.key] }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
