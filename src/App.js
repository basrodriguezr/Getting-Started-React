import logo from './logo.svg';
import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { ProductFilter } from "./components/ProductFilter";
import { Fragment, useState } from "react";

function App() {
  const products = [
    {
      imageSrc: "img/iphone.png",
      title: "iPhone 13 Pro",
      specification:[
          "A15 Pro chip with 4-core GPU",
          "3x or 5x Telephoto camera",
          "Up to 29 hours video playback"
      ],
      stockCount: 15,
      price: 666
    },
    {
      imageSrc: "img/iphone.png",
      title: "iPhone 14 Pro",
      specification:[
          "A16 Pro chip with 6-core GPU",
          "3x or 5x Telephoto camera",
          "Up to 29 hours video playback"
      ],
      stockCount: 0,
      price: 999
    },
    {
      imageSrc: "img/iphone.png",
      title: "iPhone 15 Pro",
      specification:[
          "A17 Pro chip with 6-core GPU",
          "3x or 5x Telephoto camera",
          "Up to 29 hours video playback"
      ],
      stockCount: 10,
      price: 1399
    }
  ];

  const [filters, setFilters] = useState({
    price:{
      min: 0,
      max: 999,
    },
    other: 'other value'
  });

  function handlePurchase(products){
    alert(`clickeamos sobre el producto ${products.title} de precio $${products.price}`)
  }

  function handleFilter(key, value){
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [key]: value,
      }
    }))
  }

  return (
    <div className="App">
      <ProductList>
        {products.map(p => (
          <ProductCard 
          key={p.title}
          products={p} 
          onClick={handlePurchase}/>
        ))}
      </ProductList>

      <h2>Products Filtered by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter}/>
        {products
          .filter(({price})=> price >= filters.price.min && price <= filters.price.max)
          .map(({title, price}) => (
            <Fragment key={title}>
              <hr className="divider" />
              <p >
                {title} cost ${price}
              </p>
            </Fragment>            
          ))
        }
     
    </div>
  );
}

export default App;
