<template>
  <div>
    <div class="navigation-footer" @click="openMenu">
      <div class="navigation-footer-div">
        <ISVG
            class="icon"
            :svg="svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ISVG from "@/components/ISVG";

export default {
  name: "NavigationFooter",
  components: {ISVG},
  data() {
    return {
      isFold: false,
      svg: {
        // xlink: '#icon-zhankai'
        xlink: '#icon-toggle-right'
      },
    }
  },
  methods: {
    openMenu() {
      this.isFold = !this.isFold
      // this.svg.xlink = this.isFold ? '#icon-shouqi' : '#icon-zhankai'
      this.svg.xlink = this.isFold ? '#icon-toggle-left' : '#icon-toggle-right'
      this.$bus.$emit('openMenu', this.isFold)
    }
  }
}
</script>

<style scoped>
.navigation-footer {
  fill: #868E8E;
  left: 0;
  bottom: 64px;
  height: 64px;
  width: 100%;
  position: absolute;
  background-color: #F1F1F1;
}

.icon {
  width: 23px;
  height: 23px;
  vertical-align: center;
  overflow: hidden;
}

.navigation-footer-div {
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.navigation-footer-div:hover {
  fill: #5AC2EE;
  background-color: #E1E1E1;
}
</style>