export function ProductCard(){
    const product = {
        imageSrc: "img/iphone.png",
        title: "iPhone 15 Pro",
        specification:[
            "A17 Pro chip with 6-core GPU",
            "3x or 5x Telephoto camera",
            "Up to 29 hours video playback"
        ],
        price: 999
    }

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
        <h1>{product.title}</h1>
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

  
  