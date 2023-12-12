// TODO: (code: 0003) Compelete this test

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SidebarItems from '@/layouts/components/SidebarItem.vue'

describe('SidebarItems', () => {
  it('test', () => {
    const wrapper = mount(SidebarItems)
    expect(wrapper.html()).toContain('div')
  })
})
