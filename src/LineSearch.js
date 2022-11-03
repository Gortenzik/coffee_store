import { useState } from "react";
import { data } from './data';


function LineSearch() {
    
    const [query, setQuery] = useState("");
    

    const coffeeSearch = (e) => {
        console.log(e.target.value);
        setQuery(e.target.value);
    }


    return (
        <div className="listCoffee">
        <form className="searchCoffee">
            <input className="searchCoffeeTea" type="text" placeholder="Поиск..." onChange={coffeeSearch}/>
        </form>

            <div className="filterCoffee" >
        {data.filter((data) => data.name.toLowerCase().includes(query) ||
        data.description.toLowerCase().includes(query)).map ((data) => (
                <div key={data.id} className="productGeneral">
                    <div key={data.id} className='product-card'>
                        <img className='photoTea' src={data.image} alt='' width='350px'/>
                
                    <div  className='product-info'> 
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                    <div className="btnCoffee">    
                        <h4 className="price">{data.price}</h4>
                        <button className="shopCast">🛒</button>
                    </div>
                    </div> 
                </div> 
                </div>
                
        ))}
        </div>


        </div>
    )
}

export default LineSearch;