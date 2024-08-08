import React, { createRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text';
import {exportComponentAsJPEG} from 'react-component-export-image'


const EditPage = () => {
    const memeRef= createRef();
    const [params] = useSearchParams();
    const [count, setCount]  = useState(0);
    const addText =()=>{
       setCount(count+1)
    }
  return (
    
    <div>
      <div ref={memeRef} className='meme mt-5 mb-5'>
        <img src={params.get("url")} width={"350px"} />
        {
          Array(count).fill(0).map(e=><Text/> )
        }
      </div>
        <Button style={{margin: "20px", }}  onClick={addText}  >Add text</Button>
        <Button style={{display:"inline"}} variant='success' onClick={(e)=> exportComponentAsJPEG(memeRef)} >Save</Button>
    </div>
  )
}

export default EditPage