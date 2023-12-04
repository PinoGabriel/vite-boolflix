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
        getPosterImage(poster) {
            return `http://image.tmdb.org/t/p/w780/${poster}`
        }
    }
}
</script>

<template>
    <section>
        <div v-if="store.film.length > 0">
            <h2>FILM</h2>
            <div class="container">
                <div v-for="(movie, index) in store.film" :key="index" class="card">
                    <img :src="getPosterImage(movie.poster_path)" :alt="movie.poster_path" class="posters">
                    <h3>{{ movie.title }}</h3>
                    <p>Titolo Originale: {{ movie.original_title }}</p>
                    <img v-if="getFlagImage(movie.original_language)" :src="getFlagImage(movie.original_language)"
                        :alt="movie.original_language" class="flag" />
                    <p>Voto: {{ movie.vote_average }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="noFilm">Nessun film trovato</p>
        </div>
    </section>

    <section>
        <div v-if="store.series.length > 0">
            <h2>SERIE TV</h2>
            <div class="container">
                <div v-for="(tv, index) in store.series" :key="index" class="card">
                    <img :src="getPosterImage(tv.poster_path)" :alt="tv.poster_path" class="posters">
                    <h3>{{ tv.name }}</h3>
                    <p>Titolo Originale: {{ tv.original_name }}</p>
                    <img v-if="getFlagImage(tv.original_language)" :src="getFlagImage(tv.original_language)"
                        :alt="tv.original_language" class="flag" />
                    <p>Voto: {{ tv.vote_average }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 1100px;
    margin: 0 auto;
}

.card {
    border: 1px solid white;
    border-radius: 5px;
    margin: 40px;
    text-align: center;
    width: calc(100% / 2 - 80px);
}

.container {
    display: flex;
    flex-wrap: wrap;
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

.flag {
    width: 70px;
    margin: 12px 0;
}

.posters {
    width: 100%;
}

.noFilm {
    font-size: 5rem;
    text-align: center;
    margin-top: 4rem;
}
</style>
