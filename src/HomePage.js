import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './App.css'


const Home=()=>{
  const [doctors,setdoctors] = useState([])
  const [searchfild,setsearchfild] = useState('')
  // console.log(doctors);
  useEffect(()=>{
  fetch('https://www.tebinja.com/api/v1/doctors/searchi?page=0')
  .then(res=>res.json())
  .then(data=>setdoctors(data.doctors.hits))
  },[])

  

  return !doctors[0] 
  ? 
  <h1 className="Loading">Loading</h1>
  :
  (<div>
    <h1 className="hi">Hi Doctors</h1>
    <hr/>
   
    <div className="card" >
      {doctors.map((doc,i)=>{
        return (
          <Link to={`/SingleDocter/${doc._id}`}>
            <div>
            <div className="img"><img src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${doc._source.url}`} className="img"/></div>
            <p className="p">{doc._source.fname}</p> 
            <p className="p">{doc._source.lname}</p> 
            <br/>
            </div>
          </Link>
        )
      })}
    </div>
  </div>
  )
}
export default Home