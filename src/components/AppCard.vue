<script>
export default {
    name: "AppCard",
    props: ["myprop"],
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
    <div class="card">
        <img :src="getPosterImage(myprop.poster_path)" :alt="myprop.poster_path" class="posters">
        <h3>{{ myprop.title ? myprop.title : myprop.name }}</h3>
        <p>Titolo Originale: {{ myprop.original_title ? myprop.original_title : myprop.original_name }}</p>
        <img v-if="getFlagImage(myprop.original_language)" :src="getFlagImage(myprop.original_language)"
            :alt="myprop.original_language" class="flag" />
        <p>Voto: {{ myprop.vote_average }}</p>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid white;
    border-radius: 5px;
    margin: 40px;
    text-align: center;
    width: calc(100% / 3 - 80px);
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
    height: 350px;
    object-fit: cover;
}
</style>
