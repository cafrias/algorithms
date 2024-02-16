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

  const pivot = arr[0];
  const less = [];
  const more = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      more.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [...quicksort(less), pivot, ...quicksort(more)];
}
