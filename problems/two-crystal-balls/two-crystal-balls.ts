export function twoCrystalBalls(heights: boolean[]): number {
	const interval = Math.floor(Math.sqrt(heights.length))
	let i = 0;
	for(; i < heights.length; i += interval) {
		const guess = heights[i]
		if (guess) {
			break;
		}
	}

	for(let j = i - interval; j < heights.length && j <= i; j++) {
		if (heights[j]) {
			return j;
		}
	}

	return -1;
}