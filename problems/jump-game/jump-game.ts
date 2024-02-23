export function jumpGame(nums: number[]): boolean {
  let r = nums.length - 1;

  for (let l = r - 1; l >= 0; l--) {
    if (l + nums[l] >= r) {
      r = l;
    }
  }

  return r === 0;
}
