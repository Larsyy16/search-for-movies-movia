import React, {useState} from 'react'
import './style.css'
import MovieDetail from '../MovieDetail'

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
        <MovieDetail movies={movies} />
        </div>
    </>

    )

}