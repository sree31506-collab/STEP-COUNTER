const StepCounter = require("../src/stepCounter");

function runTest(name, input, expected) {
    const counter = new StepCounter(1.5);

    input.forEach(value => {
        counter.processAcceleration(value);
    });

    const actual = counter.getStepCount();

    if (actual === expected) {
        console.log(`PASS: ${name}`);
        console.log(`      Expected: ${expected}, Actual: ${actual}`);
    } else {
        console.log(`FAIL: ${name}`);
        console.log(`      Expected: ${expected}, Actual: ${actual}`);
    }

    console.log("-----------------------------------");
}

// Test 1: No movement
runTest(
    "No movement",
    [0.2, 0.3, 0.5, 0.4, 0.2],
    0
);

// Test 2: One step
runTest(
    "One step",
    [0.2, 1.8, 0.3],
    1
);

// Test 3: Three steps
runTest(
    "Three steps",
    [0.2, 1.8, 0.3, 2.0, 0.4, 1.7, 0.2],
    3
);

// Test 4: Five steps
runTest(
    "Five steps",
    [0.2, 1.7, 0.2, 2.1, 0.3, 1.8, 0.4, 2.2, 0.2, 1.9, 0.3],
    5
);

// Test 5: Continuous high acceleration
runTest(
    "Continuous high acceleration",
    [1.8, 2.0, 2.2, 2.5, 2.1],
    1
);

// Test 6: Reset
const counter = new StepCounter(1.5);

counter.processAcceleration(1.8);
counter.processAcceleration(0.2);

console.log("Before reset:", counter.getStepCount());

counter.reset();

console.log("After reset:", counter.getStepCount());
console.log("-----------------------------------");
