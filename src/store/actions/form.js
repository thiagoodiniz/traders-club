
export const Types = {
    START_ADD: 'form/START_ADD',
    GET_BRANDS_SUCCESS: 'form/GET_BRANDS_SUCCESS',
    GET_BRANDS_FAIL: 'form/GET_BRANDS_FAIL'
}

export const Creators = {
    startAdd: () => ({
        type: Types.START_ADD
    }),
    getBrandSuccess: (brands) => ({
        type: Types.GET_BRANDS_SUCCESS,
        brands
    }),
    getBrandFail: () => ({
        type: Types.GET_BRANDS_FAIL,
        brands: []
    })
}