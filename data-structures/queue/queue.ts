type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export class Queue<T> {
  private first?: Node<T>;

  private last?: Node<T>;

  private length = 0;

  enqueue(value: T) {
    this.length++;

    if (!this.first) {
      this.first = { value };
      this.last = this.first;
      return;
    }

    const node: Node<T> = { value };
    this.first.prev = node;
    this.first = node;
  }

  dequeue() {
    if (!this.last) {
      return;
    }

    const node = this.last;
    this.last = this.last.prev;
    node.prev = undefined;
    this.length--;

    return node.value;
  }

  getLength() {
    return this.length;
  }

  getFirst() {
    return this.first?.value;
  }

  getLast() {
    return this.last?.value;
  }
}
