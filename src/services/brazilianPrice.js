function toBrazilianPrice(price){
  const finalPrice = price.toFixed(2).replace('.', ',')

  switch (finalPrice.length) {
    case 7:
      return `${finalPrice.slice(0,1)}.${finalPrice.slice(1,7)}`
    case 8:
      return `${finalPrice.slice(0,2)}.${finalPrice.slice(2,8)}`
    case 9:
      return `${finalPrice.slice(0,3)}.${finalPrice.slice(3,9)}`
    case 10:
      return `${finalPrice.slice(0,1)}.${finalPrice.slice(1,4)}.${finalPrice.slice(4,10)}`
    default:
      return finalPrice;
  }
}


export default toBrazilianPrice;