export function productArrayExcept(nums: number[]): number[] {
  let jsf = 1;
  let isf = 1;
  const res: number[] = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    const j = nums.length - 1 - i;
    res[i] *= isf;
    res[j] *= jsf;
    isf *= nums[i];
    jsf *= nums[j];
  }

  return res;
}
