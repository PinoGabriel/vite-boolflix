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
        <AppCard />
    </main>
</template>

<style scoped></style>
