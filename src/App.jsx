
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import MovieList from "./Pages/movielist/MovieList"
import Footer from "./Component/Footer/Footer"
import "./App.css"
import Movie from "./Pages/movie/Movie"
import Header from "./Component/Header/Header"

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="movie/:id" element={<Movie />}/>
          <Route path="movies/:type" element={<MovieList />}/>
          <Route path="*" element={<h1>Error Page</h1>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
