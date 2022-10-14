import React, { createContext, useState,useEffect } from 'react'

let appreactor=React.createContext()

const Context = ({children}) => {

    const [item, setitem] = useState()
    const [carting, setcarting] = useState([])

    useEffect(() => {
     let api='https://fakestoreapi.com/products'
     let getapi=async(a)=>{
            let data = await fetch(a)
            let response = await data.json()
            setitem(response)
            console.log(response)
      }
    getapi(api)
    }, [item])
    

  return (
    <>
    <appreactor.Provider value={{item , carting, setcarting}}>
        {children}
    </appreactor.Provider>
    </>
  )
}

export default Context
export {appreactor}