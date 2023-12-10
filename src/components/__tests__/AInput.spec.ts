// TODO: (code: 0003) Compelete this test

import { describe, it, expect, beforeAll, vi } from 'vitest'

import { DOMWrapper, mount } from '@vue/test-utils'
import AInput from '@/components/AInput.vue'

// Specify the minimum and maximum values
// TODO: Move randomNumber to test utils
const min = 1
const max = 100
const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min

// TODO: Move randomNumber to test data
const props = {
  modelValue: 'Test value',
  rules: [],
  label: 'Test Label',
  placeholder: 'Test placeholder'
}

const wrapper = mount(AInput, {
  props
})

describe('custom v-model', () => {
  let input: DOMWrapper<HTMLInputElement>

  beforeAll(() => {
    input = wrapper.find('input')
  }, 0)

  it('should have a modelValue prop that matches the input value', () => {
    expect(input.element.value).toBe(props.modelValue)
  })

  it('should emit value of input on input event', () => {
    input.trigger('input')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})

describe.skip('checkValidation', () => {
  let input: DOMWrapper<HTMLInputElement>

  beforeAll(() => {
    input = wrapper.find('input')
  }, 0)

  it('should call only 1 time on the input event', () => {
    // input.trigger('input')
    // expect(wrapper.checkValidation).toHaveBeenCalledTimes(1)
  })
  it('should execute all indexes', async () => {
    const myFunction = {
      myMethod: () => false
    }
    const spyFunction = vi.spyOn(myFunction, 'myMethod')

    wrapper.setProps({
      ...props,
      rules: Array.from({ length: randomNumber() }, () => () => myFunction.myMethod())
    })

    input.trigger('input')

    expect(spyFunction).toHaveBeenCalledTimes(props.rules.length)
  })
  it('should return hint with a string if the condition was false', () => {
    const errorText = 'this is a test'
    wrapper.setProps({
      ...props,
      rules: [() => false || errorText]
    })

    input.trigger('input')

    expect((wrapper as any).hint).toBe(errorText)
  })
  it('should return hint with false value if all conditions are met', () => {
    wrapper.setProps({
      ...props,
      rules: [() => true || 'string']
    })

    input.trigger('input')

    expect((wrapper as any).hint).toBeFalsy()
  })
})

describe.skip('hint span', () => {
  let input: DOMWrapper<HTMLInputElement>

  beforeAll(async () => {
    input = wrapper.find('input')
  }, 0)

  it('should the hint string exist if the condition was false', async () => {
    const errorText = 'this is a test'
    await wrapper.setProps({
      ...props,
      rules: [() => false || errorText]
    })

    await input.trigger('input')

    expect(wrapper.html()).toContain(errorText)
  })
})
