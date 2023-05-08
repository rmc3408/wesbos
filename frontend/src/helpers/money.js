export default function formatMoney(value) {
  const formatted = Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
  }).format(value / 100);
  return formatted;
}
