import React from 'react'

function FilterSection({product, setProduct}) {

  

  const topRated = () => {
     const newProduct = product.filter(pro => pro.averageRating >= 4)
     console.log(newProduct)
     setProduct(newProduct)
  }

  const under2000 = () => {
    const newProduct = product?.filter(pro => (pro?.price?.sellingPrice?.doubleValue) <= 1000)
    
     console.log(newProduct)
     setProduct(newProduct)

  }
  
  const adidas = () => {
    const newProduct = product.filter(pro => pro.brandname == "adidas")
     console.log(newProduct)
     setProduct(newProduct)

  }
  
  const puma = () => {
    const newProduct = product.filter(pro => pro.brandname == "Puma")
     console.log(newProduct)
     setProduct(newProduct)

  }

  const under5000 = () => {
    const newProduct = product?.filter(pro => (pro?.price?.sellingPrice?.doubleValue) <= 5000)
    
     console.log(newProduct)
     setProduct(newProduct)

  }

  return (
    <div>
      <div className='flex gap-25 justify-center mt-10 mb-5'>
        <div><button onClick={topRated} className='bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer'>Top Rated</button></div>

        <div><button onClick={under2000} className='bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer'>Under 2000</button></div>

        <div><button onClick = {adidas} className='bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer'>adidas</button></div>

        <div><button onClick = {puma} className='bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer'>Puma</button></div>

        <div><button onClick={under5000} className='bg-black text-white px-5 py-2 rounded-xl font-semibold cursor-pointer'>Under 5000</button></div>
      </div>
    </div>
  )
}

export default FilterSection
