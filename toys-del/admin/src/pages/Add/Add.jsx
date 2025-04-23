import React, {  useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";

const Add = ({url}) => {
    
  const [image, setImage] = useState(false);
  const [ data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Păpuși"
  })

   const onChangeHadler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
   }

   const onSubmitHandler = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/toys/add`,formData)
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name:"",
                description:"",
                price:"",
                category:"Păpuși"
              })
              setImage(false); 
        }
        else {
            toast.error(response.data.message)
        }
   }

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Încarcă imagine</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Nume produs</p>
          <input onChange={onChangeHadler} value={data.name} type="text" name="name" placeholder="Scrie aici" />
        </div>
        <div className="add-product-description flex-col">
          <p>Descriere produs</p>
          <textarea onChange={onChangeHadler} value={data.description}
            name="description"
            rows="6"
            placeholder="Scrie descrierea aici"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Categorie produs</p>
            <select onChange={onChangeHadler} name="category">
              <option value="Păpuși">Păpuși</option>
              <option value="LEGO">LEGO</option>
              <option value="Plușuri">Plușuri</option>
              <option value="Educaționale">Educaționale</option>
              <option value="Bebeluși">Bebeluși</option>
              <option value="Vehicule">Vehicule</option>
              <option value="Rol & joacă">Rol & joacă</option>
              <option value="Jocuri">Jocuri</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Pretul produsului</p>
            <input onChange={onChangeHadler} value={data.price} type="Number" name="price" placeholder="$20" />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Adaugă
        </button>
      </form>
    </div>
  );
};

export default Add;
