export function binarySearch(arr: number[], item: number): number | undefined {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + high; // 2
    const guess = arr[mid];
    if (guess == item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return undefined;
}
