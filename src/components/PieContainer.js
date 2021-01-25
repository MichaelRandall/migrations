import React from 'react'
import { connect } from 'react-redux'
import { buyPie } from '../redux' // came from index.js in root of redux 

const PieContainer = (props) => {
    return (
        <div>
            <h2>Number of Pies - {props.numPies}</h2>
            <button onClick={props.buyPie}>Buy Pie</button>
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
        buyPie: () => dispatch(buyPie())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(PieContainer)