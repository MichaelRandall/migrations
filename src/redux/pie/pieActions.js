import { BUY_PIE } from './pieTypes'

export const buyPie = (number=1) => {
    return{
        type: BUY_PIE,
        payload: number
    }
}