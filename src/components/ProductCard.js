import './ProductCard.css'
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

    function getProductTitle(){
        return products.title;
    }

    function getImageSrc(){
        return products.imageSrc;
    }

    function getPrice(){
        return products.price;
    }
    //Se puede usar el spread operator feature (...restProps) para desempacar cualquier objeto en uno individual  

    function Status({ stockCount }){
      if(stockCount === 0){
        return <p className='NotAvailableStatus'>Not Avaliable</p>
      }

      return <p className='AvailableStatus'>{ stockCount } items avaliable</p>
    }
      
    return(
      <article
        className="Container" 
        style={{background}}>
        <h1>{getProductTitle()}</h1>
        <img 
            src = {getImageSrc()}
            alt = {getProductTitle()}
            width={128}
            height={128}
        />
        <p>Specification:</p>
        <ul className='List'>
          {
            products.specification.map((spec, index) => 
              <li key={index}>{spec}</li>
            )
          }          
        </ul>
        <Status stockCount={products.stockCount}></Status>
        
        {
          products.stockCount > 0 && 
          <button onClick={() => onClick(products)}>Buy (from ${getPrice()})</button>
        }
      </article>
    );
  }


  
  