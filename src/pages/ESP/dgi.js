import React, {useState,useEffect} from 'react';
import dgie from "../../images/dgi.jpeg";
import { Link } from 'react-router-dom';
import dgidata from "./dgidata";

function dgi() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [filter,setFilter] =useState('');

    
    let dgiData = dgidata.cardData.filter(item=>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });
   
    return (
      

    <div>
      <div className="school">
        <p>
          <img src={dgie} className="img" />
          <p className="text"> Departement Genie Informatique  </p>
        </p> 
      </div> 
      <section className="py-4 container">
            <div className="row justify-content-center">
              {dgiData.map((item,index)=>{
                return(
                  <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <div className="imgi">
                        <Link to={item.path}>
                      <div className="card p-0 overflow-hidden h-100 shadow">
                        
                       
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.desc}</p>
                        </div>
                    </div>
                    </Link>
                        </div>
                        
                    
                    
                  </div>
                  
                    )
              })}
          <div>

            
            
        
          </div>
          
            </div>
        </section>
      
    </div>
     
  );
}

export default dgi;



