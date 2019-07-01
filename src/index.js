import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createBrowserHistory } from "history";
import "./styles/index1.scss";

const history = createBrowserHistory();

ReactDOM.render( <Router history={ history }>
    <App/>
</Router>, document.getElementById( "root" ) );
