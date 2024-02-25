import t from "bun:test";
import { LinkedList } from "./linked-list";

export function test_list(list: LinkedList<number>): void {
  list.append(5);
  list.append(7);
  list.append(9);

  t.expect(list.get(2)).toEqual(9);
  t.expect(list.removeAt(1)).toEqual(7);
  t.expect(list.length).toEqual(2);

  list.append(11);
  t.expect(list.removeAt(1)).toEqual(9);
  t.expect(list.remove(9)).toEqual(undefined as any);
  t.expect(list.removeAt(0)).toEqual(5);
  t.expect(list.removeAt(0)).toEqual(11);
  t.expect(list.length).toEqual(0);

  list.prepend(5);
  list.prepend(7);
  list.prepend(9);

  t.expect(list.get(2)).toEqual(5);
  t.expect(list.get(0)).toEqual(9);
  t.expect(list.remove(9)).toEqual(9);
  t.expect(list.length).toEqual(2);
  t.expect(list.get(0)).toEqual(7);
}

t.describe("Linked List", () => {
  t.test("works as expected", () => {
    const list = new LinkedList<number>();
    test_list(list);
  });
});
