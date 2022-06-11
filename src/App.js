import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

    const [productsData, setProductsData] = useState([]);
    const url = "https://fakestoreapi.com/products";

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setProductsData(response.data);
        })
    },[]);

    const renderProductData = () => {
        return productsData.map((item) => {
            return (
                <div className="max-w-xs bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                    <div className="flex-col">
                        <img className="p-8 rounded-t-lg" src={item.image} alt={item.title} />
                        <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            <br/>
                            <div className="text-m font-semibold tracking-tight text-gray-900 dark:text-white">{item.description}
                            </div>
                            <br/>
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {item.price}</span>
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.rating.rate} ({item.rating.count})</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return(
        <>
            <div className="flex flex-row flex-wrap flex-auto place-content-center gap-10">
                {renderProductData()}
            </div>
            
        </>
    )
}

export default App;