export function removeItem(input: number[], val: number): number {
  let i = 0;
  let k = input.length - 1;

  while (i <= k) {
    if (input[k] === val) {
      k--;
    } else if (input[i] === val) {
      input[i] = input[k];
      i++;
      k--;
    } else {
      i++;
    }
  }

  return i;
}
