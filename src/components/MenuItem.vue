<template>
  <RouterLink
      :to="menu.href"
      exact-active-class="active"
  >
    <div id="menu-item">
      <div :style="{marginLeft}">
        <ISVG
            class="icon"
            :svg="menu.svg"
        />
        <span>{{ menu.title }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script>
import ISVG from "@/components/ISVG";

export default {
  name: "MenuItem",
  components: {ISVG},
  props: {
    menu: Object,
    marginLeft: String
  },
}
</script>

<style scoped>
#menu-item,
#menu-item div{
  height: 64px;
  display: flex;
  padding-left: 15px;
  justify-content: space-between;
  align-items: center;
}

#menu-item:hover{
  background-color: #cbd7e0;
}

.active{
  background-color: #cbd7e0;
}

span {
  text-align: left;
  display: inline-block;
  color: #868E8E;
  font-size: 18px;
  user-select: none;
}

.icon {
  width: 25px;
  height: 25px;
  vertical-align: center;
  overflow: hidden;
  fill: #868E8E;
  margin-right: 20px;
  transition: .3s;
}

</style>