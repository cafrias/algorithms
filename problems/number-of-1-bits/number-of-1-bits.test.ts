import t from 'bun:test'
import { numberOf1Bits } from './number-of-1-bits'

t.describe('191. Number of 1 Bits', () => {
	t.test('scenario 1', () => {
		const input = 0b00000000000000000000000000001011
		const result = numberOf1Bits(input)
		t.expect(result).toBe(3)
	})

	t.test('scenario 2', () => {
		const input = 0b00000000000000000000000010000000
		const result = numberOf1Bits(input)
		t.expect(result).toBe(1)
	})

	t.test('scenario 3', () => {
		const input = 0b11111111111111111111111111111101
		const result = numberOf1Bits(input)
		t.expect(result).toBe(31)
	})
})