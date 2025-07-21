import React, { useState, useEffect, useContext } from 'react'
import ProductCard from '../ProductCard';
import { Link, useOutletContext } from 'react-router-dom';
import Loading from '../Loading';
import ThemeContext from '../../utils/themeContext';

function KidsFormal() {

    //const { theme, toggle, product, setProduct, updatedProduct, setupdatedProduct } = useOutletContext();

    const { theme, toggle, product, setProduct, updatedProduct, setupdatedProduct } = useContext(ThemeContext);

    const [menFormal, setMenFormal] = useState([])

    const getApiData = async () => {
        const api = await fetch("https://searchbff.tatacliq.com/products/mpl/search?searchText=%3Arelevance%3Acategory%3AMSH1320100%3AinStockFlag%3Atrue&isKeywordRedirect=true&isKeywordRedirectEnabled=false&channel=WEB&isMDE=true&isTextSearch=false&isFilter=false&qc=false&test=invizbff.qpsv3-inviz.ab&page=0&mcvid=79678686258332846970221011484266313438&customerId=&isSuggested=false&isPwa=true&pageSize=40&typeID=all")
    
        const json = await api.json();
        console.log(json.searchresult)
        setMenFormal(json.searchresult)
      }
    
      useEffect(() => {
        getApiData()
      }, [])
    

  return menFormal.length === 0 ? (<div className='mx-auto'><Loading /></div>)  : (
    <div>
      <div className='flex flex-wrap gap-15 justify-center'>
        {
            menFormal.map((elem, index) => {
                return (<div key={index} className=''>
                    <Link to={`/shoes/${elem.productId}`}><ProductCard info = {elem} theme={theme}/></Link>
                </div>)
            })
        }
      </div>
    </div>
  )
}

export default KidsFormal
