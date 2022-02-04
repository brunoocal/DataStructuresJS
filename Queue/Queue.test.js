const { Queue } = require("./Queue");

describe("Queue", () => {
  test("enqueues successfully", () => {
    const queue = new Queue();

    queue.enqueue(1);

    expect(queue.peek().value).toBe(1);

    queue.enqueue(2);

    expect(queue.peek().value).toBe(1);

    queue.enqueue({ hello: "world" });

    expect(queue.peek().value).toBe(1);
  });

  test("dequeues successfully", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek().value).toBe(1);

    const dequeued = queue.dequeue();

    expect(dequeued.value).toBe(1);

    expect(queue.peek().value).toBe(2);

    const dequeued2 = queue.dequeue();

    expect(dequeued2.value).toBe(2);

    expect(queue.peek().value).toBe(3);

    const dequeued3 = queue.dequeue();

    expect(dequeued3.value).toBe(3);

    expect(queue.peek()).toBeNull();
  });
});
