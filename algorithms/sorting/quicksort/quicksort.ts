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
export function quicksort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      const aux = arr[0];
      arr[0] = arr[1];
      arr[1] = aux;
    }
    return arr;
  }

  const pivotIdx = Math.floor(Math.random() * (arr.length - 1));
  const pivot = arr[pivotIdx];
  const less = [];
  const more = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIdx) {
      continue;
    }
    if (arr[i] > pivot) {
      more.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [...quicksort(less), pivot, ...quicksort(more)];
}
