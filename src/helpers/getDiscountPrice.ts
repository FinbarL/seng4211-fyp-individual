const getDiscountPrice = (price: number, discountPercentage: number) => {
  //to two decimal places

  return (price * (1 - discountPercentage / 100)).toFixed(2);
};
export default getDiscountPrice;
