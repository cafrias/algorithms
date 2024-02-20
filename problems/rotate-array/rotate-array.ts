function reverse(arr: number[], l: number, r: number) {
  while (l < r) {
    const a = arr[r];
    arr[r] = arr[l];
    arr[l] = a;
    l++;
    r--;
  }
}

export function rotateArray(input: number[], k: number) {
  let r = k % input.length;

  reverse(input, 0, input.length - 1);
  reverse(input, 0, r - 1);
  reverse(input, r, input.length - 1);
}
