<template>
  <div class="counter">
    <div class="count">
      <p :class="{'green': number >= 5, 'red': number < 5}" >{{ number }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="reset">reset</button>
    </div>
    <div class="msg">
      <p v-if="number > 5">Ce nombre est supérieur à 5</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NumberCounter',

  data() {
    return {
      number: 0
    }
  },

  methods: {
    increment () {
      this.number++
    },
    decrement () {
      if (this.number > 0) {
        this.number--
      }
    },
    reset () {
      if (this.number > 0) {
        this.number = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.count {
    border: 3px solid black;
    display: inline-block;
    padding: 20px;
    margin-right: 15px;
  }
  .green {
    background-color: green;
  }

  .red {
    background-color: red;
  }
</style>
