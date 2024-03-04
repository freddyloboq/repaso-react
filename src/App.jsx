import { useState } from 'react';
import './App.css'
import {NavBar} from './components/users/NavBar'
import Card from './components/users/Card'

function App() {
  const [ productDetailP,setProductDetail] = useState({})
  const [ listOfProduct, setListOfProduct ] = useState([
    {
      title: "producto 1",
      description: "ieudfbvouerigbpae9rubnqar3eubebirvuebv",
    },
  ]);

  const handleChange = (e) => {
    setProductDetail({
      ...productDetailP,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setListOfProduct([...listOfProduct, productDetailP])
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          min="2"
          max="20"
          placeholder="Título del producto"
          name="title"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Descripcion del producto"
          name="description"
        />
        <button type="submit" className="btn btn-info">
          Agregar Producto
        </button>
      </form>
      <h1>Lista de compras</h1>
      <div className="d-flex justify-content_between">
      {
        listOfProduct.map((product, index) => {
          return <Card key={index} product={product} />;
        })
      }
      </div>
    </>
  );
}

export default App
