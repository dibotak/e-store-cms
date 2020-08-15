import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hello: 'hello world',
    access_token: localStorage.getItem('access_token'),
    products: [],
  },
  getters: {
    products(state) {
      return state.products;
    },
    productById(state) {
      return (id) => state.products.filter((el) => el.id === Number(id))[0];
    },
  },
  mutations: {
    inputToken(state) {
      state.access_token = localStorage.getItem('access_token');
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    removeProduct(state, id) {
      const updated = state.products.filter((el) => el.id !== id);
      state.products = updated;
    },
  },
  actions: {
    inputToken(context, { email, password }) {
      return axios({
        method: 'post',
        url: `${process.env.VUE_APP_STORE_API}login`,
        data: {
          email,
          password,
        },
      })
        .then((res) => {
          localStorage.setItem('access_token', res.data.access_token);
          context.commit('inputToken');
        });
    },
    setProducts(context) {
      const accessToken = context.state.access_token;
      axios({
        method: 'get',
        url: `${process.env.VUE_APP_STORE_API}products`,
        headers: {
          access_token: accessToken,
        },
      })
        .then((res) => {
          context.commit('setProducts', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
