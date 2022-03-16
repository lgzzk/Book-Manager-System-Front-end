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
      <ISVG
          class="icon"
          :svg="svg1"
      />
      <div
          class="head-menu-div"
          :style="{display}"
      >
        <span>{{ menu.title }}</span>
        <ISVG
            class="icon"
            :svg="svg"
            :style="{transform}"
        />
      </div>
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
      return this.isOpenNavigation ? 'flex' : 'none'
    },
    height() {
      return this.isFold ? '64px' : this.scrollHeight
    },
    transform() {
      return this.isFold ? 'rotate(0deg)' : 'rotate(180deg)'
    },
    ...mapState(['isOpenNavigation'])
  },
  data() {
    return {
      isFold: true,
      menuIndex: null,
      scrollHeight: '',
      svg: {
        xlink: '#icon-jiantou'
      },
      svg1: {
        xlink: '#icon-a-3-shouye'
      },
    }
  },
  mounted() {
    this.scrollHeight = this.$refs.menu.scrollHeight + 'px'
  },
  methods: {
    setMenu() {
      let index = this.$refs.menu.getAttribute('index');
      this.isFold = !this.isFold
      if (this.isFold) {
        this.$bus.$emit('setMenus', -1)
      } else {
        this.$bus.$emit('setMenus', index)
      }
    }
  }
}
</script>

<style scoped>
#menu {
  transition: height .2s;
  overflow: hidden;
  cursor: pointer;
}

.head-menu {
  height: 64px;
  display: flex;
  padding-left: 20px;
  align-items: center;
}

.head-menu-div {
  width: 70%;
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: space-between;
}

span {
  text-align: left;
  color: #868E8E;
  font-size: 17px;
  user-select: none;
  white-space: nowrap;
}

.head-menu:hover {
  background-color: #E1E1E1;
}

.icon {
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  vertical-align: center;
  overflow: hidden;
  fill: #868E8E;
  transition: .3s;
}

</style>