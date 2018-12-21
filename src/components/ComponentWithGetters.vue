<template>
  <div>
    <span class="fullname">{{fullname}}</span>
    <ul class="poodles collection">
      <li v-for="(poodle, index) in poodles" :key="index">
        <div>{{poodle.name}}</div>
        <div>{{poodle.breed}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ComponentWithGetters',
  computed: {
    ...mapGetters([
      'fullname', 'poodles'
    ])
  }
}
</script>

<style>
.poodles li{
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: block
}
</style>
