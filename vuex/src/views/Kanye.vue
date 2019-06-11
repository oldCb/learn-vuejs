<template>
  <div class="kanye">
    <p>Kanye dit: "{{ citation }}"</p>
  </div>
</template>

<script>
export default {
  name: 'Kanye',
  data () {
    return {
      citation: '',
      loading: false
    }
  },
  created () {
    fetch('https://api.kanye.rest/')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson)
        this.citation = myJson.quote
      })
  }
}
</script>

<style lang="scss" scoped>

</style>

