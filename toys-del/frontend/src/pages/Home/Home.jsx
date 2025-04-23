import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Hader/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ToysDisplay from '../../components/ToysDisplay/ToysDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

const[category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <ToysDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home;
