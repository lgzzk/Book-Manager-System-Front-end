<template>
  <div
      id="menu"
      ref="menu"
      :style="{height}"
  >
    <span @click="setMenu">{{menu.title}}</span>
    <span
        class="child-menu"
        v-for="m in menu.menus"
        :key="m.title"
    >{{m.title}}</span>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props:{menu: Object},
  data(){
    return {
      flag: true,
      height: '73px',
    }
  },
  methods: {
    setMenu(){
      this.flag = !this.flag
      if (this.flag){
        this.height = '73px'
      }else {
        this.height = this.$refs.menu.scrollHeight + 'px'
      }
    }
  }
}
</script>

<style scoped>
#menu{
  transition: .3s;
  overflow: hidden;
}

.child-menu{
  font-size: 18px;
  padding: 18px 0px 18px 100px;
  background-color: #f6f6f6;
}

span{
  width: 100%;
  display: inline-block;
  color: #868E8E;
  cursor: pointer;
  padding: 24px 60px;
  font-size: 20px;
  user-select: none;
}

span:hover{
  background-color: #e4ecf3;
}
</style>