import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() => {
        await axios.get('https://65d5f436f6967ba8e3bd13df.mockapi.io/api/products')
            .then(res => setProducts(res.data))
            .catch((err)=>{ console.log(err); })
    }
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {products.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                       <div className="container">
                                    <div class="col" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" }} >
    <div class="card h-100">
      <img src={item.product_image} class="card-img-top" width={"70px"} height={"350px"} />
      <div class="card-body">
                                            <h4 class="card-title" style={{textAlign:"center", color:"purple", fontFamily:"Protest Riot"}}>{item.product_name}</h4>
                                            <h6 style={{textAlign:"center", color:"red"}}>{ item.product_price}</h6> <br />
                                            <p class="card-text" style={{textAlign:"center"}}>{ item. product_description}</p>
      </div>
      <br />
    </div>
                                    </div>
                                    </div>
                            </div>
                        </>
                 )
             })}   
    
                
     </div>
</div>
        
    );
};

export default Home;