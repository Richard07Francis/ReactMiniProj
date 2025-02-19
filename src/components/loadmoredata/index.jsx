import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData(){
    
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    let isFetching = false;
    async function fetchProducts(){
        try{
            if(isFetching) return;
            isFetching = true;
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`);
            const data = await response.json();
            
            if(data && data.products && data.products.length){
                setProducts((prevData) => [...prevData, ...data.products]);
            }
            setLoading(false);
            isFetching = false;
        } catch(e){
            console.error(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if(products && products.length===100) setDisableButton(true);
    }, [products]);
    
    if(loading){
        return <div>Loading...</div>;
    }

    return <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ? 
                products.map((item) => (
                    <div key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                )) 
                : null
            }
        </div>
        <div className="button-container">
            <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
            {
                disableButton ? <p>You have reached 100 products</p> : null
            }
        </div>
    </div>;
    
}