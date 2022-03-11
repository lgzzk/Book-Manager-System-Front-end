<template>
  <div id="content">
    <RouterView/>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>
  #content{
    height: 100%;
    width: 100%;
    position: absolute;
    padding-top: 80px;
    padding-left: 310px;
    background-color: #E9ECF3;
  }
</style>