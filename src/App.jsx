import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ComponentContainer from "./component/componentContainer";

import Header from "./component/header";
import Loader from "./component/loader";
import { GroupAndOrder } from "./store/store";
import { useContext } from "react";

function App() {
  let myContext = useContext(GroupAndOrder);

  let isFetched = myContext.isFetched;
  return (
    <div className="element">
      {!isFetched ? (
        <Loader />
      ) : (
        <>
          <Header />
          <ComponentContainer />
        </>
      )}
    </div>
  );
}

export default App;
