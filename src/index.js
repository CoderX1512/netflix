import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./global-styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

// or you can do --->
//import {render} from 'react-dom';
//render(<App />, document.getElementById('root'));
