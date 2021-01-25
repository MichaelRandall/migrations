import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux' // came from index.js in root of redux 

// make sure to add props so you have access to mapped items from state
function IceCreamContainer(props){
    return (
        <div>
            <h2>Number of Icecream - {props.numIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numIceCreams: state.iceCream.numIceCreams
    }
}


// dispatches the action creator buyCake() when the UI click event
// is clicked onClick={props.buyCake}
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)