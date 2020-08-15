<template>
  <div class="col-8">
    <h1>Edit Product</h1>
    <form @submit.prevent="editProduct">
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" placeholder="Product Name"
          id="name" class="form-control" v-model="product.name" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="image_url" class="col-sm-2 col-form-label">
          Image Url
        </label>
        <div class="col-sm-10">
          <input type="text" placeholder="Image Url" id="image_url"
          class="form-control" v-model="product.image_url" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-sm-2 col-form-label">Price</label>
        <div class="col-sm-10">
          <input type="number" placeholder="Price" id="price"
          class="form-control" min="0" v-model="product.price" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="stock" class="col-sm-2 col-form-label">Stock</label>
        <div class="col-sm-10">
          <input type="number" placeholder="Stock" id="stock"
          class="form-control" min="0" v-model="product.stock" required>
        </div>
      </div>
      <input type="submit" value="Edit Product" class="btn btn-primary">
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0,
      },
    };
  },
  methods: {
    editProduct() {
      // eslint-disable-next-line
      const { name, image_url, price, stock } = this.product;
      const { id } = this.$route.params;
      axios({
        method: 'put',
        url: `${process.env.VUE_APP_STORE_API}products/${id}`,
        data: {
          name, image_url, price, stock,
        },
        headers: {
          access_token: this.$store.state.access_token,
        },
      })
        .then((res) => {
          console.log(res.data);
          this.$router.push('/dashboard');
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          console.log('edit done');
        });
    },
  },
  created() {
    const { id } = this.$route.params;
    this.product = this.$store.getters.productById(id);
  },
};
</script>
