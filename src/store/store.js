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
    cart: [],
    isModalOpen: false,
  },

  getters: {
    allProducts: state => state.products,
    totalPrice(state) {
      return state.cart.reduce((sum, item) => Number(sum) + Number(item.price * item.quantity), 0)
    },
    isModalOpen(state) {
      return state.isModalOpen
    }
  },

  mutations: {
    addNewProduct(state, newProduct) {
      const prodTitle = state.products.find((p) => p.title === newProduct.title)
      if (prodTitle) {
        alert('Такой товар уже существует.')
      } else {
        state.products.push(newProduct)
      }

    },
    updateProduct(state, updatedProduct) {
      const prodTitle = state.products.find((p) => p.title === updatedProduct.title)
      if (prodTitle) {
        alert('Такой товар уже существует.')
      } else {
        const index = state.products.findIndex(products => products.id === updatedProduct.id);
        if (index !== -1) {
          state.products.splice(index, 1, { ...state.products[index], ...updatedProduct });
        }
      }
    },
    addToCart(state, product) {
      const prodInStore = state.products.find((prod) => prod.id === product.id)
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= prodInStore.count) {
          alert('товар закончился')
        } else {
          existingItem.quantity += 1;
        }
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },

    increaseQuantity(state, id) {
      const prodInStore = state.products.find((prod) => prod.id === id);
      const item = state.cart.find(item => item.id === id);
      if (item) {
        if (item.quantity + 1 <= prodInStore.count) {
          item.quantity++
        } else {
          alert('товар закончился')
        }
      }
    },
    decreaseQuantity(state, id) {
      const item = state.cart.find(item => item.id === id);
      if (item && item.quantity > 0) {
        item.quantity--;
      }
      if (item.quantity == 0) {
        state.cart = state.cart.filter(item => item.id !== id);
      }
    },

    deleteCard(state, id) {
      state.cart = state.cart.filter(item => item.id !== id);
    },
    modalOpen(state) {
      state.isModalOpen = true
    },
    modalClose(state) {
      state.isModalOpen = false
    },
  },


  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
  },

})

export default store;