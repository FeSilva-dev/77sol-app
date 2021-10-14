export function formatCurrency(value: number){
  const formatCurrent = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  return String(value.toLocaleString("pt-br", formatCurrent));
}