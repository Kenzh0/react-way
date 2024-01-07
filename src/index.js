import React, {StrictMode} from 'react';
import './index.css';
import SamuraiJSApp from "./App";
import * as serviceWorker from "./serviceWorker";
import {createRoot} from "react-dom";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
      <SamuraiJSApp/>
  </StrictMode>
);

serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

