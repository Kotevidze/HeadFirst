function bark (name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    }
    else {
        console.log(name + " says woof woof");
    }
}
bark ("Rover", 23);
bark ("Spot", "20");
bark ("Spike", 53);
bark ("Lady", 17);

function makeTea (cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
}

makeTea(3, "Lipton");
makeTea(3, 4, "Lipton");
makeTea("Lipton", "Greenwetch", 4);