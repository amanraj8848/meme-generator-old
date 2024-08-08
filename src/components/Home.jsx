import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard'
import { getAllMemes } from '../api/meme'

const Home = () => {
const [posts, setPosts] = useState([]);

  useEffect(()=>{
    getAllMemes().then((posts)=>setPosts(posts.data.memes));
  },[])

  return (
    <div className='row'>
       {
        posts.map(el=> <MemeCard img={el.url}  title={el.name}/>)
      }
    </div>
  )
}

export default Home