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

  const styles = {
    Container:{
      border: "1px solid white",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",  
      minWidth: "50vh",
      minHeight: "50vh"
    },
    List: {
      listStyle: "none", /* Quita las viñetas de todos los li dentro de este ul */
      margin: 0,
      padding: 0,
    },
    NotAvailableStatus:{fontSize: '14px',color:'lightsalmon'},
    AvailableStatus:{fontSize: '14px',color:'lightgreen'},

  }

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
        return <p style={styles.NotAvailableStatus}>Not Avaliable</p>
      }

      return <p style={styles.AvailableStatus}>{ stockCount } items avaliable</p>
    }
      
    return(
      <article 
        style={{...styles.Container, background}}>
        <h1>{getProductTitle()}</h1>
        <img 
            src = {getImageSrc()}
            alt = {getProductTitle()}
            width={128}
            height={128}
        />
        <p>Specification:</p>
        <ul style={styles.List}>
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


  
  