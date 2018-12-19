<template>
  <div>
    <p>User Display</p>
    <span>{{body}}</span>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'UserDisplay',
  data: _ => ({ body: null }),
  created () {
    this.makeApiCall()
  },

  methods: {
    async makeApiCall () {
      console.log('Making api call')
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      console.log('Made api call')
      console.log(response.data)
      this.body = response.data.body
    }
  }
}
</script>
