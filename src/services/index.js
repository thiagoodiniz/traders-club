
import api from './api'

export const services = {
    getBrands: () =>{
       return api.get('brands')
                .then(resp => resp.data)
                .catch(err => err)
    }
}