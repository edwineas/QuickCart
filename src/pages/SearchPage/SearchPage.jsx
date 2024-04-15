import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Shops from '../../components/ShopList/Shops';
import Cart from '../../components/Cart/Cart';
import './SearchPage.css';
import { useProducts } from '../../components/data'; // adjust the path as needed

export default function SearchPage() {
    const products = useProducts();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            )
        );
    }, [products, searchQuery]);

    return (
        <>
            <div className="body-container">
                <SearchBar onSearch={setSearchQuery} />
                <br></br>
                <Shops products={filteredProducts} />
                <Cart />
            </div>
            <div id='foot'>
            </div>
        </>
    );
}