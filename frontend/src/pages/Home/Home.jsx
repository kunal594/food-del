//import React from 'react'
import React, { useState } from 'react';

import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMen.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
// import ExploreMenu from '../../components/ExploreMenu/ExploreMen.jsx'


const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
     <ExploreMenu category={category} setCategory={setCategory}/>
     <FoodDisplay category={category}/>
    </div>
  )
}

export default Home