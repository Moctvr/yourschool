import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";

import Dropdown from "./Dropdown";
import logo from '../logo.png'
import "./Button.css";
import fire from "./login/fire";




const Navbar = ({ navItems }) => {

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
  
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          YourSchool
          <img src={logo} alt='logo' className='logo'/>
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Etablissements") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        
         <Link to="Connexion">
        <button className="btnc" >Connexion</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
