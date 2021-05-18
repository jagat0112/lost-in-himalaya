const collabsible = document.querySelectorAll(".collapsible");

collabsible.forEach((c) => {
  c.addEventListener("click", function () {
    this.classList.toggle("collapsible--active");
  });
});

const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);

    this.count = _stack.get(this).length;
  }

  push(item) {
    const arr = _stack.get(this);
    arr.push(item);
    this.count = arr.length;
    _stack.set(this, arr);
  }

  pop() {
    const arr = _stack.get(this);
    if (this.count === 0) {
      throw new Error("Empty Array");
    }
    arr.pop();
    this.count = arr.length;
    _stack.set(this, arr);
  }

  peek() {
    const arr = _stack.get(this);
    if (this.count === 0) {
      throw new Error("Empty Array");
    }
    return arr[arr.length - 1];
  }
}

const stack = new Stack();
