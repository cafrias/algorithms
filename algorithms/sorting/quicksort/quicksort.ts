function partition(arr: number[], l: number, h: number): number {
  const pivot = arr[h];
  let pivotIdx = l - 1;

  // Move all values less than pivot to the left
  for (let i = l; i < h; i++) {
    if (arr[i] <= pivot) {
      pivotIdx++;
      const a = arr[i];
      arr[i] = arr[pivotIdx];
      arr[pivotIdx] = a;
    }
  }

  // Move pivot to corresponding position
  pivotIdx++;
  arr[h] = arr[pivotIdx];
  arr[pivotIdx] = pivot;

  return pivotIdx;
}

function qs(arr: number[], l: number, h: number) {
  if (l >= h) {
    return;
  }

  const pI = partition(arr, l, h);

  qs(arr, l, pI - 1);
  qs(arr, pI + 1, h);
}

/**
 * Best case scenario is O(n log n), in order to do that, the pivot
 * needs to hit the center.
 *
 * Worst case scenario is O(n^2), this happens when the pivot is
 * at the beginning or end (`less` or `more` are empty).
 *
 * You can get the best case consistently as long as you pick a random
 * element as the pivot.
 */
export function quicksort(arr: number[]) {
  return qs(arr, 0, arr.length - 1);
}
