import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate()
    const [createData, setCreateData] = useState({
        product_id: '',
        product_name: '',
        product_price: '',
        product_description:''
    })
    const handleChange = (e) => {
        const { name, value } = e.target  //e.target.name and e.target.value
        setCreateData((preData) => ({
            ...preData,[name]:value
        }))
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`https://65d5f436f6967ba8e3bd13df.mockapi.io/api/products`, createData)
            .then(res=>console.log(res.data))
            .catch((err) => console.log(err))
        navigate('/products')
    }
    return (
        <div>
              <div className="container" style={{border:"1px solid black", width:"500px", marginTop:"50px", marginBottom:"50px",justifyContent:"center", backgroundColor:"rgb(192, 255, 250)", fontFamily:"monospace", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            
            <form onSubmit={handleFormSubmit}>
                <label style={{marginTop:"20px"}} >Product Id: <input type='text' name='product_id' value={createData.product_id} onChange={handleChange} required/>
                </label> <br /> <br />
                <label>Product Name: <input type='text' name='product_name' value={createData.product_name} onChange={handleChange} required/>
                </label> <br /> <br />
                <label>Product Price: <input type='text' name='product_price' value={createData.product_price} onChange={handleChange} required/>
                </label> <br /> <br />
                <label>Product Description: <input type='text' name='product_description' value={createData.product_description} onChange={handleChange} required/>
                </label> <br /> <br />
                <button type='submit' style={{marginBottom:"20px", textAlign:"center",backgroundColor:"yellowgreen", color:"black",borderRadius:"10px", border:"none"}}>Create</button>
                
                </form>
                </div>
        </div>
    );
};

export default Create;