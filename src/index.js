import { StrictMode } from "react";
import ReactDOM from "react-dom";

import NewEmail from "./NewEmail";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NewEmail />
  </StrictMode>,
  rootElement
);
