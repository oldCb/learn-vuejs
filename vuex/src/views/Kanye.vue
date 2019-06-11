<template>
  <div class="kanye">
    <loading-animation v-if="loading" />
    <div v-if="!loading">
      <p>Kanye dit: "{{ citation }}"</p>
    </div>
  </div>
</template>

<script>
import LoadingAnimation from '@/components/LoadingAnimation'
export default {
  name: 'Kanye',
  components: {
    LoadingAnimation
  },
  data () {
    return {
      citation: '',
      loading: false
    }
  },
  created () {
    this.loading = true
    fetch('https://api.kanye.rest/')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson)
        this.citation = myJson.quote
        this.loading = false
      })
  }
}
</script>

<style lang="scss" scoped>

</style>

