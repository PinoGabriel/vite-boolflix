<script>
import { store } from '../store.js'
export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            this.$emit('search')
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <h1>BoolFlix</h1>
            <div>
                <input type="text" v-model="store.searchText" placeholder="cerca il tuo film preferito"
                    @keyup.enter="search()">
                <button @click="search()">Cerca</button>
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-regular fa-star" />
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
    font-size: 2rem;
}

input {
    margin-right: 8px;
}
</style>
