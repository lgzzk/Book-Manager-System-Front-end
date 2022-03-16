<template>
  <div
      id="navigation"
      :style="{width}"
      @mouseenter="hover"
      @mouseleave="hover"
  >
    <MenuItem :menu="home"/>
    <Menu
        v-for="(m, i) in menus"
        :menu="m"
        :key="m.title"
        ref="menus"
        :index="i"
    />
    <div
        @mouseenter.stop="hover"
        @mouseleave.stop="hover"
    >
      <NavigationFooter/>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/MenuFold";
import MenuItem from "@/components/MenuItem";
import {mapMutations, mapState} from "vuex";
import NavigationFooter from "@/pages/NavigationFooter";

export default {
  name: "Navigation",
  components: {NavigationFooter, MenuItem, Menu},
  computed: {
    width() {
      return this.isOpenNavigation ? '230px' : '64px'
    },
    ...mapState(['isOpenNavigation'])
  },
  mounted() {
    this.$bus.$on('setMenus', (menuIndex) => {
      this.menuIndex = menuIndex
      this.$refs.menus.forEach((value, index) => {
        if (index != menuIndex) {
          value.isFold = true
        }
      })
    })
    this.$bus.$on('openMenu', (isFold) => {
      this.isFold = isFold;
      this.openMenu()
    })
  },
  methods: {
    openMenu() {
      this.setNavigation()
      let menu = this.$refs.menus[this.menuIndex]
      if (menu) {
        menu.isFold = !this.isOpenNavigation
      }
    },
    hover() {
      if (this.isFold) {
        this.openMenu()
      }
    },
    ...mapMutations(['setNavigation'])
  },
  data() {
    return {
      isFold: null,
      menuIndex: null,
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
  left: 0;
  z-index: 20;
  padding-top: 100px;
  position: relative;
  flex-flow: column;
  background-color: #fefefe;
}

.menu-item {
  background-color: #FFFFFF;
}

</style>