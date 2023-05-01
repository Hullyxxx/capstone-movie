import React, { useEffect, useState } from 'react'
import { adminServ } from '../../service/adminService'
import { headerUserTable } from './utils'
import { Space, Table, Tag } from 'antd';
import Spinner from '../../Components/Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';
import { movieServ } from '../../service/movieService';

export default function AdminMoviePage() {
  const [movies, setMovies] = useState([])

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoadingOn())
    movieServ.getMovieList()
      .then(response => {
        dispatch(setLoadingOff())
        setMovies(response.data.content)
      })
      .catch(error => {
        dispatch(setLoadingOff())
        console.log("error :", error)
      })
  }, [])
  return (
    <div>
      <Spinner />
      <Table columns={headerUserTable} dataSource={movies} />;
    </div>
  )
}
