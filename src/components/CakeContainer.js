import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux' // came from index.js in root of redux 

// make sure to add props so you have access to mapped items from state
function CakeContainer(props){
    return (
        <div>
            <h2>Number of Cakes - {props.numCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numCakes: state.cake.numCakes
    }
}


// dispatches the action creator buyCake() when the UI click event
// is clicked onClick={props.buyCake}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)