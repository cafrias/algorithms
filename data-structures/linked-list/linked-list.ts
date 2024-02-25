type Node<T> = {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
};

/**
 * Each item points to the next item in memory.
 *
 * Insertion and Deletion are only O(1) if you already
 * have access where the element will be added or deleted.
 *
 * It's common practice to store the beginning and the end of the linked list.
 *
 * | Operation | Complexity |
 * | --------- | ---------- |
 * | Insertion | O(1)       |
 * | Deletion  | O(1)       |
 * | Traversal    | O(n)       |
 *
 */
export class LinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
  }

  append(v: T) {
    const newNode: Node<T> = { value: v };
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.prev = this.tail;
    this.tail!.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(v: T) {
    const newNode: Node<T> = { value: v };
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;
    this.head!.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  get(idx: number): T {
    if (idx >= this.length) {
      throw new Error("Out of bounds");
    }

    let node = this.head as Node<T>;
    for (let i = 0; i < idx; i++) {
      node = node?.next as Node<T>;
    }

    return node.value;
  }

  removeAt(idx: number): T {
    if (idx >= this.length) {
      throw new Error("Out of bounds");
    }

    let node = this.head as Node<T>;
    for (let i = 0; i < idx; i++) {
      node = node?.next as Node<T>;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    }

    node.next = undefined;
    node.prev = undefined;

    this.length--;

    return node.value;
  }

  remove(v: T): T | undefined {
    if (!this.head) {
      return;
    }

    let currNode: Node<T> | undefined = this.head;
    while (currNode && currNode.value !== v) {
      currNode = currNode.next;
    }

    if (currNode) {
      currNode.prev = currNode.next;

      if (currNode === this.head) {
        this.head = currNode.next;
      }
      if (currNode === this.tail) {
        this.tail = currNode.prev;
      }
      currNode.prev = undefined;
      currNode.next = undefined;
      this.length--;
    }

    return currNode?.value;
  }
}
