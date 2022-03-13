<template>
  <div
      id="content"
      :style="{paddingLeft}"
  >
    <RouterView/>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Content",
  computed: {
    paddingLeft(){
      return this.isOpenNavigation ? '250px' : '85px'
    },
    ...mapState(['isOpenNavigation'])
  }
}
</script>

<style scoped>
  #content{
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 20px 20px 20px;
    transition: .2s;
    position: absolute;
    top: 0px;
    background-color: #F5F5F5;
  }
</style>