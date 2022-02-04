const { Stack } = require("./Stack");

describe("Stack", () => {
  test("pushes successfully", () => {
    const stack = new Stack();

    stack.push(1);
    expect(stack.peek().value).toBe(1);
    stack.push(2);
    expect(stack.peek().value).toBe(2);

    stack.push({ hello: "world" });
    expect(stack.peek().value).toEqual({ hello: "world" });
  });

  test("pops successfully", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push({ hello: "world" });

    expect(stack.pop().value).toEqual({ hello: "world" });
    expect(stack.pop().value).toBe(2);
    expect(stack.pop().value).toBe(1);
    expect(stack.pop()).toBe(null);
  });

  test("peeks successfully", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push({ hello: "world" });

    expect(stack.peek().value).toEqual({ hello: "world" });
    expect(stack.peek().value).toEqual({ hello: "world" });

    stack.push({ hello: "github" });

    expect(stack.peek().value).toEqual({ hello: "github" });
  });
});
