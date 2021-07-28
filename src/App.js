import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HowToPlay from "./Components/HowToPlay";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/How-to-play" component={HowToPlay} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
