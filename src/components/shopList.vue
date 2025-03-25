<template>
  <div class="product">
    <ol class="product__item">
      <li v-for="product in order" :key="product.id">
        <div v-if="editingId !== product.id">
          <strong>Товар: </strong> {{ product.title }}
          <br />
          <strong>Количество: </strong>{{ product.count }} шт. ||
          <strong>Стоимость за шт.: </strong> {{ product.price }} руб.
          <br />
          <strong>Описание товара: </strong>
          {{ product.description }}
          <br />
          <button class="btn btn-edit" @click="startEdit(product.id)">
            Редактировать
          </button>
          <button class="btn btn-delete" @click="deleteProd(product.id)">
            Удалить
          </button>
        </div>
        <div v-else>
          <input type="text" v-model="localEditTitle" placeholder="Название" />
          <input
            type="number"
            v-model="localEditCount"
            placeholder="Количество"
          />
          <input
            type="number"
            v-model="localEditPrice"
            placeholder="Стоимость"
          />
          <textarea
            type="text"
            v-model="localEditDescription"
            placeholder="Описание"
          />
          <button class="btn btn-save" @click="saveEdit">Сохранить</button>
          <button class="btn btn-cancel" @click="cancelEdit">Отмена</button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "shopList",

  data() {
    return {
      localEditTitle: "",
      localEditCount: "",
      localEditPrice: "",
      localEditDescription: "",
    };
  },

  props: {
    order: {
      type: Array,
      required: true,
    },
    editingId: {
      type: Number,
      default: null,
    },
    editTitle: {
      type: String,
      default: "",
    },
    editPrice: {
      type: Number,
      default: null,
    },
    editCount: {
      type: Number,
      default: null,
    },
    editDescription: {
      type: String,
      default: "",
    },
  },

  methods: {
    startEdit(id) {
      this.$emit("start-edit", id);
      (this.localEditTitle = this.editTitle),
        (this.localEditCount = this.editCount),
        (this.localEditPrice = this.editPrice);
      this.localEditDescription = this.editDescription;
    },
    saveEdit() {
      this.$emit("save-edit", {
        title: this.localEditTitle,
        count: this.localEditCount,
        price: this.localEditPrice,
        description: this.localEditDescription,
      });
    },
    cancelEdit() {
      this.$emit("cancel-edit");
    },
    deleteProd(id) {
      this.$emit("delete-prod", id);
    },
  },

  watch: {
    editTitle(newVal) {
      this.localEditTitle = newVal;
    },
    editCount(newVal) {
      this.localEditCount = newVal;
    },
    editPrice(newVal) {
      this.localEditPrice = newVal;
    },
    editDescription(newVal) {
      this.localEditDescription = newVal;
    },
  },
};
</script>

<style>
</style>
