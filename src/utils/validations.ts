import i18n from '@/i18n'

export const required = function (value: string) {
  return !!value || i18n.global.t('fieldIsRequired')
}

export const email = function (email: string) {
  const validPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return email.toLowerCase().match(validPattern) || i18n.global.t('emailIsNotValid')
}

export const min = function (length: number) {
  return (value: string) =>
    value.length > length ||
    i18n.global.t('theNumberOfCharactersShouldBeMoreThan_length_', { length })
}

// TODO: (code: 0001) In this function, we lose closure when converting a string into a function using the eval, and using eval is not safe because it can lead to security vulnerabilities and execution errors
export const isFormValid = (formElement: HTMLFormElement | null) => {
  let isValid = false
  if (formElement) {
    isValid = true
    const inputs = formElement.querySelectorAll('input')

    for (const input of inputs) {
      const value = input.value
      const strRules = '[' + input.getAttribute('rules') + ']'

      const rules = eval(strRules)

      for (const rule of rules) {
        const testValue = rule(value)
        if (typeof testValue === 'string') {
          isValid = false
          break
        }
      }
    }
  }

  return isValid
}
