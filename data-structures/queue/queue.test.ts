import t from "bun:test";
import { Queue } from "./queue";

t.describe("Queue", () => {
  t.test("adds first", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);

    t.expect(queue.getLength()).toBe(1);
    t.expect(queue.getFirst()).toBe(queue.getLast() as any);
  });

  t.test("enqueues correctly", () => {
    const queue = new Queue<number>();

    queue.enqueue(2);
    queue.enqueue(1);

    t.expect(queue.getLength()).toBe(2);
    t.expect(queue.getFirst()).toBe(1);
    t.expect(queue.getLast()).toBe(2);
  });

  t.test("dequeue", () => {
    const queue = new Queue<number>();

    queue.enqueue(2);
    queue.enqueue(1);
    const res = queue.dequeue();

    t.expect(res).toBe(2);
    t.expect(queue.getLength()).toBe(1);
    t.expect(queue.getFirst()).toBe(queue.getLast() as any);
  });
});
