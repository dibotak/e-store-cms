<template>
  <div class="col-8">
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" placeholder="Product Name"
          id="name" class="form-control" v-model="name">
        </div>
      </div>
      <div class="form-group row">
        <label for="image_url" class="col-sm-2 col-form-label">
          Image Url
        </label>
        <div class="col-sm-10">
          <input type="text" placeholder="Image Url" id="image_url"
          class="form-control" v-model="image_url">
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-sm-2 col-form-label">Price</label>
        <div class="col-sm-10">
          <input type="number" placeholder="Price" id="price"
          class="form-control" min="0" v-model="price">
        </div>
      </div>
      <div class="form-group row">
        <label for="stock" class="col-sm-2 col-form-label">Stock</label>
        <div class="col-sm-10">
          <input type="number" placeholder="Stock" id="stock"
          class="form-control" min="0" v-model="stock">
        </div>
      </div>
      <input type="submit" value="Add Product" class="btn btn-primary">
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0,
    };
  },
  methods: {
    addProduct() {
      const {
        name, price, stock,
      } = this;
      const imageUrl = this.image_url;
      const router = this.$router;
      const accessToken = this.$store.state.access_token;

      axios({
        method: 'post',
        url: `${process.env.VUE_APP_STORE_API}products`,
        headers: {
          access_token: accessToken,
        },
        data: {
          name,
          image_url: imageUrl,
          price,
          stock,
        },
      })
        .then((res) => {
          router.push('/dashboard');
          console.log(`product ${res.data.name} added`);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          console.log('add product done!');
        });
    },
  },
};
</script>
