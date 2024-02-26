export const currencyFormatter = (currency: number, sign: string) => {
  var sansDec = currency.toFixed(2);
  var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return sign + `${formatted}`;
};

export const comparator = (nodeA, nodeB) => {
  if (nodeA == nodeB) return 0;
  return nodeA > nodeB ? 1 : -1;
};
