import React from "react";
import ReactDOM from "react-dom";
import "./assets/style.scss";
import App from "./components/App";

import { groupStore } from "./stores/GroupStore";

const rootElement = document.getElementById("root");
ReactDOM.render(<App group={groupStore} />, rootElement);
