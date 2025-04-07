<template>
  <div class="admin">
    <addForm
      :is-visible="isModalOpen"
      @close="isModalOpen = false"
      formTitle="Добавление товара"
    />

    <div class="btn-center">
      <button class="btn btn-add" @click="isModalOpen = !isModalOpen">
        Добавить товар
      </button>
    </div>
    <hr />
    <ol>
      <li v-for="product in allProducts" :key="product.id">
        <div v-if="editingId !== product.id">
          <img :src="product.poster" :alt="product.title" />
          <strong>Товар: </strong> {{ product.title }}
          <br />
          <strong>Количество: </strong>{{ product.count }} шт.
          <br />
          <strong>Стоимость за шт.: </strong> {{ product.price }} руб.
          <br />
          <strong>Короткое описание товара: </strong>
          {{ product.shortDesc }}
          <br />
          <strong>Полное описание товара: </strong>
          {{ product.fullDesc }}
          <br />
          <button class="btn btn-edit" @click="startEdit(product.id)">
            Редактировать
          </button>
          <button class="btn btn-delete" @click="deleteProd(product.id)">
            Удалить
          </button>
        </div>
        <div v-else>
          <img :src="editPoster" :alt="editTitle" width="100" />
          <input type="file" @change="handleImageUpload" accept="image/*" />
          <input type="text" v-model="editTitle" placeholder="Название" />
          <input type="number" v-model="editCount" placeholder="Количество" />
          <input type="number" v-model="editPrice" placeholder="Стоимость" />
          <textarea
            type="text"
            v-model="editshortDesc"
            placeholder="Короткое описание"
          />
          <textarea
            type="text"
            v-model="editfullDesc"
            placeholder="Полное описание"
          />

          <br />
          <button
            :disabled="!isDisabled"
            class="btn btn-save"
            @click="saveEdit"
          >
            Сохранить
          </button>
          <button class="btn btn-cancel" @click="cancelEdit">Отмена</button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import addForm from "../components/addForm.vue";

export default {
  name: "adminPage",
  components: {
    addForm,
  },
  data() {
    return {
      editingId: null,
      editTitle: "",
      editPoster: "",
      editCount: "",
      editPrice: "",
      editshortDesc: "",
      editfullDesc: "",

      isModalOpen: false,
    };
  },

  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
    isDisabled() {
      return (
        this.editTitle !== "" &&
        this.editPoster !== "" &&
        this.editCount !== "" &&
        this.editPrice !== "" &&
        this.editshortDesc !== "" &&
        this.editfullDesc !== ""
      );
    },
  },

  methods: {
    startEdit(id) {
      const product = this.allProducts.find((p) => p.id === id);
      this.editingId = id;
      this.editTitle = product.title;
      this.editPoster = product.poster;
      this.editCount = product.count;
      this.editPrice = product.price;
      this.editshortDesc = product.shortDesc;
      this.editfullDesc = product.fullDesc;
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.editPoster = URL.createObjectURL(file);
      }
    },

    saveEdit() {
      const updatedProduct = {
        id: this.editingId,
        title: this.editTitle,
        poster: this.editPoster,
        count: this.editCount,
        price: this.editPrice,
        shortDesc: this.editshortDesc,
        fullDesc: this.editfullDesc,
      };
      this.$store.commit("updateProduct", updatedProduct); // Обновляем через Vuex
      this.cancelEdit();
    },

    cancelEdit() {
      this.editingId = null;
      this.editTitle = "";
      this.editPoster = "";
      this.editCount = "";
      this.editPrice = "";
      this.editshortDesc = "";
      this.editfullDesc = "";
    },

    deleteProd(id) {
      this.$store.state.products = this.$store.state.products.filter(
        (p) => p.id !== id
      );
    },
  },
};
</script>

<style>
</style>