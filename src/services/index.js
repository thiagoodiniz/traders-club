
import api from './api'

export const services = {
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
    }
}