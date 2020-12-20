<template>
  <button :class="`button`" :disabled="isCreatingItem" @click="createItem">
    <span class="confirm-create__container">
      <img
        class="create-item-gif"
        v-if="isCreatingItem"
        src="../assets/deleteItem.gif"
        alt="loading"
      />
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: ['onClick'],
  data() {
    return {
      isCreatingItem: false,
    };
  },
  methods: {
    sleep(milliseconds) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    },
    async createItem() {
      this.isCreatingItem = true;
      await this.sleep(3000);
      this.onClick();
      this.isCreatingItem = false;
    },
  },
};
</script>

<style scoped>
.button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
}

.button:hover {
  transform: translate(3%, -3%);
  transition: all 0.2s;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
}

.button:disabled {
  transform: none;
  box-shadow: none;
  cursor: auto;
}

.button:active {
  transform: translate(0%, 0%);
  transition: all 0.2s;
}

.create-item-gif {
  width: 15px;
  height: 15px;
  padding-right: 1rem;
}

.confirm-create__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
