<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="name" name="Full Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="user.name" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="name" aria-describedby="emailHelp" placeholder="Enter Full Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="name" name="Email" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <input type="email" v-model="user.email" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="email" aria-describedby="emailHelp" placeholder="Enter email">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="password" v-model="user.password" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="password" placeholder="Password">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password-confirmation" name="Password-Confirmation" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="password" v-model="user.password_confirmation" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="password-confirmation" placeholder="Confirm Password">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
        <div class="custom-control custom-checkbox mb-3">
          <input type="checkbox" class="custom-control-input" :id="formType">
          <label class="custom-control-label" :for="formType">I accept 
            <router-link :to="{name: 'extra-pages.terms'}" class="text-primary">Terms and Conditions</router-link>
            
          </label>
        </div>
      <button type="submit" class="btn btn-hover">Sign Up</button>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SignUp1Form',
  props: ['formType'],
  data: () => ({
    successful: false,
    user: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  }),
  methods: {
    onSubmit() {
      this.$store.dispatch('Auth/register', this.user).then(
        data => {
          this.successful = true
          this.$router.push({name: 'auth1.sign-in1'})
        },
        error => {
          this.successful = false
        }
      )
    }
  }
}
</script>
