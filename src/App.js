import logo from './logo.svg';
import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {
  const product = [
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

  function handleClick(product){
    alert(`clickeamos sobre el producto ${product.title} de precio $${product.price}`)
  }

  return (
    <div className="App">
      <ProductList>
        <ProductCard width='96px' height='96px' background='darkolivegreen' product={product[0]} onClick={handleClick}/>
        <ProductCard width='64px' height='64px' product={product[1]} onClick={handleClick}/>
        <ProductCard width='128px' height='128px' background='peru' product={product[2]} onClick={handleClick}/>
      </ProductList>
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
