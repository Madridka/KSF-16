import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    name: "kirill",
    order: [
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
        {
          id: 6,
          title: "Книга",
          count: "1",
          price: "1200",
          description: "Бестселлер в твердом переплете",
        },
        {
          id: 7,
          title: "Яблоки",
          count: "10",
          price: "150",
          description: "Десять спелых красных яблок",
        },
        {
          id: 8,
          title: "Наушники",
          count: "1",
          price: "3500",
          description: "Беспроводные наушники",
        },
        {
          id: 9,
          title: "Шоколад",
          count: "6",
          price: "120",
          description: "Шесть плиток темного шоколада",
        },
        {
          id: 10,
          title: "Рюкзак",
          count: "1",
          price: "2800",
          description: "Прочный рюкзак для путешествий",
        },
        {
          id: 11,
          title: "Молоко",
          count: "3",
          price: "75",
          description: "Три литра свежего молока",
        },
        {
          id: 12,
          title: "Лампа",
          count: "2",
          price: "950",
          description: "Две настольные лампы с регулировкой яркости",
        },
      ],
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;