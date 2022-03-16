<template>
  <RouterLink
      id="menu-item"
      class="menu-item"
      :to="menu.href"
      exact-active-class="active"
  >
    <div :style="{marginLeft}">
      <ISVG
          class="icon"
          :svg="menu.svg"
      />
      <span :style="{display}">{{ menu.title }}</span>
    </div>
  </RouterLink>
</template>

<script>
import ISVG from "@/components/ISVG";
import {mapState} from "vuex";

export default {
  name: "MenuItem",
  components: {ISVG},
  computed: {
    display() {
      return this.isOpenNavigation ? '' : 'none';
    },
    ...mapState(['isOpenNavigation'])
  },
  props: {
    menu: Object,
    marginLeft: String
  },
}
</script>

<style scoped>
.menu-item{
  fill: #868E8E;
  color: #868E8E;
  border-left: 4px #F1F1F1 solid;
  background-color: #F1F1F1;
}

#menu-item,
#menu-item div {
  height: 64px;
  display: flex;
  padding-left: 8px;
  justify-content: space-between;
  align-items: center;
}

#menu-item:hover {
  border-left: 4px #5AC2EE solid;
  background-color: #E1E1E1;
}

.active {
  fill: #5AC2EE;
  color: #5AC2EE;
  border-left: 4px #5AC2EE solid;
}

span {
  text-align: left;
  display: inline-block;
  font-size: 17px;
  user-select: none;
  white-space: nowrap;
}

.icon {
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  vertical-align: center;
  overflow: hidden;
  margin-right: 20px;
}

</style>