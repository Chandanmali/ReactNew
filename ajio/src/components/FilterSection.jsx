import React from 'react'

function FilterSection({product, setProduct, setupdatedProduct, theme, toogle}) {

  

  const topRated = () => {
     const newProduct = product.filter(pro => pro.averageRating >= 4)
     console.log(newProduct)
     setupdatedProduct(newProduct)
  }

  const under2000 = () => {
    const newProduct = product?.filter(pro => (pro?.price?.sellingPrice?.doubleValue) <= 1000)
    
     console.log(newProduct)
     setupdatedProduct(newProduct)

  }
  
  const adidas = () => {
    const newProduct = product.filter(pro => pro.brandname == "adidas")
     console.log(newProduct)
     setupdatedProduct(newProduct)

  }
  
  const puma = () => {
    const newProduct = product.filter(pro => pro.brandname == "Puma")
     console.log(newProduct)
     setupdatedProduct(newProduct)

  }

  const under5000 = () => {
    const newProduct = product?.filter(pro => (pro?.price?.sellingPrice?.doubleValue) <= 5000)
    
     console.log(newProduct)
     setupdatedProduct(newProduct)

  }

  return (
    <div>
      <div className='flex gap-25 justify-center  mb-5'>

        <div><button onClick={topRated} className={`${theme ? "bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer" : "bg-white text-black px-5 py-2 rounded-xl font-semibold cursor-pointer"}`}>Top Rated</button></div>

        <div><button onClick={under2000} className={`${theme ? "bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer" : "bg-white text-black px-5 py-2 rounded-xl font-semibold cursor-pointer"}`}>Under 2000</button></div>

        <div><button onClick = {adidas} className={`${theme ? "bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer" : "bg-white text-black px-5 py-2 rounded-xl font-semibold cursor-pointer"}`}>adidas</button></div>

        <div><button onClick = {puma} className={`${theme ? "bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer" : "bg-white text-black px-5 py-2 rounded-xl font-semibold cursor-pointer"}`}>Puma</button></div>

        <div><button onClick={under5000} className={`${theme ? "bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer" : "bg-white text-black px-5 py-2 rounded-xl font-semibold cursor-pointer"}`}>Under 5000</button></div>
      </div>
    </div>
  )
}

export default FilterSection
