export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(value);
};

export const formatMetricChange = (
  value: number,
  percentage: number,
  isInverse: boolean = false
): string => {
  const direction = isInverse ? -percentage : percentage;
  const arrow = direction > 0 ? '↑' : '↓';
  const color = (isInverse ? direction < 0 : direction > 0) ? 'text-green-600' : 'text-red-600';
  
  return `${arrow} ${Math.abs(percentage).toFixed(1)}%`;
};