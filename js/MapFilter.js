// Map
let names = ["Lewis", "George", "Lando"];

let newNames = names.map((name) => {
    return name + "1";
});

console.log(newNames);

// Filter
let nums = [1, 4, 5, 2, 3, 1, 9, 1];

let newNums = nums.filter((num) => {
    return (num !== 1);
}); 

console.log(newNums);
