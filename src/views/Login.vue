<template>
  <div class="container">
    <div class="form">
      <h1>Login</h1>
      <form class="" v-on:submit.prevent="login">
        <input type="email" placeholder="Email" class="form-control" v-model="email">
        <input type="password" placeholder="Password" class="form-control" v-model="password">
        <input type="submit" value="Login" class="btn btn-primary">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      this.$store.dispatch('inputToken', { email, password })
        .then(() => {
          this.$router.push({ name: 'Dashboard' });
        });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: darkcyan;
  padding: 20px;
}

.form {
  background-color: azure;
  width: 300px;
  margin: auto;
}

h1 {
  padding: 10px;
  background-color: azure;
}

input {
  margin: auto;
  width: 250px;
  margin-top: 10px;
}

input.btn {
  width: 100px;
  margin-bottom: 10px;
}
</style>
