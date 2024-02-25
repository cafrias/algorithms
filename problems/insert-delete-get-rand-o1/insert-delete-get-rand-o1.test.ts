import t from "bun:test";

class RandomizedSet {
  private items: number[];

  private places: Record<number, number>;

  constructor() {
    this.items = [];
    this.places = {};
  }

  insert(val: number): boolean {
    if (this.places[val] !== undefined) {
      return false;
    }

    this.items.push(val);
    this.places[val] = this.items.length - 1;
    return true;
  }

  remove(val: number): boolean {
    if (this.places[val] === undefined) {
      return false;
    }

    const idx = this.places[val];
    const lastIdx = this.items.length - 1;
    const aux = this.items[lastIdx];
    this.items[lastIdx] = this.items[idx];
    this.items[idx] = aux;
    this.places[aux] = idx;
    this.items.pop();

    delete this.places[val];

    return true;
  }

  getRandom(): number {
    const randIdx = Math.floor(Math.random() * this.items.length);
    return this.items[randIdx];
  }
}

t.describe("380. Insert Delete Get Random O(1)", () => {
  t.test("Scenario 1", () => {
    const set = new RandomizedSet();

    t.expect(set.insert(0)).toBe(true);
    t.expect(set.insert(1)).toBe(true);
    t.expect(set.remove(0)).toBe(true);
    t.expect(set.insert(2)).toBe(true);
    t.expect(set.remove(1)).toBe(true);
    t.expect(set.getRandom()).toBe(2);
  });
});
