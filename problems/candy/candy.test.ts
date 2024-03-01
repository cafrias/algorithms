import t from "bun:test";

export function candy(ratings: number[]): number {
  const candies: number[] = Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] > ratings[i] && candies[i - 1] <= candies[i]) {
      candies[i - 1] = candies[i] + 1;
    } else if (ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i + 1] > ratings[i] && candies[i + 1] <= candies[i]) {
      candies[i + 1] = candies[i] + 1;
    } else if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }

  let sum = 0;
  for (const am of candies) {
    sum += am;
  }

  return sum;
}

t.describe("135. Candy", () => {
  t.test("scenario 1", () => {
    const ratings = [1, 0, 2];
    const result = candy(ratings);
    t.expect(result).toBe(5);
  });

  t.test("scenario 2", () => {
    const ratings = [5, 4, 3, 5, 6, 2];
    const result = candy(ratings);
    t.expect(result).toBe(12);
  });

  t.test("scenario 3", () => {
    const ratings = [1, 2, 2];
    const result = candy(ratings);
    t.expect(result).toBe(4);
  });

  t.test("scenario 4", () => {
    const ratings = [1, 3, 2, 2, 1];
    const result = candy(ratings);
    t.expect(result).toBe(7);
  });

  t.test("scenario 5", () => {
    const ratings = [1, 3, 4, 5, 2];
    const result = candy(ratings);
    t.expect(result).toBe(11);
  });
});
