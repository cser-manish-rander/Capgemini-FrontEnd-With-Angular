type User = {
  name: string;
  age: number;
};

let u1: User = {
  name: "Manish",
  age: 22
};

let person: [number, string, User] = [22, "Manish", u1];

console.log(person);