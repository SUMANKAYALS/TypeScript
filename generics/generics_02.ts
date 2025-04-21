const test = <T, U extends string>(val_1: T, val_2: U): object => {
  return {
    val_1,
    val_2,
  };
};

// test("SKY", 10);
test("SKY", "10");

export {};
