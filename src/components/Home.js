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
            <div>
                <div className="back-image"></div>
                {this.props.list.length > 0 ? (
                    <ListVehicles list={this.props.list} />
                    ) :
                    <div className="banner">
                        <span>Pesquisa de veículos do<div style={{backgroundColor:'#304460', opacity:'0.5'}}> TradersClub</div></span> 
                    </div>
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