import './App.css'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Pagination} from "@mui/material"
import Stack from '@mui/material/Stack';
import { useSearchParams , useLocation } from 'react-router-dom';

const Home=()=>{
  const [doctors,setdoctors] = useState([])
  const [pag,setpag] = useState(null)

  const total = 999
  // const [update,setupdate] = useState(false)


  useEffect(() => {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const page = urlSearchParams.get('page')

    const number = page ? page : 0

    setpag(number)

  }, [])

  useEffect(()=>{
    console.log(pag)
    if (pag !== null) {
      fetch(`https://www.tebinja.com/api/v1/doctors/searchi?page=${pag}`)
      .then(res=>res.json())
      .then(data=>{
        return setdoctors(data)
      })
    }

  },[pag])
  // console.log(window.history);

return(
  Object.entries(doctors).length === 0
  ? 
  <h1 className="Loading">Loading</h1>
  :
  doctors.success?
  <div>
    <h1 className="hi">Hi Doctors</h1>
    <hr/>
   
    <div className="card" >
      {doctors.doctors.hits.map((doc)=>{
        return (
          <Link key={doc._id} to={`/SingleDocter/${doc._id}`}>
            <img className="img" src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${doc._source.url}`}/>
            <p className="p">{doc._source.fname}</p> 
            <p className="p">{doc._source.lname}</p> 
            <br/>
          </Link>
        )
      })}
    </div>

    <Stack spacing={2}>
      <Pagination 
        // count={Math.round(doctors.doctors.total/10)}
        count={total}
        variant="outlined" 
        color="secondary" 
        siblingCount={1} 
        boundaryCount={3}
        page
        onChange={(e,value)=>{
          console.log(e)
          console.log(value)
          const url = new URL(window.location)
          url.searchParams.set('page', value -1);
          window.history.pushState(null, '', url);
          setpag(value -1)
        }}
        />
    </Stack>

  </div>
  :
  doctors.message
)}
export default Home