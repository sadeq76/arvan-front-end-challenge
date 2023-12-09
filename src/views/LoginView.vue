<script setup lang="ts">
import { reactive, ref } from 'vue'

// components
import AInput from '@/components/shared/AInput.vue'
import ABtn from '@/components/shared/ABtn.vue'

// Types
import type { LoginDTO } from '@/models/dto/login'

// Utils
import { required, email, min, isFormValid } from '@/utils/validations'

const loading = ref<boolean>(false)
const model = reactive<LoginDTO>({
  email: '',
  password: ''
})
const loginForm = ref<HTMLFormElement | null>(null)

// TODO: (code: 0004) add API requesst
const login = function () {
  if (loginForm.value) {
    if (!isFormValid(loginForm.value)) return

    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 4000)
  }
}
</script>

<template>
  <div class="container flex justify-center items-center rounded-md">
    <form
      ref="loginForm"
      class="login-card silver p-4 rounded-sm flex column items-center"
      @submit.prevent="login"
    >
      <h1 class="title mb-4">LOGIN</h1>

      <AInput
        v-model="model.email"
        class="w-100 mb-4"
        label="Email"
        type="email"
        placeholder="example@host.com"
        :rules="[required, email]"
      />

      <AInput
        v-model="model.password"
        class="w-100 mb-4"
        label="Password"
        type="password"
        placeholder="********"
        :rules="[required, min(8)]"
      />

      <div class="spacer"></div>

      <ABtn
        text="Login"
        :loading="loading"
        :disabled="!isFormValid(loginForm)"
        class="w-100"
        type="submit"
      />

      <div class="mt-4 w-100 flex">
        <p>Don’t have account?</p>
        <RouterLink class="ml-2" to="/register">register now</RouterLink>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;

  .login-card {
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
