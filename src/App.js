import ReactDOM from "react-dom";
import QueryCountryBody from "./QueryCountryBody";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";

const App = () => {
    return (
        <div>
            <div className="menu-bar">
                <h1 id="logo">
                    <a href="/">Where in the world? </a>
                </h1>
                <h2 className="change-dark-mode-btn">Dark Mode</h2>
            </div>
            <Router>
                <Switch>
                    <Route path="/details/:iso">
                        <Details />
                    </Route>
                    <Route path="/">
                        <div id="dark-mode-field">
                            <QueryCountryBody />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
