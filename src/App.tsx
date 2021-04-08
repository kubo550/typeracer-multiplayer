import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Race } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/race' component={Race} />
      </Switch>
    </Router>
  );
};

export default App;
