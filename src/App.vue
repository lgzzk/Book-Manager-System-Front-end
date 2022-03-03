<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <Content/>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Content from "@/components/Content";
export default {
  name: 'App',
  components: {
    Content,
    Navigation,
    Header
  }
}
</script>

<style>
  #app{
    width: 100vh;
    height: 100vh;
    overflow: hidden;
  }
</style>
