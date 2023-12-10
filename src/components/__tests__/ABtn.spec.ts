// TODO: (code: 0003) Compelete this test

import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import ABtn from '@/components/ABtn.vue'

const props = {
  text: 'Test Text'
}

const wrapper = mount(ABtn, { props })

describe('Button', () => {
  it('should exist on the page', () => {
    const button = wrapper.find('button')

    expect(button).toBeTruthy()
  })

  it('should have content match with text prop', () => {
    const button = wrapper.find('button')

    expect(button.text()).toBe(props.text)
  })
})

describe('Loading', () => {
  it('should show icon if loading was true', () => {
    wrapper.setProps({ loading: true })
    const loading = wrapper.find('.icon-loading')

    expect(loading).toBeTruthy()
  })
})

describe('Disabled', () => {
  it('should set aria-disabled to false', () => {
    wrapper.setProps({ disabled: true })
    const button = wrapper.find('button')

    expect(button.attributes()['aria-disabled']).toBe('false')
  })
})
