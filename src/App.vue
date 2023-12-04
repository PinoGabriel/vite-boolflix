<script>
import AppHeader from './components/AppHeader.vue'
import axios from 'axios'
import { store } from './store.js'
export default {
  components: {
    AppHeader
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
</template>

<style scoped>
</style>
