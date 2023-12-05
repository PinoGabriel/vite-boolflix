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
    data() {
        return {
            store,
        }
    },
    methods: {
        pushText() {
            axios.get(this.store.APIUrlMovie + "&query=" + encodeURIComponent(this.store.searchText)).then(result => {
                this.store.film = result.data.results
                console.log(result.data);
                console.log(this.store.film);
                console.log(this.store.searchText);
            })
            axios.get(this.store.APIUrlSeries + "&query=" + encodeURIComponent(this.store.searchText)).then(result => {
                this.store.series = result.data.results
                console.log(result.data.results);
                console.log(this.store.series);
                console.log(this.store.searchText);
            })
        },
    },
    mounted() {

    }
}
</script>

<template>
    <AppHeader @search="pushText()" />
    <main>
        <h2 class="category">FILM</h2>
        <div class="container">
            <AppCard v-if="store.film.length > 0" v-for="element in store.film" :myprop="element" />
            <div v-else>
                <p class="noFilm">Nessun film trovato</p>
            </div>
        </div>
        <h2 class="category">SERIE TV</h2>
        <div class="container">
            <AppCard v-if="store.series.length > 0" v-for="element in store.series" :myprop="element" />
        </div>
    </main>
</template>




<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    width: 1100px;
    margin: 0 auto;
}

.noFilm {
    font-size: 5rem;
    margin: 4rem auto;
}

.category {
    color: white;
    color: red;
    width: 1100px;
    margin: 20px auto
}
</style>
