import { useEffect, useState } from "react";
// import './fetch.css';

function ProductsList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if(loading) return <p classname="loading">Loading...</p>;

    return (
        <div className="products-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">${product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <img src={product.image} alt={product.title} width={100} />
                </div>
            ))}
        </div>
    );
}

export default ProductsList;