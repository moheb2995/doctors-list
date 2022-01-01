import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './App.css'
import {useParams} from "react-router-dom"

const SingleDocter=()=>{
  let {_id} =useParams();
  const [doc,setdoctors]=useState(null)
  
  useEffect(()=>{
    fetch(`https://www.tebinja.com/api/v1/doctors/${_id}`)
    .then(res=>res.json())
    .then(data=>setdoctors(data.doctor))
    },[])
    console.log(doc);
  return  !doc
  ? 
  <h1 className="Loading">Loading</h1>
  :
  ( 
    <div>
      <h1 className="hi">hi</h1>
      <img src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${doc.url}`} className="img"/>
      <h3>{doc.fname}</h3> 
      <h3>{doc.lname}</h3>
      <h4 className="h">{doc.type} : مدرک تحصیلی </h4>
      <p>{doc.about}</p> <br/>
      <p> تجربه  : {doc.expertiesYear} سال </p><br/>
      <p> آدرس : {doc.address}</p><br/>
      <p> دانشگاه : {doc.university.name}</p>
          

    
          
          <Link to={`/`}>
          <button className="btn"> BACK TO LIST</button>
          </Link>
    </div>
  )
}
export default SingleDocter