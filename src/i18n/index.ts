import { createI18n } from 'vue-i18n'

import user from './user'
import pages from './pages'
import loginRegister from './login-register'

const files = { ...user, ...pages, ...loginRegister }
const messages: any = { fa: {}, en: {} }
for (const [key, value] of Object.entries(files)) {
  for (const [valueKey, valueValue] of Object.entries(value)) {
    messages[valueKey][key] = valueValue
  }
}

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_LOCALE,
  fallbackLocale: 'en',
  messages
})

export default i18n
