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

    function getSpecification(index){
        return products.specification[index];
    }

    function getPrice(){
        return products.price;
    }

    //Se puede usar el spread operator feature (...restProps) para desempacar cualquier objeto en uno individual  

    
      
    return(
      <article 
        style={{
            background,
            border: "1px solid white",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",  
            width: "50vh",
            height: "50vh"
        }}
      >
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
        <button onClick={() => onClick(products)}>Buy (from ${getPrice()})</button>
      </article>
    );
  }

  
  