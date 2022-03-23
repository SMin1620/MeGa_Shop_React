import React, { useEffect, useState } from 'react';
import axios from 'axios'

import ProductList from '../components/ProductList';


function Products () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/products/')
            .then(response => {
                setProducts(response.data);
            });
    }, []);

    return(
        <div>
            <h1>Product</h1>
            <ProductList products={products} />
        </div>
    );
};


export default Products;
