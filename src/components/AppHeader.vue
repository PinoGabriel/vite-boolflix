<script>
export default {
  name: "AppHeader"
}
</script>

<template>
  <section>
    <div class="container">
      <h1>Ciao</h1>
      <div>
        <input type="text" placeholder="cerca il tuo film preferito">
        <button>Cerca</button>
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
