<template>
  <div class="hello">
    <div class="jumbotron">
      <h1>Welcome to E-Commerce</h1>
      <button v-on:click="login" class="btn btn-lg btn-primary">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    login() {
      this.$router.push('login');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
