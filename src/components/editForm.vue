<template>
  <div class="modal" v-if="isVisible">
    <div class="container modal-content">
      <p>{{ formTitle }}</p>
      <input type="text" v-model="localEditTitle" placeholder="Название" />
      <input type="number" v-model="localEditCount" placeholder="Количество" />
      <input type="number" v-model="localEditPrice" placeholder="Стоимость" />
      <textarea
        type="text"
        v-model="localEditDescription"
        placeholder="Описание"
      />
      <button :disabled="!isDisabled" class="btn btn-save" @click="saveEdit">Сохранить</button>
      <button class="btn btn-cancel" @click="cancelEdit">Отмена</button>
      <button class="btn btn-close" @click="closeModal">Х</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "editForm",
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
    isVisible: {
      type: Boolean,
      default: false,
    },
    formTitle: {
      type: String,
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

    closeModal() {
      this.$emit("close");
    },
  },

    computed: {
    isDisabled() {
      return (
        this.localEditTitle !== "" &&
        this.localEditCount !== "" &&
        this.localEditPrice !== "" &&
        this.localEditDescription !== ""
      );
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