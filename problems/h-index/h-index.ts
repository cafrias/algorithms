export function hIndex(citations: number[]): number {
  const counts: number[] = [];

  for (let i = 0; i < citations.length; i++) {
    const idx = Math.min(citations.length, citations[i]);
    if (counts[idx]) {
      counts[idx]++;
    } else {
      counts[idx] = 1;
    }
  }

  let currCount = 0;
  for (let i = counts.length - 1; i >= 0; i--) {
    currCount += counts[i] || 0;
    if (i - currCount <= 0) {
      return i;
    }
  }

  return 0;
}
