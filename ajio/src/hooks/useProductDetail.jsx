import React from 'react'
import { useState, useEffect } from 'react';

function useProductDetail( productID ) {
 
    const [singleProduct, setSingleProduct] = useState(null)

    useEffect(() => {
        getApi();
    }, [])

    async function getApi() {
        const api = await fetch(`https://www.tatacliq.com/marketplacewebservices/v2/mpl/products/productDetails/${productID}?isPwa=true&isMDE=true&isDynamicVar=true`)
        const json = await api.json()
        // console.log(json.galleryImagesList[0].galleryImages[4].value)
        setSingleProduct(json)
    }

    return (
        singleProduct
    )
}

export default useProductDetail
