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
                {this.props.list.length > 0 ? (
                    <ListVehicles list={this.props.list} />
                    ) :
                    <p>Pesquisa de veículos do TradersClub</p> 
                }
                
                
    
            </div> 
        )
    }
} 

const mapStateToProps = state => ({
    list: state.list.vehiclesToShow
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)