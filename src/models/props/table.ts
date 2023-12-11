import type { TableColumns } from '@/models/props/table-columns'
export interface TableProps {
  columns: TableColumns[]
  items: Record<string | number, any>
}
