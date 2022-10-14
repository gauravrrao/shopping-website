import React,{useContext} from 'react'
import './product.css'
import { appreactor } from './Context'

const Product = () => {

  const {item, carting, setcarting} = useContext(appreactor)

  let follow =(cur)=>{
    setcarting([...carting,cur])
  }

  return (
    <div className='product'>
      {
        !item ? (
          <h1>no data</h1>
        ) :(
        item.map((cur)=>{
          return <div className="card">
          <h2 className='jk'>{cur.title}</h2>
          <img src={cur.image} className='image'
          alt="" />
          <h3>Price = {cur.price}$</h3>
          <button className='add' onClick={()=>{follow(cur)}}>Add To Cart</button>
        </div>
        }) 
        )
      } 
    </div>
  )
}

export default Product