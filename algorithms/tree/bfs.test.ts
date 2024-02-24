import t from "bun:test";
import { bfs, type TreeNode } from "./bfs";

t.describe("Breadth First Search", () => {
  t.test("traverses correctly", () => {
    const tree: TreeNode<number> = {
      value: 1,
      children: [
        { value: 2, children: [{ value: 3 }, { value: 4 }] },
        { value: 5, children: [{ value: 6 }, { value: 7 }] },
      ],
    };

    const res = bfs(tree);

    t.expect(res).toEqual([1, 2, 5, 3, 4, 6, 7]);
  });
});
