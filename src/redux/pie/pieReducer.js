import { BUY_PIE } from './pieTypes'

const initialState = {
    numPies: 40   
}

const pieReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_PIE:
            return {
                ...state,
                numPies: state.numPies - action.payload
            }
        default: return state
    }
}

export default pieReducer