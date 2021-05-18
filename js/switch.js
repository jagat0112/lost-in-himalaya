const HTMLSelectElement = {
  contructor(arr = []) {
    this.items = arr;
  },
  addItem(...num) {
    const ar = [...num];
    ar.forEach((n) => {
      this.items.push(n);
    });
  },
  removeItem() {
    const updated = this.items.filter((item) => {
      return item !== num;
    });
    if (updated.length === this.items.length) {
      throw new Error(`No item is found as ${num}`);
    }

    this.items = updated;
  },
};
