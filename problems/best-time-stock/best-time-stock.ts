export function bestTimeStock(prices: number[]): number {
  let l = 0;
  let r = 1;
  let max = 0;

  while (r < prices.length) {
    if (prices[r] < prices[l]) {
      l++;
    } else {
      max = Math.max(max, prices[r] - prices[l]);
    }
    r++;
  }

  return max;
}
