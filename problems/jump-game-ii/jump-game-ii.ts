export function jumpGameII(jumps: number[]): number {
  let c = 0;
  let l = 0;
  let r = 0;
  while (r < jumps.length - 1) {
    let mJ = 0;
    for (let i = l; i <= r; i++) {
      mJ = Math.max(i + jumps[i], mJ);
    }

    l = r + 1;
    r = mJ;
    c++;
  }

  return c;
}
