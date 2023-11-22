import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTU1ODkwYjczOTUyOGE5MWFiYTNkZWY4MGVlZjhiYiIsInN1YiI6IjY0ZGZiYjZmZTE5ZGU5MDEwMGU4NjU1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsCtLiKEb-BRG0oqiP8oKA3znLQ_f2B8QADloZ09FP4"

const headers={
    Authorization:"bearer "+ TMDB_TOKEN,
}

export const fetchDataFromApi=async(url,params)=>{
    try {
        const{data}=await axios.get(BASE_URL+url,{
            headers,
            params
        })
        return data
    } catch (error) {
        console.log("error");
    }
}