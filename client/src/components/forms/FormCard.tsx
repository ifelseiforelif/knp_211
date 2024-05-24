import { useState } from "react";
import axios from "axios";
import IProduct from "../../models/IProduct"; 
import { v4 as uuidv4 } from 'uuid';

function FormCard() {
    const [product, setProduct] = useState<IProduct>({
        id: "",
        categoryId: "",
        slug: "",
        name: "",
        description: "",
        imageUrl: "",
        priceCent: 0,
        isActive: true,
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newProduct = { ...product, id: uuidv4() };
      await axios.post(import.meta.env.VITE_PATH_TO_SERVER + "products", newProduct);
      alert("Product added successfully");
    } 
    catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product");
    }
  };

  return (
    <div className="row justify-content-center">
        <h2 className="text-center">Create Card</h2>
        <div className="col-5 mt-5">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" name="name" value={product.name} onChange={handleChange} required />
                </div>
        
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" value={product.description} onChange={handleChange} required />
                </div>
        
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="imageUrl">Image URL</label>
                    <input className="form-control" type="file" id="imageUrl" name="imageUrl" value={product.imageUrl} onChange={handleChange} required />
                </div>
        
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="priceCent">Price (cents)</label>
                    <input className="form-control" type="number" id="priceCent" name="priceCent" value={product.priceCent} onChange={handleChange} required />
                </div>
        
                <button className="btn btn-primary" type="submit">Add Product</button>
            </form>
        </div>
    </div>
  );
}

export default FormCard;
