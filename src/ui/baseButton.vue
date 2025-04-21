<template>
  <button
    :class="[`btn`, `btn-${type}`]"
    :disabled="disabled"
    @click.stop.prevent="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "baseButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "default",
      validator: (value) =>
        [
          "default",
          "add",
          "edit",
          "delete",
          "save",
          "cancel",
          "close",
        ].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  margin-left: 10px;

  &-default {
    margin-top: 10px;
    font-size: 14px;
    background-color: #1a6cff;
    &:hover {
      background-color: #387eff;
    }
  }

  &-add {
    background-color: green;
    font-size: 25px;
    padding: 10px 15px;

    &:hover {
      background-color: #014e01;
    }
  }

  &-edit {
    background-color: #525252;

    &:hover {
      background-color: #585858;
    }
  }

  &-delete {
    background-color: #cc1616;

    &:hover {
      background-color: #7c1414;
    }
  }

  &-save {
    background-color: green;

    &:hover {
      background-color: #014e01;
    }
  }

  &-cancel {
    background-color: #cc1616;

    &:hover {
      background-color: #7c1414;
    }
  }

  &-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 14px;
    color: black;

    &:hover {
      background-color: #7c1414;
    }
  }
}
</style>