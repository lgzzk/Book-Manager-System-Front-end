<template>
  <div id="content-header">
    {{text}}
  </div>
</template>

<script>
export default {
  name: "ContentHeader",
  props: {text: String}
}
</script>

<style scoped>
#content-header{
  color: #838FA1;
  /*color: #5AC2EE;*/
  font-size: 18px;
  padding: 10px;
  border-bottom: 2px #eef1f5 solid;
}
</style>