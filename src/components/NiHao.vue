<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">/Hello</router-link>
    <ul>
      <li><router-link to="/nihao/foo">/nihao/foo</router-link></li>
      <li><router-link to="/nihao/bar">/nihao/bar</router-link></li>
      <li><router-link to="/user/evan/post/123">/user/evan/post/123</router-link></li>
    </ul>
    <el-button type="primary" :loading="true">加载中</el-button>
  </div>
</template>

<script>
export default {
  name: 'NiHao',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log(this.$route.params);
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to, from,this.$route.params);
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
