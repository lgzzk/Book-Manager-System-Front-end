<template>
  <div id="navigation">
    <Menu v-for="m in menus" :menu="m" :key="m.title"/>
  </div>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: "Navigation",
  components: {Menu},
  data() {
    return {
      menus: [
        {
          title: '首页',
        },
        {
          title: '系统设置',
          menus: [
            {
              title: '图书馆信息'
            },
            {
              title: '参数设置'
            },
            {
              title: '书架设置'
            },
            {
              title: '管理员设置'
            }
          ]
        },
        {
          title: '读者管理',
          menus: [
            {
              title: '读者类型管理'
            },
            {
              title: '读者档案管理'
            },
          ]
        },
        {
          title: '图书借还',
          menus: [
            {
              title: '图书借阅'
            },
            {
              title: '图书续借'
            },
            {
              title: '图书归还'
            },
            {
              title: '图书借阅查询'
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
#navigation {
  width: 300px;
  height: 100%;
  left: 0px;
  z-index: 10;
  display: flex;
  overflow: auto;
  padding-top: 200px;
  flex-direction: column;
  justify-content: start;
  position: absolute;
  background-color: #fefefe;
}

</style>