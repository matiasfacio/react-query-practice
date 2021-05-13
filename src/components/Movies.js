import React from 'react'
import useMoviesApi from '../api/useMoviesApi'


function Movies({keyQuery}) {
    const { allMovies } = useMoviesApi({keyQuery})
    console.log(keyQuery)
    console.log(allMovies)
    return (
        <div>
            <h2>All Movies</h2>
        </div>
    )
}

export default Movies
