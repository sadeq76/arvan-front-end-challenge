// TODO: (code: 0003) Compelete this test

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

describe('DefaultLayout', () => {
  it('test', () => {
    const wrapper = mount(DefaultLayout)
    expect(wrapper.html()).toContain('div')
  })
})
