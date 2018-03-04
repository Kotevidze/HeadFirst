var dog = {
    name: "Fido",
    weight: 48,
    breed: "Mixed",
    loves: "walks"
};

function loseWeight(dog, amount) {
    dog.weight = dog.weight - amount;
}

console.log((dog.name + " now weight " + dog.weight));
loseWeight(dog, 10);
console.log((dog.name + " now weight " + dog.weight));