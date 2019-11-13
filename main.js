//TODO JavaScript Spread Operator

const OldArray = ["old way of array", "array", "is", "this"];

const newArray = ["first", ...OldArray];

// console.log(newArray);

//TODO Rest Paramater

const func = (first, second, ...rest) => {
  console.log(first, second, ...rest);
};

// func('samuel', 'school', ['orange', 'banna'])

//TODO Copying Array

const arrayOne = ["USA", "Nigeria", "Aba"];

const secondArray = ["Eguisi", "Banga", "Lagos Island"];

const conCateArray = [...arrayOne, ...secondArray];

// console.log(conCateArray)

//TODO Sort our Duplicate Element form Array

const dupArray = ["mango", "apple", "mango", "apple", "cherry"];

const uniqueArray = [...new Set(dupArray)];

//TODO Concatenate Arrays

// const fruits = ["apple", "orange", "banana", "grape"];
const vegetables = ["carror", "salad"];

// const concateFruitsandVegetables = [...fruits, ...vegetables, "...samuel"];

// console.log(concateFruitsandVegetables);

//TODO  Pass Arguments as Array

// const mixer = (x, y, z, o) => console.log(x, y, z, o);

// const fruits = ["apple", "orange", "banana", "grape"];

// mixer(...fruits);

// mixer.apply(null, fruits)

//TODO  Convert Argument to Array

const mixer = (...args) => console.log(args);

// mixer('fruits', 'houses')

//TODO Copying an Object

const todoOne = { name: "Clean my hub" };

// const todoCopied = { ...todo };

//TODO Merge Objects

const state = { completed: false };

const nextTodo = { name: "Ironing" };

const MergedTodos = { ...todoOne, ...state, ...nextTodo };

// console.log(MergedTodos);

//TODO Splitting a String into Characters

const Nigeria = "NIGERIA";

console.log([...Nigeria]);

//TODO And That's it
