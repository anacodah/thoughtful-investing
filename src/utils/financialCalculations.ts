/**
 * Calculates the Future Value of a present amount adjusted for inflation.
 * @param presentValue The current cost or value
 * @param inflationRate Annual inflation rate in percentage (e.g. 6 for 6%)
 * @param years Number of years
 * @returns Future Value
 */
export function calculateFutureValue(presentValue: number, inflationRate: number, years: number): number {
  if (years <= 0) return presentValue;
  const rate = inflationRate / 100;
  return presentValue * Math.pow((1 + rate), years);
}

/**
 * Calculates the monthly SIP required to reach a target Future Value.
 * @param futureValue The target amount needed
 * @param expectedReturnRate Annual expected return in percentage (e.g. 12 for 12%)
 * @param years Number of years to invest
 * @returns Monthly SIP amount
 */
export function calculateRequiredSIP(futureValue: number, expectedReturnRate: number, years: number): number {
  if (years <= 0 || futureValue <= 0) return 0;
  const months = years * 12;
  const monthlyRate = expectedReturnRate / 100 / 12;
  
  if (monthlyRate === 0) return futureValue / months; // If 0% return

  // Formula: SIP = (FV * r) / ((1 + r) * ((1 + r)^n - 1))
  const numerator = futureValue * monthlyRate;
  const denominator = (1 + monthlyRate) * (Math.pow(1 + monthlyRate, months) - 1);
  
  return numerator / denominator;
}

/**
 * Formats a number as Indian Currency (INR)
 */
export function formatINR(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}
