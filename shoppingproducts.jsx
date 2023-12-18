import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function ShoppingProducts(){
         const [product,setProduct]=useState([])
    const params=useParams();
    useEffect(()=>{
        axios({
            method:"get",
            url:`http://fakestoreapi.com/products/category/${params.catName}`
        })
        .then((res)=>{
            setProduct(res.data)
        })
    },[])
    return(
        <div className="container-fluid">
            <h3>{params.catName}products</h3>
            <div className="d-flex">
                {
                    product && product.map((product)=>{
                        return(
                            <div className="card m-2 "  key={product.id}>
                                <Link to={`/details/${product.id}`}>
                                <img src={product.image} width="100px" height="100px" className="card-img-top border border-1 border-primary"></img>
                                </Link>
                            </div>
                        )
                    })
                }
               
            </div>
            <div>
                <p><Link to="/home">Back To Home</Link></p>
            </div>
        </div>
    )
}