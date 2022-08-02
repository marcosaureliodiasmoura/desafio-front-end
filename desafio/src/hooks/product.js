import React, { useState, useEffect, createContext } from 'react';

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <ProductContext.Provider value={{
            products, setProducts,
        }}>
            {props.children}
        </ProductContext.Provider>
    );
}
export default ProductProvider;