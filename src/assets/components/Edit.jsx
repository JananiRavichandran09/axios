import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({ id }) => {
    const navigate = useNavigate()
    const [editData, setEditData] = useState({
        product_id: '',
        product_name: '',
        product_price: '',
        product_description:''
    })
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async() => {
        await axios.get(`https://65d5f436f6967ba8e3bd13df.mockapi.io/api/products/${id}`)
            .then(res => setEditData(res.data) )
            .catch((err) => console.log(err))
        
    }
    const handleChange = (e) => {
        const { name, value } = e.target  //e.target.name and e.target.value
        setEditData((preData) => ({
            ...preData,[name]:value
        }))
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`https://65d5f436f6967ba8e3bd13df.mockapi.io/api/products/${id}`, editData)
            .then(res=>alert("Updated Successfully"))
            .catch((err) => console.log(err))
        navigate('/products')
    }
    return (
        <div>
            <div className="container" style={{border:"1px solid black", width:"500px", marginTop:"50px", justifyContent:"center",marginBottom:"50px", backgroundColor:"rgb(192, 255, 250)", fontFamily:"monospace", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <form onSubmit={handleFormSubmit}>
                <label style={{marginTop:"20px"}}>Product Id: <input type='text' name='product_id' value={editData.product_id} onChange={handleChange} required/>
                </label> <br /> <br />
                <label>Product Name: <input type='text' name='product_name' value={editData.product_name} onChange={handleChange} required/>
                </label> <br /> <br />
                <label>Product Price: <input type='text' name='product_price' value={editData.product_price} onChange={handleChange} required/>
                </label> <br /> <br />
                <label>Product Description: <input type='text' name='product_description' value={editData.product_description} onChange={handleChange} required/>
                </label> <br /> <br />
                <button type='submit' style={{marginBottom:"20px", textAlign:"center",backgroundColor:"yellowgreen", color:"black",borderRadius:"10px", border:"none"}}>Update</button>
                
                </form>
                </div>
        </div>
    );
};

export default Edit;