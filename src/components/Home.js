import React, {Component} from 'react'
import ListVehicles from './ListVehicles'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        return(
            <div className="banner">
                {/* <p>Pesquisa de veículos do TradersClub</p> --> */}
            <ListVehicles />
    
            </div> 
        )
    }
} 

export default connect(null,null)(Home)