const { expect } = require("@jest/globals");
const { SinglyLinkedList, DoublyLinkedList } = require("./LinkedList");

describe("SinglyLinkedList", () => {
  test("creates a new instance and appends it's first node", () => {
    const list = new SinglyLinkedList(1);
    expect(list.head.value).toBe(1);
  });

  test("appends successfully a value", () => {
    const list = new SinglyLinkedList(0);
    list.append(1);
    expect(list.head.next.value).toBe(1);

    list.append({ name: "test" });
    expect(list.head.next.next.value).toEqual({ name: "test" });
  });

  test("prepends successfully a value", () => {
    const list = new SinglyLinkedList(1);
    list.prepend(0);
    expect(list.head.value).toBe(0);

    list.prepend({ name: "test" });
    expect(list.head.value).toEqual({ name: "test" });
  });

  test("lookups successfully indexes", () => {
    const list = new SinglyLinkedList(0);
    const arr = Array(10)
      .fill(0)
      .map((_, i) => i + 1);

    arr.forEach((i) => list.append(i));

    arr.forEach((i) => expect(list.lookup(i).value).toBe(i));

    expect(list.lookup(0).value).toBe(list.head.value);
    expect(list.lookup(10).value).toBe(list.tail.value);
    expect(list.lookup(list.length)).toBeNull();
    expect(list.lookup(list.length * 2)).toBeNull();
    expect(list.lookup(-1)).toBeNull();
  });

  test("searches successfully by callback", () => {
    const list = new SinglyLinkedList(0);
    const arr = Array(10)
      .fill(0)
      .map((_, i) => i + 1);

    arr.forEach((i) => list.append(i));
    expect(list.search((i) => i === 5)).toBe(list.lookup(5));
    expect(list.search((i) => i === 10)).toBe(list.lookup(10));
    expect(list.search((i) => i === 11)).toBeNull();
    expect(list.search((i) => i % 2 === 0)).toBe(list.head);
    expect(list.search((i) => i % 7 === 0 && i !== 0)).toBe(list.lookup(7));

    const cars = [
      {
        car: "Tesla Model 3",
        color: "white",
      },
      {
        car: "Porsche 911",
        color: "red",
      },
      {
        car: "BMW M3",
        color: "blue and white",
      },
    ];

    cars.forEach((c) => list.append(c));

    expect(list.search((i) => i.car === "Tesla Model 3").value).toBe(cars[0]);
    expect(list.search((i) => i.color === "red").value).toBe(cars[1]);
    expect(
      list.search((i) => i.car === "BMW M3" && i.color === "blue and white")
        .value
    ).toBe(cars[2]);
    expect(list.search((i) => i.car === "Lamborghini Veneno")).toBeNull();
  });

  test("inserts successfully", () => {
    const list = new SinglyLinkedList(0);
    const arr = Array(10)
      .fill(0)
      .map((_, i) => i + 1);

    arr.forEach((i) => list.append(i));

    list.insert(1, { name: "test" });
    expect(list.lookup(1).value).toEqual({ name: "test" });

    list.insert(0, { name: "test" });
    expect(list.head.value).toEqual({ name: "test" });

    expect(list.insert(list.length, { name: "test" })).toBe(
      "Index out of range"
    );
    expect(list.insert(list.length + 1, { name: "test" })).toBe(
      "Index out of range"
    );
    expect(list.insert(-1, { name: "test" })).toBe("Index out of range");
    expect(list.insert(-2, { name: "test" })).toBe("Index out of range");

    const oldNode = list.lookup(5);
    list.insert(5, { name: "test" });

    expect(list.lookup(5).value).toEqual({ name: "test" });
    expect(list.lookup(6).value).toBe(oldNode.value);
  });

  test("removes successfully", () => {
    const list = new SinglyLinkedList(0);
    const arr = Array(10)
      .fill(0)
      .map((_, i) => i + 1);

    arr.forEach((i) => list.append(i));

    const oldHead = list.head;
    list.remove(0);
    expect(list.head).toBe(oldHead.next);
    const newTail = list.lookup(list.length - 2);
    list.remove(list.length - 1);
    expect(list.tail.value).toBe(newTail.value);

    const newNodeAt2 = list.lookup(3);
    list.remove(2);

    expect(list.lookup(2).value).toBe(newNodeAt2.value);
    expect(list.remove(list.length)).toBe("Index out of range");
    expect(list.remove(-1)).toBe("Index out of range");
    expect(list.remove(-2)).toBe("Index out of range");
  });
});

describe("DoublyLinkedList", () => {
  test("creates a new instance and appends it's first node", () => {
    const list = new DoublyLinkedList(1);
    expect(list.head.value).toBe(1);
  });

  test("appends successfully a value", () => {
    const list = new DoublyLinkedList(0);
    list.append(1);
    expect(list.head.next.value).toBe(1);
    expect(list.head.next.previous.value).toBe(list.head.value);

    list.append({ name: "test" });
    expect(list.head.next.next.value).toEqual({ name: "test" });
    expect(list.head.next.next.previous.value).toBe(list.head.next.value);
  });

  test("prepends successfully a value", () => {
    const list = new DoublyLinkedList(1);
    list.prepend(0);
    expect(list.head.value).toBe(0);
    expect(list.head.next.previous.value).toBe(list.head.value);

    list.prepend({ name: "test" });
    expect(list.head.value).toEqual({ name: "test" });
    expect(list.head.value).toEqual(list.head.next.previous.value);
  });

  test("lookups successfully indexes", () => {
    const list = new DoublyLinkedList(0);
    const arr = Array(10)
      .fill(0)
      .map((_, i) => i + 1);

    arr.forEach((i) => list.append(i));

    arr.forEach((i) => expect(list.lookup(i).value).toBe(i));

    expect(list.lookup(0).value).toBe(list.head.value);
    expect(list.lookup(10).value).toBe(list.tail.value);
    expect(list.lookup(list.length)).toBeNull();
    expect(list.lookup(list.length * 2)).toBeNull();
    expect(list.lookup(-1)).toBeNull();
  });

  test("searches successfully by callback", () => {
    const list = new DoublyLinkedList(0);
    const arr = Array(10)
      .fill(0)
      .map((_, i) => i + 1);

    arr.forEach((i) => list.append(i));
    expect(list.search((i) => i === 5)).toBe(list.lookup(5));
    expect(list.search((i) => i === 10)).toBe(list.lookup(10));
    expect(list.search((i) => i === 11)).toBeNull();
    expect(list.search((i) => i % 2 === 0)).toBe(list.head);
    expect(list.search((i) => i % 7 === 0 && i !== 0)).toBe(list.lookup(7));

    const cars = [
      {
        car: "Tesla Model 3",
        color: "white",
      },
      {
        car: "Porsche 911",
        color: "red",
      },
      {
        car: "BMW M3",
        color: "blue and white",
      },
    ];

    cars.forEach((c) => list.append(c));

    expect(list.search((i) => i.car === "Tesla Model 3").value).toBe(cars[0]);
    expect(list.search((i) => i.color === "red").value).toBe(cars[1]);
    expect(
      list.search((i) => i.car === "BMW M3" && i.color === "blue and white")
        .value
    ).toBe(cars[2]);
    expect(list.search((i) => i.car === "Lamborghini Veneno")).toBeNull();
  });

  test("inserts successfully", () => {
    const list = new DoublyLinkedList(0);
    const arr = Array(10)
      .fill(0)
      .map((_, i) => i + 1);

    arr.forEach((i) => list.append(i));

    list.insert(1, { name: "test" });

    const index1 = list.lookup(1);

    expect(index1.value).toEqual({ name: "test" });
    expect(index1.next.previous.value).toBe(index1.value);

    list.insert(0, { name: "test" });
    expect(list.head.value).toEqual({ name: "test" });
    expect(list.head.next.previous.value).toEqual(list.head.value);

    expect(list.insert(list.length, { name: "test" })).toBe(
      "Index out of range"
    );
    expect(list.insert(list.length + 1, { name: "test" })).toBe(
      "Index out of range"
    );
    expect(list.insert(-1, { name: "test" })).toBe("Index out of range");
    expect(list.insert(-2, { name: "test" })).toBe("Index out of range");

    const oldNode = list.lookup(5);
    list.insert(5, { name: "test" });

    const index5 = list.lookup(5);

    expect(index5.value).toEqual({ name: "test" });
    expect(index5.next.previous.value).toEqual(index5.value);
    expect(list.lookup(6).value).toBe(oldNode.value);
    expect(list.lookup(6).previous.value).toBe(index5.value);
  });

  test("removes successfully", () => {
    const list = new DoublyLinkedList(0);
    const arr = Array(10)
      .fill(0)
      .map((_, i) => i + 1);

    arr.forEach((i) => list.append(i));

    const oldHead = list.head;
    list.remove(0);
    expect(list.head).toBe(oldHead.next);
    expect(list.head.value).toBe(oldHead.next.next.previous.value);
    const newTail = list.lookup(list.length - 2);
    const oldTail = list.tail;
    list.remove(list.length - 1);
    expect(list.tail.value).toBe(newTail.value);
    expect(oldTail.previous.value).toBe(list.tail.value);

    const newNodeAt2 = list.lookup(3);
    list.remove(2);

    expect(list.lookup(2).value).toBe(newNodeAt2.value);
    expect(list.lookup(3).previous.value).toBe(newNodeAt2.value);
    expect(list.lookup(1).next.next.previous.value).toBe(newNodeAt2.value);
    expect(list.remove(list.length)).toBe("Index out of range");
    expect(list.remove(-1)).toBe("Index out of range");
    expect(list.remove(-2)).toBe("Index out of range");
  });
});
