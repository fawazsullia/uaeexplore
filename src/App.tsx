import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import ChooseEmirate from "./containers/ChooseEmirate/ChooseEmirate";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ChooseEmirate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
