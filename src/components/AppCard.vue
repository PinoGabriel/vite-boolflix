<script>
import { store } from '../store.js'
export default {
  name: "AppCard",
  data () {
    return {
      store
    }
  },
}
</script>

<template>
  <section class="container">
    <h1> CIAO</h1>
  </section>
</template>

<style scoped>

.container {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
    color: white
}
</style>
