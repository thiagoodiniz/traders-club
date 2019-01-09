import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = (props) => {
   return(
        <div className="menu">
            <Link to={props.link}>
                <h1>TC</h1>
            </Link>
        </div>
   ) 
}   

export default SideMenu