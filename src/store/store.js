import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [
        {
          id: 1,
          title: "Вода",
          count: "4",
          price: "56",
          description: "Четыре бутылки чистой воды",
        },
        {
          id: 2,
          title: "Хлеб",
          count: "2",
          price: "35",
          description: "Два свежих батона",
        },
        {
          id: 3,
          title: "Смартфон",
          count: "1",
          price: "24990",
          description: "Современный телефон с камерой",
        },
        {
          id: 4,
          title: "Кофе",
          count: "3",
          price: "450",
          description: "Три пачки молотого кофе",
        },
        {
          id: 5,
          title: "Футболка",
          count: "5",
          price: "799",
          description: "Пять хлопковых футболок",
        },
      ],
  },
  mutations: {
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(products => products.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
      }
    },

    addNewProduct(state, newProduct) {
        state.products.push(newProduct)
    }
  },
  getters: {
    allProducts: state => state.products,
  },
})

export default store;