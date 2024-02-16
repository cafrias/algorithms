export function sum(nums: number[]): number {
  const tail = nums.pop();
  if (tail === undefined) {
    return 0;
  }
  return tail + sum(nums);
}
