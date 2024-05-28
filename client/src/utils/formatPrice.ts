const formatPrice = (price: number) => {
    if (price % 1 !== 0) {
      return price.toFixed(2); 
    } 
    else {
      return price;
    }
};

export default formatPrice;