import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HowToPlay from "./Components/HowToPlay";
import War from "./Components/GameInstructions/War";
import Memory from "./Components/GameInstructions/Memory";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import GlobalStyles from "./GlobalStyles";
function App() {
  return (
    <>
      <Router>
        <NavBar Home={Home} HowToPlay={HowToPlay} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/how-to-play" component={HowToPlay} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
