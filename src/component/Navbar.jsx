import React from 'react';
import Navlist from './Navlist';
const Navbar = (props) => {
  return (
    <div>
        <h1>heloo</h1>
        <h1>{props.title}</h1>
        <ul>
            <Navlist home={"home"}/>
            <Navlist home={"About"}/>
            <Navlist home={"contact"}/>
            <Navlist home={"service"}/>
            <Navlist home={"portfolio"}/>
        </ul>
      
    </div>
  )
}

export default Navbar;
