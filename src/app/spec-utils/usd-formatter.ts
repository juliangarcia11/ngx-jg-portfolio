/**
 * The Intl.NumberFormat object enables language-sensitive number formatting
 *
 * Use as: `usdFormatter.format(number)`
 *
 * Input: 375.0
 * Output $375.00
 */
export const usd_formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
