export class MyClass {
  #value: string[] = [];

  addValue(value: string) {
    const v = [...this.#value, value];
    this.#value = v;
  }
}

const createClass = () => new MyClass();

const myClass = createClass();
myClass.addValue("a");

const addValue = (value: string, prev: string[]) => {
  const v = [...prev, value];
  return v;
};

const createClosure = () => {
  let value: string[] = [];

  return {
    addValue: (v: string) => {
      value = addValue(v, value);
    },
  };
};

const myClosure = createClosure();
myClosure.addValue("a");
