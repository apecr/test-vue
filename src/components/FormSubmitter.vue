<template>
  <div>
    <form @submit.prevent="handleSubmit">
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
      v-show="submitted"
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
    handleSubmit() {
      this.submitted = true
    },
    async handleSubmitAync() {
      try {
        const response = await this.$http.get('/api/v1/register')
        console.log(response)
        return response
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
