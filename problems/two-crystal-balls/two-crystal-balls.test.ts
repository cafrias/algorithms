import { describe, test, expect } from "bun:test";
import { twoCrystalBalls } from "./two-crystal-balls";

describe('Two Crystal Balls', () => {
	test('not found', () => {
		const input = [false, false, false, false, false]
		const result = twoCrystalBalls(input) 
		expect(result).toBe(-1)
	})

	test('found in last position', () => {
		const input = [false, false, false, false, true]
		const result = twoCrystalBalls(input) 
		expect(result).toBe(4)
	})

	test('found in the middle', () => {
		const input = [false, false, true, true, true]
		const result = twoCrystalBalls(input) 
		expect(result).toBe(2)
	})

	test('found in first position', () => {
		const input = [true, true, true, true, true]
		const result = twoCrystalBalls(input) 
		expect(result).toBe(0)
	})
})