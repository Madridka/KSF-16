<template>
  <div class="app">
    <addForm
      :is-visible="isModalOpen"
      @close="isModalOpen = false"
      :order="order"
      formTitle="Добавление товара"
      @add-product="addProduct"
    />

    <div class="btn-center">
      <button class="btn btn-add" @click="isModalOpen = !isModalOpen">
        Хочешь добавить товар? нажми сюда
      </button>
    </div>

    <shopList
      :order="order"
      :editingId="editingId"
      :editTitle="editTitle"
      :editPrice="editPrice"
      :editCount="editCount"
      :editDescription="editDescription"
      @start-edit="startEditing"
      @save-edit="saveEdit"
      @cancel-edit="cancelEdit"
      @delete-prod="deleteProd"
    />
  </div>
</template>

<script>
import addForm from "./addForm.vue";
import ShopList from "./shopList.vue";

export default {
  name: "App",
  components: {
    addForm,
    ShopList,
  },
  data() {
    return {
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
          description: "Пять хлопковых футболок разных цветов",
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
          description: "Беспроводные наушники с шумоподавлением",
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

      editingId: null,
      editTitle: "",
      editPrice: "",
      editCount: "",
      editDescription: "",

      isModalOpen: false,
    };
  },

  methods: {
    addProduct(product) {
      this.order.push(product);
    },

    startEditing(id) {
      this.formTitle = "Редактирование товара";
      const product = this.order.find((p) => p.id === id);
      this.editingId = id;
      this.editTitle = product.title;
      this.editPrice = product.price;
      this.editCount = product.count;
      this.editDescription = product.description;
    },

    saveEdit(updatedProduct) {
      const index = this.order.findIndex((p) => p.id === this.editingId);
      if (index !== -1) {
        this.order[index] = {
          id: this.editingId,
          title: updatedProduct.title,
          price: Number(updatedProduct.price),
          count: Number(updatedProduct.count),
          description: updatedProduct.description,
        };
      }
      this.cancelEdit();
    },

    cancelEdit() {
      this.editingId = null;
      this.editTitle = "";
      this.editPrice = "";
      this.editCount = "";
      this.editDescription = "";
    },

    deleteProd(id) {
      this.order = this.order.filter((p) => p.id !== id);
    },
  },

  computed: {},
};
</script>

<style>
</style>
