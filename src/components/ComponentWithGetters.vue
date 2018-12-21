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
export default {
  name: 'ComponentWithGetters',
  computed: {
    fullname () {
      return this.$store.getters.fullname
    },
    poodles () {
      return this.$store.getters.poodles
    }
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
