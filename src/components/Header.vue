<template>
  <div id="header">
    <Logo/>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  name: "Header",
  components: {Logo}
}
</script>

<style scoped>
  #header{
    width: 100%;
    height: 70px;
    z-index: 20;
    color: #999;
    display: flex;
    justify-content: left;
    align-items: center;
    position: absolute;
    background-color: #fefefe;
  }


</style>