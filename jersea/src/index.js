import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import {DataProvider,AuthProvider,WishlistProvider} from "./context"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WishlistProvider>
        <DataProvider>
          <App />
        </DataProvider>
        </WishlistProvider>
      </AuthProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
