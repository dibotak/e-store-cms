<template>
  <div class="dashboard row">
    <nav class="nav flex-column col-3">
      <a class="nav-link active" href="#products" v-on:click.prevent="products">Products</a>
      <a class="nav-link active" href="#logout" v-on:click.prevent="logout">Logout</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logout() {
      localStorage.removeItem('access_token');
      this.$router.push('/');
    },
    products() {
      if (this.$router.currentRoute.name !== 'Dashboard') {
        this.$router.push({ name: 'Dashboard' }).catch((err) => {
          console.log(err);
        });
      }
    },
  },
};
</script>
