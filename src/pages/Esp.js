
import React, {useState,useEffect} from 'react';
import EspData from './EspData';
import { Link } from 'react-router-dom';
import esp from '../images/esp.jpeg'
import fire from '../components/login/fire';

import "../components/Button.css"
import Loginform from '../components/login/Loginform';
    


function Esp() {
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
  },[]); 
  
  const [filter,setFilter] = useState('');

    
    let EspDatasearch = EspData.cardData.filter(item=>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });
  return (
    <div>
      <div className="school">
        <p>
          <img src={esp} className="img" />
          <p className="text"> Ecole Superieure Polytechnique de DAKAR </p>
        </p> 
      </div> 
      <section className="py-4 container">
            <div className="row justify-conten-center">
              {EspDatasearch.map((item,index)=>{
                return(
                  <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                    
                        <Link to={item.path}>
                            <div className="card p-0 overflow-hidden h-100 shadow">
                       
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.desc}</p>
                        </div>
                    </div>
                    </Link>
                    
                    
                  </div>
                  
                    )
              })}
          <div>
            {user ? (
            <Link to="PrendreRDV">
                <button  onClick={handleLogin} className="btnc">Prendre Rendez VOUS</button>
            </Link>
          ) : (
           <Link to="Connexion">
                <button  onClick={handleLogin} className="btnc">Prendre Rendez VOUS</button>
            </Link>
          )}
            
        
          </div>
          
            </div>
        </section>
      
    </div>
  );
}

export default Esp;
