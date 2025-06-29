function callThreeTimes(f) {
    f();
    f();
    f();
}

function smile() {
    console.log("Wohoo I'm so happy!");
}

function success() {
    console.log("Yay, I'm the best!")
}

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

// repeatNTimes(smile, 11);

function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if(rand < 0.5) {
        f1();
    } else {
        f2();
    }
}
