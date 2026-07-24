const users = [
  { id: 1, name: "Alice", age: 28, isActive: true, status: "premium", monthlySpend: 150 },
  { id: 2, name: "Bob", age: 22, isActive: true, status: "basic", monthlySpend: 50 },
  { id: 3, name: "Charlie", age: 35, isActive: false, status: "premium", monthlySpend: 300 },
  { id: 4, name: "Diana", age: 31, isActive: true, status: "premium", monthlySpend: 250 },
  { id: 5, name: "Ethan", age: 19, isActive: false, status: "basic", monthlySpend: 0 }
];


const age = users.filter(user => user.age > 23);
console.log(age);