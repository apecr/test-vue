<template>
  <div>
    <form @submit.prevent="handleSubmitAync">
      <input
        data-username
        v-model="username"
      >
      <input
        type="submit"
        value="accept"
      >
    </form>
    <div
      class="message"
      v-if="submitted"
    >Thank you for your submission, {{ username }}.</div>
  </div>
</template>

<script>
export default {
  name: 'FormSubmitter',
  data: () => ({
    username: null,
    submitted: false
  }),
  methods: {
    async handleSubmitAync () {
      try {
        const response = await this.$http.get('/api/v1/register')
        this.submitted = true
        return response
      } catch (error) {
        this.submitted = false
      }
    }
  }
}
</script>
