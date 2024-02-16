/**
 * Divide a land plot into the biggest square plots possibles
 */
export function landPlot(width: number, height: number): number {
  const max = Math.max(width, height);
  const min = Math.min(width, height);
  const rest = max % min;
  if (rest === 0) {
    return min;
  }
  return landPlot(rest, min);
}
