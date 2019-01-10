import React, {Component} from 'react'
import ListVehicles from './ListVehicles'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        return(
            <div className="banner">
                {/* <p>Pesquisa de veículos do TradersClub</p> --> */}
            <ListVehicles list={this.props.list} />
    
            </div> 
        )
    }
} 

const mapStateToProps = state => ({
    list: state.list.vehicles
}) 

export default connect(mapStateToProps,null)(Home)