
import React, {useState} from 'react';
import Dataetab from './Dataetab';
import { Link } from 'react-router-dom';
const Search = () => {
    const [filter,setFilter] = useState('');

    const searchText = (event)=>{
        setFilter(event.target.value);
    }
    let DataetabSearch = Dataetab.cardData.filter(item=>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });


    return (
        <section className="py-4 container">
            <div className="row justify-conten-center">

                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <label className="form-lable h4">Search</label>
                        <input
                        type="text"
                        className="from-control"
                        value={filter}
                        onChange={searchText.bind(this)}
                        />

                    </div>

                </div>


                {DataetabSearch.map((item,index)=>{
                return(
                    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <Link to={item.path}>
                            <div className="card p-0 overflow-hidden h-100 shadow">
                        <img src={item.img} alt='' className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.desc}</p>
                        </div>
                    </div>
                        </Link>
                    
                </div>
                    )
                    })}   
            </div>
        </section>
    )
}
export default Search;