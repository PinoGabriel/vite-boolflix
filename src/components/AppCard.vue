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
            return `http://image.tmdb.org/t/p/w342/${poster}`
        },
        getMidNumber(number) {
            return Math.ceil(number / 2)
        },
        getNumberStars(number) {
            const midNumber = this.getMidNumber(number)
            const fullStar = `<i class="fa-solid fa-star"></i>`.repeat(midNumber);
            const emptyStar = `<i class="fa-regular fa-star"></i>`.repeat(5 - midNumber);
            return `${fullStar}${emptyStar}`;
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="mainImg">
            <img :src="getPosterImage(myprop.poster_path)" :alt="myprop.poster_path" class="posters">
        </div>
        <div class="info">
            <h3>{{ myprop.title ? myprop.title : myprop.name }}</h3>
            <p>Titolo Originale: {{ myprop.original_title ? myprop.original_title : myprop.original_name }}</p>
            <img v-if="getFlagImage(myprop.original_language)" :src="getFlagImage(myprop.original_language)"
                :alt="myprop.original_language" class="flag" />
            <p v-html="getNumberStars(myprop.vote_average)"></p>
        </div>
    </div>
</template>

<style scoped>
.card {
    margin: 40px;
    text-align: center;
    width: calc(100% / 3 - 80px);
}

.mainImg {
    position: absolute;
}

.info {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    object-fit: cover;
    object-position: top;
}
</style>
