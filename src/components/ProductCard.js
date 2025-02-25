import { useState } from "react";
import styles from "./ProductCard.module.css"
/*
  Puede ser esta forma
  export function ProductCard(props){  
    const product = props.product;

    o esta

    export function ProductCard({ product }){  

*/
/*
Puede ser asi
export function ProductCard({product, background = "slategray", width, height}){  

o así

export function ProductCard({product, background = "slategray", ...restProps}){  

*/

  export function ProductCard({
    products, 
    background = "slategray", 
    onClick
  }){  

    //Se puede usar el spread operator feature (...restProps) para desempacar cualquier objeto en uno individual  
    //let stockCount = products.stockCount;
    const [stockCount, setStockCount] = useState(products.stockCount);
    const [showMore, setShowMore] = useState(false);

    function handleClick(){
      setStockCount((prevStockCount) => prevStockCount - 1);

      onClick(products);
    }

    function handleTwoClicks(){
      setStockCount((prevStockCount) => prevStockCount - 1);
      setStockCount((prevStockCount) => prevStockCount - 1);

      onClick(products);     
    }

    function Status({ stockCount }){
      if(stockCount === 0){
        return <p className={styles.NotAvailableStatus}>Not Avaliable</p>
      }

      return <p className={styles.AvailableStatus}>{stockCount} items avaliable</p>
    }
      
    return(
      <article
        className={styles.Container} 
        style={{background}}>
        <h1>{products.title}</h1>
        <img 
            src = {products.imageSrc}
            alt = {products.title}
            width={128}
            height={128}
        />
        <p>Specification:{' '}
          <button onClick={()=> setShowMore(!showMore)}>{showMore ? 'hide' : 'show'}</button>
        </p>
        {showMore && <ul className={styles.List}>
          {
            products.specification.map((spec, index) => 
              <li key={index}>{spec}</li>
            )
          }          
        </ul>}
        <Status stockCount={stockCount}></Status>       
        {
          stockCount > 0 && (
          <>
            <p>Price: $ {products.price}</p>
            <button onClick={() => handleClick()}>Buy</button>
          </>
        )}
        {
          stockCount > 1 &&
          <>
            <button onClick={() => handleTwoClicks()}>Buy 2</button>
          </>
        }
      </article>
    );
  }


  
  