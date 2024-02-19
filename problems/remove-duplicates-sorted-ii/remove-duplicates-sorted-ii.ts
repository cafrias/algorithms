export function removeDuplicatesSortedII(nums: number[]) {
  let k = 0;
  let r = 0;

  while (r < nums.length) {
    let c = 1;

    while (r + 1 < nums.length && nums[r] == nums[r + 1]) {
      c++;
      r++;
    }

    for (let i = 0; i < Math.min(c, 2); i++) {
      nums[k] = nums[r];
      k++;
    }

    r++;
  }

  return k;
}
