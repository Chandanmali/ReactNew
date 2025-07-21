// themeContext.jsx
import { createContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true)
    const toggle = () => setTheme(!theme)

    const [product, setProduct] = useState([]);
    const [updatedProduct, setupdatedProduct] = useState([])
    
    const filterData = (searchText) => {
        const filter = product.filter((prev) => {
            return prev.brandname.toLowerCase().includes(searchText.toLowerCase())
        })
        setupdatedProduct(filter)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggle, product, setProduct, updatedProduct, setupdatedProduct, filterData }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
