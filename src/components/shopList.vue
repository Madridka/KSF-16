<template>
  <div class="product">
    <ol class="product__item">
      <li v-for="product in order" :key="product.id">
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

        <editForm
          :is-visible="isEditFormOpen"
          @close="isEditFormOpen = false"
          formTitle="Редактирование товара"
          :order="order"
          :editingId="editingId"
          :editTitle="editTitle"
          :editPrice="editPrice"
          :editCount="editCount"
          :editDescription="editDescription"
          @save-edit="saveEdit"
          @cancel-edit="cancelEdit"
        />
      </li>
    </ol>
  </div>
</template>

<script>
import editForm from "./editForm.vue";

export default {
  name: "shopList",
  components: {
    editForm,
  },
  data() {
    return {
      isEditFormOpen: false,
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
      this.isEditFormOpen = true;
      this.$emit('start-edit', id)
    },
    saveEdit(updatedProduct) {
      this.$emit("save-edit", updatedProduct);
      this.isEditFormOpen = false;
    },
    cancelEdit() {
      this.isEditFormOpen = false;
      this.$emit("cancel-edit");
    },
    deleteProd(id) {
      this.$emit("delete-prod", id);
    },
  },
};
</script>

<style>
</style>
