<template>
  <div
      id="navigation"
      :style="{width}"
  >
    <MenuItem :menu="home"/>
    <Menu v-for="m in menus" :menu="m" :key="m.title"/>
    <div class="navigation-footer" @click="setNavigation">
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
import Menu from "@/components/MenuFold";
import MenuItem from "@/components/MenuItem";
import {mapMutations, mapState} from "vuex";
import ISVG from "@/components/ISVG";

export default {
  name: "Navigation",
  components: {ISVG, MenuItem, Menu},
  computed: {
    width(){
      return this.isOpenNavigation ? '230px' : '64px'
    },
    ...mapState(['isOpenNavigation'])
  },
  methods: {
    ...mapMutations(['setNavigation'])
  },
  data() {
    return {
      svg: {
        xlink: '#icon-a-115-lanmuguanli'
      },
      home: {
        title: '首页',
        href: '/index',
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
              href: '/index/Library-set',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '参数设置',
              href: '/index/param-set',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '书架设置',
              href: '/index/void',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '管理员设置',
              href: '/index/void',
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
              href: '/index/void',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '读者档案管理',
              href: '/index/void',
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
              href: '/index/void',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '图书续借',
              href: '/index/void',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '图书归还',
              href: '/index/void',
              svg: {
                xlink: '#icon-shujia'
              }
            },
            {
              title: '图书借阅查询',
              href: '/index/void',
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
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: width .2s;
  left: 0px;
  z-index: 20;
  padding-top: 100px;
  position: relative;
  flex-flow: column;
  background-color: #fefefe;
}

.navigation-footer{
  fill: #868E8E;
  left: 0;
  bottom: 64px;
  height: 64px;
  width: 100%;
  position: absolute;
  background-color: #F1F1F1;
}

.menu-item{
  background-color: #FFFFFF;
}

.icon {
  width: 23px;
  height: 23px;
  vertical-align: center;
  overflow: hidden;
}

.navigation-footer-div{
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.navigation-footer-div:hover{
  fill: #5AC2EE;
  background-color: #E1E1E1;
}
</style>