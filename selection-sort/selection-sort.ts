export function selectionSort(arr: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIdx = i;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIdx = j;
      }
    }

    arr[minIdx] = Infinity;
    result.push(min);
  }

  return result;
}
