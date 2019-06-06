<template>
  <div class="exercices">
    <compteur />
    <liste />
  </div>
</template>

<script>
import Compteur from '@/components/Compteur'
import Liste from '@/components/Liste'
export default {
  name: 'Exercices',
  components: {
    Compteur,
    Liste
  }
}
</script>

<style lang="scss" scoped>
</style>
