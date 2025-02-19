import logo from './logo.svg';
import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { Fragment } from "react";

const styles = {
  divider: {borderColor: 'yellowgreen'}
}

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

  function handleClick(products){
    alert(`clickeamos sobre el producto ${products.title} de precio $${products.price}`)
  }

  return (
    <div className="App">
      <ProductList>
        {products.map(p => (
          <ProductCard 
          key={p.title}
          products={p} 
          onClick={handleClick}/>
        ))}
      </ProductList>

      <h2>Products which cost up to $700</h2>
     
        {products
          .filter(({price})=> price >= 700)
          .map(({title, price}, index) => (
            <Fragment key={index}>
              <hr style={styles.divider} />
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
