<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

// components
import AInput from '@/components/AInput.vue'
import ABtn from '@/components/ABtn.vue'

// Types
import type { RegisterDTO } from '@/models/dto/register'

// Utils
import { required, email, min, isFormValid } from '@/utils/validations'

const { t } = useI18n()
const title = computed(() => t('register').toUpperCase())

const loading = ref<boolean>(false)
const model = reactive<RegisterDTO>({
  user: '',
  email: '',
  password: ''
})
const registerForm = ref<HTMLFormElement | null>(null)
const router = useRouter()
// TODO: (code: 0004) add API requesst
const register = function () {
  if (registerForm.value) {
    if (!isFormValid(registerForm.value)) return

    loading.value = true
    setTimeout(() => {
      loading.value = false

      router.push({ name: 'Login' })
    }, 4000)
  }
}
</script>

<template>
  <div class="container flex justify-center items-center rounded-md">
    <form
      ref="registerForm"
      class="register-card silver px-4 py-8 rounded-sm flex column items-center"
      @submit.prevent="register"
    >
      <h1 class="title mb-4">{{ title }}</h1>

      <AInput
        v-model="model.user"
        class="w-100 mb-4"
        :label="$t('user')"
        type="text"
        placeholder="sadeq76"
        :rules="[required]"
      />

      <AInput
        v-model="model.email"
        class="w-100 mb-4"
        :label="$t('email')"
        type="email"
        placeholder="example@host.com"
        :rules="[required, email]"
      />

      <AInput
        v-model="model.password"
        class="w-100 mb-4"
        :label="$t('password')"
        type="password"
        placeholder="********"
        :rules="[required, min(8)]"
      />

      <div class="spacer"></div>

      <ABtn
        :text="t('register')"
        :loading="loading"
        :disabled="!isFormValid(registerForm)"
        class="w-100"
        type="submit"
      />

      <div class="mt-4 w-100 flex">
        <p>Already Registered?</p>
        <RouterLink class="ml-2" to="/login">Login</RouterLink>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;

  .register-card {
    width: 31.25%;
    min-width: min($mobile-breakpoint, 100%);
    max-width: 30rem;

    @media only screen and (max-width: $mobile-breakpoint) {
      height: 100%;
    }

    .title {
      font-size: 3rem;
      font-weight: normal;
      color: #707070;
    }
  }
}
</style>
