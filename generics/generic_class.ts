class sellable<T> {
  public cart: T[] = [];
  add = (product: T) => {
    this.cart.push(product);
  };
}

const test = new sellable();
test.add(10);
console.log(test.cart);

export {};
