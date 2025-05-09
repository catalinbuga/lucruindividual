import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios"
import { toast } from "react-toastify"


const List = () => {


const url = "http://localhost:4000"
const [list,setList] = useState([]);

const fetchList = async () => {
  const response = await axios.get(`${url}/api/toys/list`);

  
  if (response.data.success) {
    setList(response.data.data)
  }
  else{
    toast.error("Error")
  }
}

const removeToys = async(toysId) => {
    const response = await axios.post(`${url}/api/toys/remove`,{id:toysId});
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
}


useEffect(()=>{
  fetchList();
},[])

  return (
    <div className='list add flex-col'>
     <p>Lista tuturor jucăriilor</p>
     <div className="list-tabel">
      <div className="list-tabel-format title">
        <b>Imaginea</b>
        <b>Nume</b>
        <b>Categorie</b>
        <b>Preț</b>
        <b>Actiune</b>
      </div>
      {list.map((item,index)=>{
        return (
          <div key={index} className='list-tabel-format'>
            <img src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={()=>removeToys(item._id)} className='cursor'>x</p>
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default List
