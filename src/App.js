import React , { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home";
import Supdeco from "./pages/Supdeco";
import Iam from "./pages/Iam";
import Ism from "./pages/Ism";
import Forum from "./pages/Forum";
import PrendreRDV from "./pages/PrendreRDV";

import Etablissements from "./pages/Etablissements";
import Connexion from "./pages/Connexion";

import Ensup from "./pages/Ensup";
import Esp from "./pages/Esp";
import Esmt from "./pages/Esmt";
import { navItems2 } from "./NavItems"
import { navItems1 } from "./NavItems"
import fire from "./components/login/fire";



function App() {
  const[user,setUser]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[emailError,setEmailError]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const[hasAccount,setHasAccount]=useState('false');
    
    const clearInputs = () =>{
      setEmail('');
      setPassword('');
    }
    
    const clearErrors = () =>{
      setEmailError('');
      setPasswordError('');
    }

    const handleLogin = () => {
      clearErrors(); 
      fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((err) => {  
            switch(err.code){
              case "auth/invalid-email":
              case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message);
                break;
                case "auth/wrong-password":
                  setPasswordError(err.message);
                  break;
            }
        });
    };

    const handleSignup = () => {
      clearErrors(); 
      fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) => {  
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;
          }
      });
  };
    
  const handleLogout = () => {
    fire.auth().signOut();
  };
  
  const authListener = () =>{
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        clearInputs();
        setUser(user);   
      }else{
        setUser("");
      }
    }
    );
  };
    
  useEffect (() => {
    authListener();
  }, []);
  

  return (
    <>
      <BrowserRouter>
        {user ? (
          <Navbar2 navItems={navItems2} />
          ) : (
            <Navbar navItems={navItems1} />
          )}
        
        <Switch>
          <Route path="/"  exact component={Home}></Route>          
          <Route path="/Forum" component={Forum}></Route>
          <Route path="/etablissements" component={Etablissements}></Route>
          <Route path="/Connexion" component={Connexion}></Route>
          <Route path="/PrendreRDV" component={PrendreRDV}></Route>
          
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