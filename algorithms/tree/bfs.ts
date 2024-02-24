import { Queue } from "../../data-structures/queue/queue";

export type TreeNode<T> = {
  value: T;
  children?: TreeNode<T>[];
};

export function bfs<T>(tree: TreeNode<T>): T[] {
  const result: T[] = [];
  const queue = new Queue<TreeNode<T>>();
  queue.enqueue(tree);

  while (queue.getLength() > 0) {
    const node = queue.dequeue();
    if (!node) {
      throw new Error("Queue is empty");
    }
    result.push(node.value);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        queue.enqueue(node.children[i]);
      }
    }
  }
  return result;
}
