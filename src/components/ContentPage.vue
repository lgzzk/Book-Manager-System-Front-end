<template>
  <div id="Content-page">
    <RouterView/>
  </div>
</template>

<script>
export default {
  name: "ContentPage"
}
</script>

<style scoped>
#Content-page{
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: rgba(254, 254, 254, 1);
  box-shadow: -1px -1px 5px 0 rgba(0, 0, 0, .1);
}
</style>