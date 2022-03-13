<template>
  <div
      id="menu"
      ref="menu"
      :style="{height}"
  >
    <div
        class="head-menu"
        @click="setMenu"
    >
      <div class="head-menu-div">
        <ISVG
            class="icon"
            :svg="svg1"
        />
        <span :style="{display}">{{ menu.title }}</span>
      </div>
      <ISVG
          class="icon"
          :svg="svg"
          :style="{transform, display}"
      />
    </div>
    <MenuItem
        v-for="m in menu.menus"
        :key="m.title"
        :menu="m"
        :margin-left="'25px'"
    />
  </div>
</template>

<script>
import ISVG from "@/components/ISVG";
import MenuItem from "@/components/MenuItem";
import {mapState} from "vuex";

export default {
  name: "MenuFold",
  components: {MenuItem, ISVG},
  props: {menu: Object},
  computed: {
    display() {
      return this.isOpenNavigation ? 'inline-block' : 'none'
    },
    ...mapState(['isOpenNavigation'])
  },
  data() {
    return {
      flag: true,
      height: '64px',
      svg: {
        xlink: '#icon-jiantou'
      },
      svg1: {
        xlink: '#icon-a-3-shouye'
      },
      transform: 'rotate(0deg)',
    }
  },
  methods: {
    setMenu() {
      this.flag = !this.flag
      if (this.flag) {
        this.height = '64px'
        this.transform = 'rotate(0deg)'
      } else {
        this.transform = 'rotate(180deg)'
        this.height = this.$refs.menu.scrollHeight + 'px'
      }
    },
  }
}
</script>

<style scoped>
#menu {
  transition: height .3s;
  overflow: hidden;
  cursor: pointer;
}

.head-menu-div{
  border-left: 4px rgba(168, 58, 58, 0) solid;
}

.head-menu,
.head-menu-div {
  height: 64px;
  display: flex;
  flex-shrink: 0;
  padding-left: 8px;
  justify-content: space-between;
  align-items: center;
}

.head-menu .icon {
  margin-right: 20px;
}

span {
  text-align: left;
  color: #868E8E;
  font-size: 17px;
  user-select: none;
}

.head-menu:hover {
  background-color: #E1E1E1;
}

.icon {
  width: 23px;
  height: 23px;
  vertical-align: center;
  overflow: hidden;
  fill: #868E8E;
  transition: .3s;
}

</style>