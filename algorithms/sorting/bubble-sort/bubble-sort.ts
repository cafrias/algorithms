export function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const a = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = a;
      }
    }
  }
  return arr;
}
