<template>
  <svg aria-hidden="true">
    <title>{{svg.title}}</title>
    <use v-bind:xlink:href="svg.xlink"></use>
  </svg>
</template>

<script>
export default {
  name: "ISVG",
  props: {svg: Object}
}
</script>

<style scoped>
</style>