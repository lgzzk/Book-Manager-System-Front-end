<template>
  <div>
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
  name: "Index",
  components: {Content, Navigation, Header}
}
</script>

<style scoped>

</style>