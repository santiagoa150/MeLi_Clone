/**
 * Parses a number to a currency string.
 * @param value - The number to be formatted as currency.
 * @param currency - The currency code.
 * @return A string representing the number formatted as currency.
 */
export function parseNumberToCurrency(value: number, currency: string): string {
    return new Intl.NumberFormat(navigator.language, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
}
