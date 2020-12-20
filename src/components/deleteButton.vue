<template>
  <button
    :class="`button ${hasBeenClickedOnce ? 'button-delete' : ''}`"
    :disabled="isPerformingDelete"
    @click="deleteItem"
  >
    <slot v-if="hasBeenClickedOnce == false" />
    <span class="confirm-delete__container" v-else>
      <svg
        v-if="isPerformingDelete == false"
        class="confirm-svg"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 236.988 236.988"
        style="enable-background:new 0 0 236.988 236.988;"
        xml:space="preserve"
      >
        <polygon
        points="198.098,24.326 87.543,134.881 38.891,86.229 0,125.121 87.543,212.662 236.988,63.217"
        />
      </svg>
      <img
        v-else
        class="confirm-loading"
        src="../assets/deleteItem.gif"
        alt="loading"
      />
      Confirm Delete
    </span>
  </button>
</template>
<script>
export default {
  props: ['text', 'onSecondClick'],
  data() {
    return {
      hasBeenClickedOnce: false,
      isPerformingDelete: false,
    };
  },
  methods: {
    sleep(milliseconds) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    },
    async deleteItem() {
      if (this.hasBeenClickedOnce) {
        this.isPerformingDelete = true;
        await this.sleep(3000);
        this.onSecondClick();
        this.isPerformingDelete = false;
        this.hasBeenClickedOnce = false;
      } else {
        this.hasBeenClickedOnce = true;
      }
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

.button-delete {
  background-color: red;
}

.button:hover {
  transform: translate(3%, -3%);
  transition: all 0.2s;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
}

.button:active {
  transform: translate(0%, 0%);
  transition: all 0.2s;
}

.button:disabled {
  transform: none;
  box-shadow: none;
  cursor: auto;
}

.confirm-delete__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.confirm-svg {
  width: 15px;
  height: 15px;
  padding-right: 1rem;
  fill: white;
}

.confirm-loading {
  width: 15px;
  height: 15px;
  padding-right: 1rem;
}
</style>
