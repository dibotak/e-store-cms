<template>
  <div class="col-8">
    <button class="btn btn-primary btn-sm add" @click="add">Add Product</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image Url</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow
          v-for="(product, index) in products"
          :key="index"
          :name="product.name"
          :image_url="product.image_url"
          :price="product.price"
          :stock="product.stock"
          :id="product.id"
        ></ProductRow>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductRow from '../components/ProductRow.vue';

export default {
  name: 'ProductList',
  data() {
    return {
      products: null,
    };
  },
  methods: {
    add() {
      this.$router.push('/dashboard/add');
    },
  },
  components: {
    ProductRow,
  },
  created() {
    this.$store.dispatch('setProducts');
    setInterval(() => {
      this.products = this.$store.getters.products;
    }, 1000);
  },
};
</script>

<style scoped>
.add {
  float: left;
  margin: 5px;
}
</style>
