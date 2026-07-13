const person = {
    name: "Mark",
    age: 21,
    isMarried: false
};
const {name, age, isMarried} = person; //destructuring

// Copy the object (but changing a attribute)
const person2 = {...person, name: "Tony"} //using spread operator
console.log(person2)

const names = ["Lewis", "George", "Lando"];
console.log(names);

const names2 = [...names, "Charles"];
console.log(names2);
