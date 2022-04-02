<template>
  <div
      id="content"
      :style="{paddingLeft}"
  >
    <ContentPage/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import ContentPage from "@/components/ContentPage";

export default {
  name: "Content",
  components: {ContentPage},
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
    padding: 20px 20px 20px;
    transition: .2s;
    position: absolute;
    top: 0px;
    background-color: #F5F5F5;
  }
</style>