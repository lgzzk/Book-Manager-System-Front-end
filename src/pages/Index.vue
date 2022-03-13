<template>
  <div id="index">
    <Header/>
    <div class="container">
      <div class="index-div">
        <Navigation/>
        <Content/>
      </div>
    </div>
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

#index {
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
}

.index-div {
  height: 100%;
}
</style>