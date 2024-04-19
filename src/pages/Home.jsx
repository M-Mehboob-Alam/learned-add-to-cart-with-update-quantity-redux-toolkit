import React, { useEffect } from 'react'
import Loader from '../components/Loader';
import Product from '../components/Product';

const Home = () => {
    const API_URL = 'https://fakestoreapi.com/products';

    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const fetchProducts = async () => {
        // console.log('calling api');
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log('error while fetching products', error);
        }
       
        setLoading(false);
    }

    useEffect(() => {
        fetchProducts();
    }, []);
  return (
    <div>
        {
            loading ? (
                <Loader />
            ) :
            products.length === 0 ? (
            <h1>No Products Found</h1>
            )  : (
                
                            <div className="container">
                            <div className="row">
                    {
                        products.map((product) => (
                            <Product key={product.id} product={product} />   
                           
                        ))
                    }
                    </div>
                    </div>                           
               
            )
        }
    </div>
  )
}

export default Home