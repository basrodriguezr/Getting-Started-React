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
  export function ProductCard({product, background = "slategray", onClick, ...restProps}){  

    function getProductTitle(){
        return product.title;
    }

    function getImageSrc(){
        return product.imageSrc;
    }

    function getSpecification(index){
        return product.specification[index];
    }

    function getPrice(){
        return product.price;
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
            {...restProps}
        />
        <p>Specification:</p>
        <ul>
          <li>{getSpecification(0)}</li>
          <li>{getSpecification(1)}</li>
          <li>{getSpecification(2)}</li>
        </ul>
        <button onClick={() => onClick(product)}>Buy (from ${getPrice()})</button>
      </article>
    );
  }

  
  