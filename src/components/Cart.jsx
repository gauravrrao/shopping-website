import React, { useContext } from 'react'
import './cart.css'
import { appreactor } from './Context'



const Cart = () => {

  const { carting ,setcarting } = useContext(appreactor)
  
  let reject = (ind) => {
     let newarr = carting.filter((id)=>{
        return( id.id != ind)
      })
      setcarting(newarr)
  }
  return (
    <>
    <div className='cart'>

      <div className='product-2'>
      {
          !carting ? 
          (
          <h1>no data</h1>
          ) : (
            carting.map((cur) => {
              return <div className="card">
                <h2 className='jk'>{cur.title}</h2>
                <img src={cur.image} className='image'
                  alt="" />
                <h3>Price = {cur.price}$</h3>
                <button className='remove' onClick={()=>{reject(cur.id)}}>Remove </button>
              </div>
            
        }) )
      }
      </div>
    </div>
    <div className="totaldiv">
      <h2>Total</h2>
      <hr className='hr' />
      <p>Total Price = 
        {
           carting.map(cur => cur.price).reduce((total,value) => total + value,0) 
        }
        $
      </p>
    </div>
    </>
  )
}

export default Cart