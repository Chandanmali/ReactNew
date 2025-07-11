import React from 'react'
import ProductCard from './ProductCard'
import { useState, useEffect } from 'react';
import FilterSection from './FilterSection';

function Body({theme, toogle}) {

     const [product, setProduct] = useState([]);
     const [updatedProduct, setupdatedProduct] = useState([])
     
    
      const getApiData = async() => {
        const api = await fetch("https://searchbff.tatacliq.com/products/mpl/search?searchText=%3Arelevance%3Acategory%3AMSH1311%3AinStockFlag%3Atrue&isKeywordRedirect=true&isKeywordRedirectEnabled=false&channel=WEB&isMDE=true&isTextSearch=false&isFilter=false&qc=false&test=invizbff.qpsv3-inviz.ab&page=0&mcvid=79678686258332846970221011484266313438&customerId=&isSuggested=false&isPwa=true&pageSize=40&typeID=all")
    
        const json = await api.json();
        console.log(json.searchresult)
        setProduct(json.searchresult)
        setupdatedProduct(json.searchresult)
        
      }
    
      useEffect(() => {
       getApiData()
      }, [])

  return (
    <div className="mt-10">

      <div>
        <FilterSection 
        product = {product} 
        setProduct = {setProduct} 
        setupdatedProduct = {setupdatedProduct}
        theme = {theme}
        toogle = {toogle}/>
      </div>

      <div className='flex gap-10 flex-wrap justify-center '>

        {
            updatedProduct.map((elem, index) => {
                return(
                    <div key={index}>
                        <ProductCard  info = {elem} theme = {theme}  />
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Body
