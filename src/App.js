import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Supdeco from "./pages/Supdeco";
import Iam from "./pages/Iam";
import Ism from "./pages/Ism";
import Forum from "./pages/Forum";

import Etablissements from "./pages/Etablissements";
import Connexion from "./pages/Connexion";

import Ensup from "./pages/Ensup";
import Esp from "./pages/Esp";
import Esmt from "./pages/Esmt";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>          
          <Route path="/Forum" component={Forum}></Route>
          <Route path="/etablissements" component={Etablissements}></Route>
          <Route path="/Connexion" component= {Connexion}></Route>
          
          <Route path="/ism" component={Ism}></Route>
          <Route path="/iam" component={Iam}></Route>
          <Route path="/supdeco" component={Supdeco}></Route>
          <Route path="/ensup" component={Ensup}></Route>
          <Route path="/esp" component={Esp}></Route>
          <Route path="/esmt" component={Esmt}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;