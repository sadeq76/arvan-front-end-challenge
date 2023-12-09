export const required = function (value: string) {
  return !!value || 'Field is required'
}

export const email = function (email: string) {
  const validPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return email.toLowerCase().match(validPattern) || 'Email is not valid'
}

export const min = function (length: number) {
  return (value: string) =>
    value.length > length || `The number of characters should be more than ${length}`
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
