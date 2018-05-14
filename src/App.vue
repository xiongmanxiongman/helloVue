<template>
  <div id="app">
    <div type="flex" class="row-bg">
      <div class="col1">
        <div class="grid-content bg-purple">
            <div style=" padding: 10px;">
              <el-switch
                v-model="isCollapse"
                active-color="#13ce66"
                inactive-color="#dcdfe6">
              </el-switch>
            </div>
          <!--<el-menu
          :default-active="activeIndex"
          :collapse="isCollapse"
          class="el-menu-vertical-app"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <template v-for="(item) in routes">
            <el-menu-item :index="item.index">
              <i :class="item.class"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>-->
            <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="!isCollapse">
              <template v-for="(item) in routes">
                <template v-if="item.children&&item.children.length">
                  <el-submenu :index="item.index">
                    <template slot="title">
                      <i :class="item.class"></i>
                      <span slot="title">{{item.title}}</span>
                    </template>
                    <template v-for="(cItem) in item.children">
                      <el-menu-item :index="cItem.index">{{cItem.title}}</el-menu-item>
                    </template>
                  </el-submenu>
                </template>
                <template v-else>
                  <el-menu-item :index="item.index">
                    <i :class="item.class"></i>
                    <span slot="title">{{item.title}}</span>
                  </el-menu-item>
                </template>
              </template>
            </el-menu>
        </div>
      </div>
      <div class="col2">
        <div class="grid-content bg-purple-light">
          <router-view/>
        </div>
      </div>
    </div>







          <!--<el-menu
            :default-active="activeIndex"
            class="el-menu"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-for="(item) in routes">
              <el-menu-item :index="item.index">
                <i :class="item.class"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </template>
          </el-menu>-->


  </div>
</template>

<script>
import router from './router'
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1-1',
      isCollapse: true,
      routes:router.options.routes,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.routerSelect(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.routerSelect(key, keyPath);

    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      this.routerSelect(key, keyPath);
    },
    myInit(){
    },
    routerSelect(key, keyPath){
      let myThis = this;
      this.activeIndex = key;
      this.routes.forEach(function (item) {
          if(item.index==key){
            myThis.$router.push({
              path:item.path
            });
          }else if(item.children&&item.children.length){
            item.children.forEach(function (cItem) {
              if(cItem.index==key){
                myThis.$router.push({
                  path:cItem.path
                });
              }
            });
          }
      });
    }
  },
  mounted: function () {
    this.myInit();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header, .el-footer {
  padding: 0;
}

.el-aside {
}

.el-main {
}
.el-aside{
  background-color:#545c64;
}
body{
  margin: 0px;
}
.row-bg {
  display: flex;
  background-color: #f9fafc;
}
.col2{
}
</style>
