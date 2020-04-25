const formatValue = (value: number): string =>
  new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO

// export const formatDate = (date: Date): string =>
//   new Intl.DateTimeFormat('pt-br').format(date);

export default formatValue;
