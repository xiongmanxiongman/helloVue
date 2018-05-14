<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/nihao/foo">/nihao/foo</router-link></li>
      <li><router-link to="/nihao/bar">/nihao/bar</router-link></li>
      <li><router-link to="/user/evan/post/123">/user/evan/post/123</router-link></li>
    </ul>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页1</el-button>
      <el-button type="primary">下一页1<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
