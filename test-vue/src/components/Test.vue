<template>
  <div class="myComponent">
    <h1 @click="sendAlert">Salut {{ name }} - {{ num }} - {{ nbPlus10 }}</h1>
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Test',

  props: {
    text: String,
    num: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      name: 'cecilia',
      nbPlus10: this.num + 10
    }
  },

  methods: {
    sendAlert() {
      alert('yo')
    }
  }

}
</script>

<style lang="scss" scoped>
  .myComponent {
    text-align: center;
    background-color: #008000;
    color: #ffffff;
  }
</style>


