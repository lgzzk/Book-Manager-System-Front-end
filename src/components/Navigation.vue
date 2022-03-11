<template>
  <div id="navigation">
    <MenuItem :menu="home"/>
    <Menu v-for="m in menus" :menu="m" :key="m.title"/>
  </div>
</template>

<script>
import Menu from "@/components/MenuFold";
import MenuItem from "@/components/MenuItem";

export default {
  name: "Navigation",
  components: {MenuItem, Menu},
  data() {
    return {
      home: {
        title: '首页',
        href: '/index/home',
        svg: {
          xlink: '#icon-a-3-shouye'
        },
      },
      menus: [
        {
          title: '系统设置',
          menus: [
            {
              title: '图书馆信息',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '参数设置',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '书架设置',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '管理员设置',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
            }
          ]
        },
        {
          title: '读者管理',
          menus: [
            {
              title: '读者类型管理',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '读者档案管理',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
            },
          ]
        },
        {
          title: '图书借还',
          menus: [
            {
              title: '图书借阅',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '图书续借',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '图书归还',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '图书借阅查询',
              href: '/index/home',
              svg: {
                xlink: '#icon-shujia'
              }
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
  padding-top: 200px;
  flex-direction: column;
  justify-content: start;
  position: absolute;
  background-color: #fefefe;
}

</style>