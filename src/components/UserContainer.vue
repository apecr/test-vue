<template>
  <div>
    User Container
    <UserDisplay />
  </div>
</template>

<script>
import UserDisplay from './UserDisplay.vue'
export default {
  name: 'UserContainer',
  components: {
    UserDisplay
  }
}
</script>
