export function numberOf1Bits(n: number): number {
	let c = 0;
	for(let i = 0; i < 32; i++) {
		c += n & 1;
		n >>= 1
	}
	return c
}
