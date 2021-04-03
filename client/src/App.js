import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Index from "./components/Index";

const App = () => {
    return(
        <Router>
            <Route exact path="/" component={Index} />
            <Route path="/home" component={Home} />
        </Router>
    )
}

export default App