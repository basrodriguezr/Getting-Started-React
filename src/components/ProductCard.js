export function ProductCard(props){  

    function getProductTitle(){
        return props.product.title;
    }

    function getImageSrc(){
        return props.product.imageSrc;
    }

    function getSpecification(index){
        return props.product.specification[index];
    }

    function getPrice(){
        return props.product.price;
    }

    return(
      <article 
        style={{
            border: "1px solid white",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
            width: "50%"       
        }}
      >
        <h1>{getProductTitle()}</h1>
        <img 
            src = {getImageSrc()}
            alt = {getProductTitle()}
            width= "128px" 
            height= "128px"
        />
        <p>Specification:</p>
        <ul>
          <li>{getSpecification(0)}</li>
          <li>{getSpecification(1)}</li>
          <li>{getSpecification(2)}</li>
        </ul>
        <button>Buy (from ${getPrice()})</button>
      </article>
    );
  }

  
  