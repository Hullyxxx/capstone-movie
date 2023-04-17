import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../service/movieService'
import ItemMovie from './ItemMovie'

export default function ListMovie() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        movieServ.getMovieList()
            .then(response => {
                console.log(response);
                setMovies(response.data.content)
            }
            )
            .catch(error => console.log("error :", error))
    }, [])

    return (
        <div className='container grid grid-cols-4 gap-10'>
            {movies.map((item) => {
                return <ItemMovie data={item} key={item.maPhim} />
            })}
        </div>
    )
}
