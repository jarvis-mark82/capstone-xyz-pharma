import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productImage from "../assets/medicine1.jpg"
import axios from 'axios'

const ProductDetail = () => {
    const product = useParams()

    const [details, setDetails] = useState([])
    console.log(product)
    const [message, setMessage]  = useState("")
    useEffect(() => {
        axios.get("http://localhost:5000/products")
        .then(result => {
           // console.log(result.data)
            const filteredResult = result.data.filter((data) => data.genericName === product.productName);
            setDetails(filteredResult);
        })
        .catch(error => {
            setMessage("Something went wrong")
        })
    },[product.productName])
  return details.length > 0 ? (
    <div className='container'>
        <div className='row pt-4'>
            
            <div className='col-md-8 '>
                <div className='card-body border  p-4'>
                    <h4 className='card-title'>Description</h4>
                    <p> {details[0].description}</p>
                    <h4>Side Effects</h4>
                    <ul> 
                        {
                            details[0].sideEffects.map((side, index) => (
                                <li key={`${index}-${side}`}> {side}</li>
                            ))
                        }
                    </ul>

                    <h4>Uses</h4>
                    <ul> 
                        {
                            details[0].uses.map((use, index) => (
                                <li key={`${index}-${use}`}> {use}</li>
                            ))
                        }
                    </ul>

                    
                </div>
            </div>

            <div className='col-md-4 '>
                <img src={productImage} alt={product.tradeName} className='img-fluid' style={{width:"100%", height:"100%", objectFit:"cover"}} />
            </div>
        </div>

    </div>
  ) : <div className='text-danger text-center'> Something Went Wrong</div>
}

export default ProductDetail