import React from 'react'
import ProductCard from './ProductCard'
import { useState, useEffect } from 'react';
import FilterSection from './FilterSection';
import Shimmer from './Shimmer';
import Navbar from './Navbar';
import { useOutletContext } from 'react-router-dom';


function Body() {
  const { theme, toggle, product, setProduct, updatedProduct, setupdatedProduct } = useOutletContext();
  
  

  const filterData = (searchText) => {
    const filter = product.filter((prev) => {
      return prev.brandname.toLowerCase().includes(searchText.toLowerCase())
    })
    setupdatedProduct(filter)
  }


  const getApiData = async () => {
    const api = await fetch("https://searchbff.tatacliq.com/products/mpl/search?searchText=%3Arelevance%3Acategory%3AMSH1311%3AinStockFlag%3Atrue&isKeywordRedirect=true&isKeywordRedirectEnabled=false&channel=WEB&isMDE=true&isTextSearch=false&isFilter=false&qc=false&test=invizbff.qpsv3-inviz.ab&page=0&mcvid=79678686258332846970221011484266313438&customerId=&isSuggested=false&isPwa=true&pageSize=40&typeID=all")

    const json = await api.json();
    console.log(json.searchresult)
    setProduct(json.searchresult)
    setupdatedProduct(json.searchresult)
  }

  useEffect(() => {
    getApiData()
  }, [])

  return updatedProduct.length === 0 ? <Shimmer /> : (
    <div>
      {/* <Navbar theme = {theme} toggle = {toggle} matchCard={filterData}/> */}
      <div className="mt-10">

        <div>
          <FilterSection
            product={product}
            setProduct={setProduct}
            setupdatedProduct={setupdatedProduct}
            theme={theme}
            toggle={toggle} />
        </div>

        <div className='flex gap-10 flex-wrap justify-center '>

          {
            updatedProduct.map((elem, index) => {
              return (
                <div key={index}>
                  <ProductCard info={elem} theme={theme} />
                </div>
              )
            })
          }
        </div>
      </div>

    </div>

  )
}

export default Body
