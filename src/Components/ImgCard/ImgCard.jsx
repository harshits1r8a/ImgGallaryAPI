import React , { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function ImgCard() {
       const[data,setData]=useState();
    const {id} = useParams()
    const getData=async()=>{
      const resp=await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      const {photo}=await resp.json();
      setData(photo)
    }
  
    useEffect(()=>{
      getData()
    },[])

    return (
        <div id="singlePhoto">
                <img src={data?.url} alt="" />
                <div>
                    <h1>Title : {data?.title}</h1>
                    <p>
                         Description : {data?.description}
                    </p>
                </div>
        </div>
    )
    
}
