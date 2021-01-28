import React from "react";
import { Provider } from 'react-redux'
import store from './redux/store'

import CakeContainer from './components/CakeContainer'
import IceCreamContainer from "./components/IceCreamContainer"
import PieContainer from "./components/PieContainer"
import NewPieContainer from "./components/NewPieContainer";



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <PieContainer />
        <NewPieContainer />
      </div>
      </Provider>
  );
}

export default App;
