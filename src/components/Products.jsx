import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productImage from "../assets/medicine1.jpg";
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [message, setMessage] = useState("")

    const fetchProducts = () => {
        axios.get("http://localhost:5000/products")
            .then((result) => {
                setProducts(result.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the products!", error);
            });
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSearch = (e) => {
        if (searchItem ==="") {
            setMessage("search text is required");
            fetchProducts();
            return;
        } else {
            setMessage("")

        setProducts((prev) => {
            const updatedProd = prev.filter((data) => data.genericName === searchItem || data.tradeName === searchItem);
            return updatedProd;
        })
    }
    }

    return (
        <div className="container mt-4">
            {/* Search Products */}
            <div className='d-flex justify-content-center gap-3 mb-4'>
                <input type="text" placeholder='Generic/Trade Name' className='form-control' value={searchItem} onChange={(e) =>setSearchItem(e.target.value)}/>
                <input type="submit" value="Search" className='btn btn-primary' onClick={handleSearch}/>
            </div>

            <div className='text-center'> { message && <span className='text-danger'> {message}</span>}</div>

            {/* Products */}
            <div className='row g-4'>
                {products.length > 0 && products.map((product, index) => (
                    <div key={index} className='col-md-6'>
                        <div className='card h-100'>
                            <div className='row g-0'>
                                <div className='col-md-4 border-end border-4 border-success'>
                                    <img src={productImage} alt={product.tradeName} className='img-fluid' style={{width:"100%", height:"100%", objectFit:"cover"}} />
                                </div>
                                <div className='col-md-8 ps-4 '>
                                    <div className='card-body bg-success text-white'>
                                        <h4 className='card-title'>{product.tradeName}</h4>
                                        <p className='card-text'>{product.genericName}</p>
                                        <p className='card-text'>{product.category}</p>

                                        <Link to={`/product/${product.genericName}`} className='text-decoration-none text-white'> Know More ..</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
