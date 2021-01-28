import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream} from '../redux'

// make sure to add props so you have access to mapped items from state
function ItemContainer(props){
    return (
        <div>
            <h2>Number of items - {props.ItemCount}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

// using conditionality in mapStateToProps with ownProps argument
// if property passed with component in page, ownProps can access
const mapStateToProps = (state, ownProps) => {
    const Item = ownProps.cake ? state.cake.numCakes : state.iceCream.numIceCreams
    return {
        ItemCount: Item
    }
}

// using conditionality in mapDispatchToProps with ownProps argument
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

// synopsis: when ItemContainer component added to App.js, if the component has a property
// of cake, then numCakes from state is used, otherwise, numIceCreams from state used
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)