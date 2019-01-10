import React, {Component} from 'react'
import ListVehicles from './ListVehicles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ListActions } from '../store/actions/list'

class Home extends Component {

    componentDidMount(){
        this.props.startSearchVehicles();
    }

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

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)