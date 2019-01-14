
import api from './api'

export const services = {

    checkApi: () => {
       return api.get('')
            .then(resp => resp.data.online)
            .catch(err => {
                console.log(err)
                console.log('Houve um problema ao acessar a API. Tente novamente mais tarde.')
                return false
            })
    },
    getBrandsRequest: () =>{
       return api.get('brands')
                .then(resp => resp.data.brands)
                .catch(err => err)
    },
    
    searchVehiclesRequest: () => {
        return api.get('cars')
            .then(resp => resp.data.cars)
            .catch(err => err)
    },

    createVehicleRequest: (vehicle) => {
        return api.post('cars', vehicle)
            .then(resp => resp.data.car)
            .catch(err => err)
    },

    removeVehicleRequest: (id) => {
        return api.delete(`cars/${id}`)
            .then(resp => resp)
            .catch(err => err)
    },

    updateVehicleRequest: (vehicle) => {
        return api.put(`cars/${vehicle.id}`)
            .then(resp => resp)
            .catch(err => err)
    }
}