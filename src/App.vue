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
        <h2 v-if="store.film.length > 0" id="film" class="categoryFilm">FILM</h2>
        <div class="container">
            <AppCard v-if="store.film.length > 0" v-for="element in store.film" :myprop="element" />
            <div class="noFilm" v-else>
                <p>Nessun film trovato</p>
            </div>
        </div>
        <h2 v-if="store.film.length > 0" id="serie" class="categorySeries">SERIE TV</h2>
        <div class="container">
            <AppCard v-if="store.series.length > 0" v-for="element in store.series" :myprop="element" />
        </div>
    </main>
</template>


<style lang="scss">
@use './styles/general.scss';
</style>


<style scoped lang="scss">
.container {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 15px;
    overflow-x: auto;
}

.noFilm {
    font-size: 5rem;
    margin: 0 auto;
}

.categoryFilm {
    color: white;
    margin: 20px
}

.categorySeries {
    color: white;
    margin: 40px 20px 20px 20px
}
</style>
