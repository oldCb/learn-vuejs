<template>
  <div>
    <input type="text" v-model="valueText" placeholder="entrer text">
    <p>yo {{ valueText }}</p>
    <button @click="showText">Send text</button>
  </div>
</template>

<script>
export default {
  name: 'DisplayText',

  data() {
    return {
      valueText: 'toto'
    }
  },

  methods: {
    showText() {
      alert(this.valueText)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
