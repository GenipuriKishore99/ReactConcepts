import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
export function ShoppingCart(){
    const [category,setCategory]=useState([]);
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://fakestoreapi.com/products/categories"
        })
        .then((res)=>{
            setCategory(res.data)
        })
    },[])
    return(
        <div className="container-fluid">
            <div>
                <ol>
                {
                    category.map((cat)=>{
                        return(
                            <li key={cat}>
                               <Link to={`/products/${cat}`}>{cat.toUpperCase()}</Link>

                            </li>
                            
                        )
                    })
                }
                {/* <div>
                <p><Link to="/home">Back to Category</Link></p>
                </div> */}
                
                </ol>
                
            </div>

        </div>
    )
}