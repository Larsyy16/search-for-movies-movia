import React, {useState} from 'react'
import './style.css'

export default function SearchMovies () {

    const [movies, setMovies] = useState([])


    const [query,setQuery] = useState('')

    const search = async (event) => {
        event.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=892333b38298a8d638b9eabd918e31c0&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)           
            console.log(movies) 
        }catch (err) {
            console.error(err)
        }
    } 

    const movieElements = movies.filter(movie=>movie.poster_path).map((movie) => (
        <div className="card" key={movie.id}>
            <img className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
            />
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p className="card--desc">{movie.overview}</p>
                </div>
    
    </div>
    ) )

    
    return (
    <>
        <form className='form' onSubmit={search}>
            <label htmlFor='query' className='label' >Movie Name</label>
            <input type='text' className='input' name='query' 
                placeholder='enter movie name here'
                value = {query} onChange={(e) => setQuery(e.target.value)} />
            <button className='button' type='submit'> Submit</button>
        </form>
        <div> 
            {movieElements}

        </div>
    </>

    )

}