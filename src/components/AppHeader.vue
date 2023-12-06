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
            <div class="flexItems">
                <h1>BoolFlix</h1>
                <a href="#">HOME</a>
                <a href="#film">FILM</a>
                <a href="#serie">SERIE TV</a>
            </div>
            <div class="flexItems">
                <input type="text" v-model="store.searchText" placeholder="cerca il tuo film preferito"
                    @keyup.enter="search()">
                <button @click="search()">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    background-color: #141414;
}

.container {
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10vh;
}

h1 {
    color: red;
    font-size: 2rem;
    margin-right: 40px;
    cursor: pointer;
}

a {
    margin: 0 5px;
    text-decoration: none;
    color: white;
    font-weight: 600;
}

.flexItems {
    display: flex;
    align-items: center;
}

input {
    width: 100%;
    border: 3px solid red;
    border-right: none;
    padding: 15px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #141414;
}

button {
    width: 40px;
    height: 36px;
    border: 1px solid red;
    background: red;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 15px;
}
</style>
