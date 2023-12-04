<script>
import { store } from '../store.js'
export default {
    name: "AppCard",
    data() {
        return {
            store
        }
    },
    methods: {
        getFlagImage(language) {
            const lowercaseLanguage = language.toLowerCase(); // Assicurati che il nome della lingua sia in minuscolo
            return `./img/${lowercaseLanguage}.png`
        },
    }
}
</script>

<template>
    <section class="container">
        <div v-if="store.film.length > 0">
            <h2>FILM</h2>
            <div v-for="(movie, index) in store.film" :key="index" class="card">
                <h3>{{ movie.title }}</h3>
                <p>Titolo Originale: {{ movie.original_title }}</p>
                <img v-if="getFlagImage(movie.original_language)" :src="getFlagImage(movie.original_language)"
                    :alt="movie.original_language" />
                <p>Voto: {{ movie.vote_average }}</p>
            </div>
        </div>
        <div v-else>
            <p class="noFilm">Nessun film trovato</p>
        </div>
    </section>

    <section class="container">
        <div v-if="store.series.length > 0">
            <h2>SERIE TV</h2>
            <div v-for="(tv, index) in store.series" :key="index" class="card">
                <h3>{{ tv.name }}</h3>
                <p>Titolo Originale: {{ tv.original_name }}</p>
                <img v-if="getFlagImage(tv.original_language)" :src="getFlagImage(tv.original_language)"
                    :alt="tv.original_language" />
                <p>Voto: {{ tv.vote_average }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.card {
    background-color: red;
    border-radius: 5px;
    margin: 20px auto;
    text-align: center;
    width: 40%;
    padding: 20px;
}

.container {
    width: 1100px;
    margin: 0 auto;
}

h2 {
    color: white;
    margin: 20px;
    color: red;
}

h3 {
    color: white;
    margin-bottom: 8px;
}

img {
    width: 70px;
    margin: 12px 0;
}

.noFilm {
    font-size: 5rem;
    text-align: center;
    margin-top: 4rem;
}
</style>
