import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import useProductDetail from '../hooks/useProductDetail';

function ProductDetail() {

    //const [singleProduct, setSingleProduct] = useState(null)
    const {productID} = useParams()
    console.log(productID)

    //custom hook - nothing but use for easy optimisation
    const singleProduct = useProductDetail(productID)


    // useEffect(() => {
    //     getApi();
    // }, [])

    // async function getApi() {
    //     const api = await fetch(`https://www.tatacliq.com/marketplacewebservices/v2/mpl/products/productDetails/${param.productID}?isPwa=true&isMDE=true&isDynamicVar=true`)
    //     const json = await api.json()
    //     // console.log(json.galleryImagesList[0].galleryImages[4].value)
    //     setSingleProduct(json)
    // }

    return singleProduct === null ? <Loading /> : (
        <div>

            {/* Note: In start the singleProduct is null in useState so that there is an error for singleProduct.brandName, because we are calling api and they take some time to display data, so we have to put condition  singleProduct === null ? <h1>Loading</h1> : ( */}

            <div className='flex '>
                <div className='flex flex-col w-3/6'>
                    <div className='-mt-[14rem]'>
                        {singleProduct?.galleryImagesList?.[1]?.galleryImages?.[4]?.value ? (
                            <img
                                className='object-cover'
                                src={singleProduct.galleryImagesList[1].galleryImages[4].value}
                                alt=""
                            />
                        ) : singleProduct?.galleryImagesList?.[3]?.galleryImages?.[4]?.value ? (
                            <img
                                className='object-cover'
                                src={singleProduct.galleryImagesList[3].galleryImages[4].value}
                                alt=""
                            />
                        ) : (
                            <div className="text-gray-500 text-center">Image not available</div>
                        )}
                    </div>

                    <div className='-mt-[10rem] w-40  flex gap-20 px-5 py-10'>
                        <img className=' border rounded-2xl' src={singleProduct.galleryImagesList[0].galleryImages[4].value} alt="" />

                        <img className='border rounded-2xl' src={singleProduct.galleryImagesList[2].galleryImages[4].value} alt="" />

                        <img className='border rounded-2xl' src={singleProduct.galleryImagesList[3].galleryImages[4].value} alt="" />
                    </div>


                </div>

                <div className='pl-15 pt-10 w-1/2 '>
                    <h1 className='text-gray-700 text-5xl font-bold'>Brand : <span className='text-blue-500'>{singleProduct.brandName}</span></h1>
                    <h1 className='text-gray-500 text-2xl font-semibold pt-5 '>{singleProduct.productName}</h1>
                    <h1 className='text-gray-900 text-lg font-semibold py-5 font-serif'>Description: {singleProduct.productDescription}</h1>

                    <h1 className='text-red-600 text-3xl'><span className='text-green-600 text-4xl font-bold pr-5'>₹{singleProduct.winningSellerPrice.doubleValue} Only-</span>  ({singleProduct.discount}%)OFF </h1>

                    {singleProduct.ratingCount ?
                        <h1 className='text-xl font-semibold mt-3'>Rating : <span className='text-yellow-600'>{(singleProduct.averageRating).toFixed(1)}</span> <span className='pl-7'>Review: <span className='text-yellow-600'>{singleProduct.numberOfReviews}</span></span></h1> : <h1 className='text-xl font-semibold mt-3'>Rating : <span className='text-yellow-600'>{(singleProduct.ratingCount).toFixed(1)}</span> <span className='pl-7'>Review: <span className='text-yellow-600'>{singleProduct.numberOfReviews}</span></span></h1>}

                    <div className='flex gap-10 pt-10 '>
                        <button className='text-rose-600 text-xl font-bold bg-white border border-rose-600 px-10 py-3 rounded-xl shadow-xl cursor-pointer'>Add to Bag</button>   

                        <button className='text-white text-xl font-bold bg-rose-600 px-10 py-3 rounded-xl shadow-xl cursor-pointer'>Buy Now</button>
                    </div>
                </div>

            </div>





        </div>
    )
}

export default ProductDetail
