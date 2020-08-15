<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ image_url }}</td>
    <td>{{ price }}</td>
    <td>{{ stock }}</td>
    <td>
      <button class="btn btn-sm btn-success" @click="edit">Edit</button> |
      <button class="btn btn-sm btn-danger" @click="remove">Delete</button>
    </td>
  </tr>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductRow',
  props: ['name', 'image_url', 'price', 'stock', 'id'],
  methods: {
    edit() {
      this.$router.push(`/dashboard/edit/${this.id}`);
    },
    remove() {
      axios({
        method: 'delete',
        url: `${process.env.VUE_APP_STORE_API}products/${this.id}`,
        headers: {
          access_token: this.$store.state.access_token,
        },
      })
        .then((res) => {
          console.log(res.data);
          this.$store.commit('removeProduct', this.id);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          console.log('delete done');
        });
    },
  },
};
</script>
