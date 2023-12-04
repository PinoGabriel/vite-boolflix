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
            <div v-for="(movie, index) in store.film" :key="index" class="card">
                <h2>{{ movie.title }}</h2>
                <p>Titolo Originale: {{ movie.original_title }}</p>
                <img v-if="getFlagImage(movie.original_language)" :src="getFlagImage(movie.original_language)" :alt="movie.original_language" />
                <p>Voto: {{ movie.vote_average }}</p>
            </div>
        </div>
        <div v-else>
            <p>Nessun film trovato</p>
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
    margin-bottom: 8px;
}

img {
    width: 70px;
    margin: 12px 0;
}
</style>
