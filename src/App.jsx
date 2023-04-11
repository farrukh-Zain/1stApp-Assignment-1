import React from 'react';
import Navbar from './component/Navbar';
import {para,span} from './component/Heading'
import Heading from './component/Heading'

function App() {
  return (
   <>
   <h1>Main aap</h1>
   <h2>{Heading}</h2> 
   <p>{para}</p>
   <span>{span}</span>
   <Navbar title={"Navbar"}/>
   </>
  )
}

export default App;
