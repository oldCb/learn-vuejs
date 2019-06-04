<template>
  <div>
    <input type="text" v-model="valueText" placeholder="entrer text">
    <p>yo {{ valueText }}</p>
  </div>
</template>

<script>
export default {
  name: 'DisplayText',

  data() {
    return {
      valueText: 'toto'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
