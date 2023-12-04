import { reactive } from 'vue'

export const store = reactive({
    APIUrlMovie: "https://api.themoviedb.org/3/search/movie?api_key=4c6bd99cef96f6718687170eacbec8bf",
    APIUrlSeries: "https://api.themoviedb.org/3/search/tv?api_key=4c6bd99cef96f6718687170eacbec8bf",
    film: [],
    series: [],
    searchText: ""
});