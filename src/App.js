import logo from './logo.svg';
import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

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
        {/* <ProductCard 
          product={product[0]} 
          onClick={handleClick}/>
        <ProductCard 
          product={product[1]} 
          onClick={handleClick}/>
        <ProductCard 
          product={product[2]} 
          onClick={handleClick}/> */}
      </ProductList>

      <h2>Products which cost up to $700</h2>
      <ul>
        {products.filter(({price})=> price >= 700).map(({title, price}, index) => (
          <li key={index}>
            {title} cost ${price}
          </li>
        ))}
      </ul>
    </div>
  );

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
}

export default App;
