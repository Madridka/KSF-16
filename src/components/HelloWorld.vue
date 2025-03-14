<template>

  <div class="app">
    <div id="app" class="app">
      <form  class="container">
        <p>Текущее состояние</p>
        <input type="text" v-model="title" placeholder="Название товара">
        <input type="number" v-model="price" placeholder="Стоимость">
        <input type="number" v-model="count" placeholder="Количество">
        
        <button @click="addProduct">Добавить товар</button>
        <button @click="fullReset">Сбросить покупки</button>
        <button>HELLO</button>
      </form>

      

      <ol>
        <li v-for="product in order" :key="product.id">
          <div v-if="editingId !== product.id">
            {{ product.title }}
            <strong>Стоимость: </strong> {{ product.price }},
            <strong>Количество: </strong> {{ product.count }}
            <button @click="startEditing(product.id)">Редактировать</button>
            <button @click="deleteProd(product.id)">Удалить</button>
          </div>
          <div v-else>
            <input type="text" v-model="editTitle" placeholder="Название">
            <input type="number" v-model="editPrice" placeholder="Стоимость">
            <input type="number" v-model="editCount" placeholder="Количество">
            <button @click="saveEdit">Сохранить</button>
            <button @click="cancelEdit">Отмена</button>
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
      title: '',
      price: '',
      count: '', 
      
      order: [], 

      editingId: null,
      editTitle: '',
      editPrice: '',
      editCount: ''
    }
  },

  methods: {
    addProduct(e) {
      e.preventDefault();
      this.order.push({
        id: Date.now(),
        title: this.title,
        price: Number(this.price),
        count: Number(this.count),
      })

      this.title = '',
      this.price = '',
      this.count = ''
    },

    reset() {
      // e.preventDefault();
      this.title = '',
      this.price = '',
      this.count = ''
    },

    startEditing(id) {
      const product = this.order.find(p => p.id === id);
      this.editingId = id;
      this.editTitle = product.title;
      this.editPrice = product.price;
      this.editCount = product.count;
    },

    saveEdit() {
      const index = this.order.findIndex(p => p.id === this.editingId);
      this.order[index] = {
        id: this.editingId,
        title: this.editTitle,
        price: Number(this.editPrice),
        count: Number(this.editCount)
      };
      this.cancelEdit();
    },

    cancelEdit() {
      this.editingId = null;
      this.editTitle = '';
      this.editPrice = '';
      this.editCount = '';
    }
    
  },

  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (const product of this.order) {
        totalPrice += product.price * product.count;
      }
      return totalPrice;
    }
  }
}

</script>

<style>

.app {
  padding: 15px;
}

</style>
