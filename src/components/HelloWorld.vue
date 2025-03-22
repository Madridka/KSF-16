<template>
  <div class="app">
    <div id="app" class="app">
      <form @submit="addProduct" class="container">
        <p>{{ formTitle }}</p>
        <input type="text" v-model="title" placeholder="Название товара" />
        <input type="number" v-model="count" placeholder="Количество, шт" />
        <input type="number" v-model="price" placeholder="Стоимость, руб" />
        <button :disabled="!isDisable" class="add-btn">Добавить товар</button>
      </form>

      <ol>
        <li v-for="product in order" :key="product.id">
          <div v-if="editingId !== product.id">
            {{ product.title }} ||

            <strong>Количество: </strong> {{ product.count }} шт. || ,
            <strong>Стоимость за шт: </strong> {{ product.price }} руб.
            <button class="edit-btn" @click="startEditing(product.id)">
              Редактировать
            </button>
            <button class="delete-btn" @click="deleteProd(product.id)">
              Удалить
            </button>
          </div>
          <div v-else>
            <input type="text" v-model="editTitle" placeholder="Название" />
            <input type="number" v-model="editPrice" placeholder="Стоимость" />
            <input type="number" v-model="editCount" placeholder="Количество" />
            <button class="save-btn" @click="saveEdit">Сохранить</button>
            <button class="cancel-btn" @click="cancelEdit">Отмена</button>
          </div>
        </li>
      </ol>

      <div v-if="totalPrice > 0">
        Стоимость покупки: <strong> {{ totalPrice }} рублей </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      price: "",
      count: "",

      order: [],

      editingId: null,
      editTitle: "",
      editPrice: "",
      editCount: "",
    };
  },

  methods: {
    addProduct(e) {
      e.preventDefault();
      this.order.push({
        id: Date.now(),
        title: this.title,
        price: Number(this.price),
        count: Number(this.count),
      });

      (this.title = ""), (this.price = ""), (this.count = "");
    },

    startEditing(id) {
      this.formTitle = "Редактирование товара";
      const product = this.order.find((p) => p.id === id);
      this.editingId = id;
      this.editTitle = product.title;
      this.editPrice = product.price;
      this.editCount = product.count;
    },

    saveEdit() {
      const index = this.order.findIndex((p) => p.id === this.editingId);
      this.order[index] = {
        id: this.editingId,
        title: this.editTitle,
        price: Number(this.editPrice),
        count: Number(this.editCount),
      };
      this.cancelEdit();
    },

    cancelEdit() {

      this.editingId = null;
      this.editTitle = "";
      this.editPrice = "";
      this.editCount = "";
    },

    deleteProd(id) {
      this.order = this.order.filter((p) => p.id !== id);
    },
  },

  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (const product of this.order) {
        totalPrice += product.price * product.count;
      }
      return totalPrice;
    },
    isDisable() {
      return this.title !== '' && this.price !== '' && this.count !== '';
    },
    formTitle() {
      if (this.editingId) {
        return "Редактирование товара";
      } else {
        return "Добавление товара";
      }
    },
  },
};
</script>

<style>
.app {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.container {
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container p {
  margin: 0 0 15px 0;
  font-size: 18px;
  color: #333;
}

.container input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
}

.container input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

.add-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.add-btn:hover {
  background-color: #45a049;
}

ol {
  margin: 0;
  padding-left: 20px;
}

li {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

li strong {
  color: #666;
}

.edit-btn,
.delete-btn,
.save-btn,
.cancel-btn {
  padding: 6px 12px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s;
}

.edit-btn {
  background-color: #2196f3;
  color: white;
}

.edit-btn:hover {
  background-color: #1e87db;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.delete-btn:hover {
  background-color: #da190b;
}

.save-btn {
  background-color: #4caf50;
  color: white;
}

.save-btn:hover {
  background-color: #45a049;
}

.cancel-btn {
  background-color: #757575;
  color: white;
}

.cancel-btn:hover {
  background-color: #616161;
}

li input {
  padding: 6px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
}

.total {
  margin-top: 20px;
  padding: 10px;
  background-color: #e8f5e9;
  border-radius: 4px;
  text-align: right;
  font-size: 16px;
}
</style>
