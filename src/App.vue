<script>
import AppHeader from './components/AppHeader.vue'
import AppCard from './components/AppCard.vue'
import axios from 'axios'
import { store } from './store.js'
export default {
  components: {
    AppHeader,
    AppCard
  },
  data () {
    return {
      store,
    }
  },
  mounted() {
      
    }
}
</script>

<template>
  <AppHeader/>
  <main>
    <AppCard/>
  </main>
</template>

<style scoped>
</style>
