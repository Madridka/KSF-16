import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: "Вода",
        poster: require(`@/images/1.png`),
        count: "4",
        price: "56",
        shortDesc: "Четыре бутылки воды",
        fullDesc: "Четыре бутылки чистейшей питьевой воды бренда 'AquaPure'. Источник — горные родники Алтая. Объем каждой бутылки — 0,5 литра. Прозрачная, без вкуса и запаха, высочайшее качество очистки."
      },
      {
        id: 2,
        title: "Хлеб",
        poster: require(`@/images/2.png`),
        count: "2",
        price: "35",
        shortDesc: "Два батона",
        fullDesc: "Два свежайших батона хлеба 'Золотой Колос'. Пшеничный хлеб с хрустящей золотистой корочкой и мягким мякишем. Выпечен по традиционному рецепту, без добавок, натуральный вкус."
      },
      {
        id: 3,
        title: "Смартфон",
        poster: require(`@/images/3.png`),
        count: "1",
        price: "24990",
        shortDesc: "Телефон с камерой",
        fullDesc: "Смартфон 'TechNova X7' в черном матовом корпусе. Оснащен камерой 48 МП, экраном 6,5 дюйма и мощным процессором. Высокое качество сборки, стильный дизайн и надежность в каждом касании."
      },
      {
        id: 4,
        title: "Кофе",
        poster: require(`@/images/4.png`),
        count: "3",
        price: "450",
        shortDesc: "Три пачки кофе",
        fullDesc: "Три пачки молотого кофе 'Barista Blend'. Средний помол, насыщенный вкус с нотами темного шоколада и легкой карамельной сладостью. Арабика премиум-класса из Эфиопии, обжарка высшего качества."
      },
      {
        id: 5,
        title: "Футболка",
        poster: require(`@/images/5.png`),
        count: "5",
        price: "799",
        shortDesc: "Пять футболок",
        fullDesc: "Пять хлопковых футболок бренда 'CottonLife'. Цвета: белый, черный, серый, синий, зеленый. 100% натуральный хлопок, мягкая текстура, идеальная посадка и долговечное качество."
      }
    ],
    cart: []
  },

  getters: {
    allProducts: state => state.products,
  },

  mutations: {
    addNewProduct(state, newProduct) {
      state.products.push(newProduct)
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(products => products.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
      }
    },
    addToCart(state, product) {
      state.cart.push(product)
    }

  },

  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    }
  },
})

export default store;