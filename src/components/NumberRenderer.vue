<template>
  <div>{{numbers}}</div>
</template>

<script>
export default {
  name: "NumberRenderer",
  props: {
    even: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    getNumbersByKind: isEven =>
      isEven === true
        ? [2, 4, 6, 8].join(", ")
        : [1, 3, 5, 7, 9].join(", ")
  },
  computed: {
    numbers() {
      return this.getNumbersByKind(this.even);
    }
  }
};
</script>

