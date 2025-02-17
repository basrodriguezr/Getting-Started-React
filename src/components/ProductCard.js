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
    onClick,
    getProductTitle,
    getImageSrc,
    getSpecification,
    getPrice
  }){  

    function getProductTitle(){
        return products.title;
    }

    function getImageSrc(){
        return products.imageSrc;
    }

    function getSpecification(index){
        return products.specification[index];
    }

    function getPrice(){
        return products.price;
    }
    //Se puede usar el spread operator feature (...restProps) para desempacar cualquier objeto en uno individual  

    function Status({ stockCount }){
      if(stockCount === 0){
        return <p style={{fontSize: '14px',color:'lightsalmon'}}>Not Avaliable</p>
      }

      return <p style={{fontSize: '14px',color:'lightgreen'}}>{ stockCount } items avaliable</p>
    }
      
    return(
      <article 
        style={{
            background,
            border: "1px solid white",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",  
            minWidth: "50vh",
            minHeight: "50vh"
        }}>
        <h1>{getProductTitle()}</h1>
        <img 
            src = {getImageSrc()}
            alt = {getProductTitle()}
            width={128}
            height={128}
        />
        <p>Specification:</p>
        <ul>
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


  
  