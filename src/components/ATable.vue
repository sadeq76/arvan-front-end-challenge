<script lang="ts" setup>
import type { TableProps } from '@/models/props/table'
const props = defineProps<TableProps>()
</script>

<template>
  <div class="table-container">
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
          <td v-for="cell in columns" :key="cell.key" :class="cell.class">
            <slot v-if="$slots[cell.key]" :name="cell.key" v-bind="{ ...item, index }"></slot>

            <span v-else>
              {{ item[cell.key] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.table-container {
  height: fit-content;
  width: 100%;
  max-height: 100%;
  overflow: auto;
}
</style>
