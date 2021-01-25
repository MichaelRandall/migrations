import { BUY_ICECREAM } from './iceCreamTypes'

const initialState = {
    numIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
       case BUY_ICECREAM:
           return {
               ...state,
               numIceCreams: state.numIceCreams - 1
           } 

        default: return state
    }
}

export default iceCreamReducer