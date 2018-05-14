<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">/Hello</router-link>
    <el-button type="primary" :loading="true">{{ msg }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'Apple',
  data () {
    return {
      msg: 'Apple'
    }
  },
  mounted () {
    console.log(this.$route.params);
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
