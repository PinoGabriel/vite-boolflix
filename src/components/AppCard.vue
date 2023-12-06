<script>
export default {
    name: "AppCard",
    props: ["myprop"],
    data() {
        return {
            availableLanguage: ["en", "ja", "it", "de", "cn", "fi", "kr", "no", "pt"]
        }
    },
    methods: {
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
            <img v-if="myprop.poster_path != null" :src="getPosterImage(myprop.poster_path)" :alt="myprop.poster_path"
                class="posters">
            <img v-else src="/img/no-img.png" alt="no-img" class="posters">
        </div>
        <div class="info">
            <h3>{{ myprop.title ? myprop.title : myprop.name }}</h3>
            <p>Titolo Originale: {{ myprop.original_title ? myprop.original_title : myprop.original_name }}</p>
            <img v-if="availableLanguage.includes(myprop.original_language)" :src="`./img/${myprop.original_language}.png`"
                :alt="myprop.original_language" class="flag" />
            <p v-else>{{ myprop.original_language }}</p>
            <p v-html="getNumberStars(myprop.vote_average)"></p>
            <p class="marginOw">Overview: {{ myprop.overview }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    margin: 20px 5px;
    text-align: center;
    width: 20%;
    flex-shrink: 0;
    position: relative;
}

.mainImg {
    height: 100%;
    transition: linear 0.3s;
}

.info {
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 5px solid white;
    display: none;
    cursor: pointer;

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
    height: 100%;
    object-fit: cover;
    object-position: top;
}

.marginOw {
    margin-top: 12px;
}

.card:hover .info {
    display: flex;
}

.card:hover .mainImg {
    filter: brightness(0.1);
}
</style>
