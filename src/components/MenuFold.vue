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
      <div>
        <ISVG
            class="icon"
            :svg="svg1"
        />
        <span>{{ menu.title }}</span>
      </div>
      <ISVG
          class="icon"
          :svg="svg"
          :style="{transform}"
      />
    </div>
    <MenuItem
        v-for="m in menu.menus"
        :key="m.title"
        :menu="m"
        :margin-left="'30px'"
    />
  </div>
</template>

<script>
import ISVG from "@/components/ISVG";
import MenuItem from "@/components/MenuItem";

export default {
  name: "MenuFold",
  components: {MenuItem, ISVG},
  props: {menu: Object},
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
    }
  }
}
</script>

<style scoped>
#menu {
  transition: .3s;
  overflow: hidden;
  cursor: pointer;
}

.head-menu,
.head-menu div {
  height: 64px;
  display: flex;
  padding-left: 15px;
  justify-content: space-between;
  align-items: center;
}

.head-menu .icon {
  margin-right: 20px;
}

span {
  text-align: left;
  display: inline-block;
  color: #868E8E;
  font-size: 18px;
  user-select: none;
}

.head-menu:hover {
  background-color: #cbd7e0;
}

.icon {
  width: 25px;
  height: 25px;
  vertical-align: center;
  overflow: hidden;
  fill: #868E8E;
  transition: .3s;
}
</style>