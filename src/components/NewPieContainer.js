import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyPie } from '../redux' // came from index.js in root of redux 

const NewPieContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Pies - {props.numPies}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyPie(number)}>Buy {number} Pie(s)</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numPies: state.pie.numPies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyPie: number => dispatch(buyPie(number))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewPieContainer)