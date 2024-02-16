export function mergeSortedArrays(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (k > i) {
    if (i > -1 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}
