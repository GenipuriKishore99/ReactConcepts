import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
export function ShoppingId(){
    const [info,setInfo]=useState({id:0,title:'',price:0,category:'',rating:{rate:0,count:0}})
    const params=useParams();
    useEffect(()=>{
        axios({
            method:"get",
            url:`http://fakestoreapi.com/products/${params.proId}`
        })
        .then((res)=>{
            setInfo(res.data)
        })
    })
    return(
        
        <div>
                
                                <dl>
                                    <dt>Title</dt>
                                    <dd>{info.title}</dd>
                                    <dt>Preview</dt>
                                    <dd><img src={info.image} width="100px"height="100px"></img></dd>
                                    <dt>Price</dt>
                                    {/* <dd>{info.rating.count}</dd> */}
                                    <dt>Rating</dt>
                                    <dd><span className="bi bi-star-fill text-success"></span>{info.rating.rate}[{info.rating.count}]</dd>
                                </dl>
                                <p>
                                    <Link to={`/products/${info.category}`}>Back to{info.category}</Link>
                                </p>
                
                                </div>            
    
       
    )
}