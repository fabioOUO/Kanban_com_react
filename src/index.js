import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const elemento_HTML = document.getElementById("root");
const conponent = (
  <StrictMode>
    <App />
  </StrictMode>
);
ReactDOM.render(conponent, elemento_HTML);
