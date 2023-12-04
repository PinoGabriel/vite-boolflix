<script>
import { store } from '../store.js'
import axios from 'axios'
export default {
  name: "AppHeader",
  data () {
    return {
      store
    }
  },
  methods: {
    pushText() {
      axios.get(this.store.APIUrl + "&query=" + encodeURIComponent(this.store.searchText)).then(result =>{
        this.store.film = result.data
        console.log(result.data);
        console.log(this.store.searchText);
      })
    }
  }
}
</script>

<template>
  <section>
    <div class="container">
      <h1>Ciao</h1>
      <div>
        <input type="text" v-model="store.searchText" placeholder="cerca il tuo film preferito">
        <button @click="pushText()">Cerca</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #141414;
}

.container {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 15vh;
}

h1 {
  color: red;
}

input {
  margin-right: 8px;
}
</style>
