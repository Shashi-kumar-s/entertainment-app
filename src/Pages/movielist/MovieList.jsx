import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../Card/Card"
import "../movielist/MovieList.css"


const MovieList = () => {
    const { type } = useParams()
    const [movieList, setMovieList] = useState([])
    console.log(movieList);
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        const query = e.target.value
        const updatedList = movieList.filter((movie) => {
            return (movie.original_title).toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
        setSearch(updatedList)
    }

    
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }
    useEffect(() => {
        getData()
    }, [type])

    return (
        <div className="movie__list">
            <div style={{ display: "flex",justifyContent:"center",alignItems:"center",marginTop:"40px",fontSize: "20px"  }}>
                <input type="search" style={{ width: "700px", height: "40px",borderRadius:"10px",marginLeft:"10px",outline:"none",fontSize: "20px",padding:"10px" }} placeholder="Search  Your Movie Here..." onChange={handleChange} />
            </div>
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {search ? (search.map((movie, i) => {
                    return (
                        <Card movie={movie} key={i} />
                    )
                })) : (
                    movieList.map((movie, i) => (
                        <Card movie={movie} key={i} />
                    ))
                )
                }
            </div>
        </div>
    )
}

export default MovieList