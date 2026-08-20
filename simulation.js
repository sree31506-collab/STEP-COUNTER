const StepCounter = require("../src/stepCounter");

const counter = new StepCounter(1.5);

// Simulated accelerometer readings
const accelerationData = [
    0.2, 0.4, 0.6,
    1.8, 2.1, 1.7,
    0.5, 0.3,
    1.9, 2.3, 1.8,
    0.4, 0.2,
    1.7, 2.0,
    0.3, 0.4,
    2.2, 2.4,
    0.2, 0.3
];

console.log("======================================");
console.log("       STEP COUNTER SIMULATION");
console.log("======================================");
console.log("Threshold = 1.5");
console.log("--------------------------------------");

accelerationData.forEach((acceleration, index) => {
    const stepDetected = counter.processAcceleration(acceleration);

    console.log(
        `Sample ${String(index + 1).padStart(2, "0")} | ` +
        `Acceleration: ${acceleration.toFixed(1)} | ` +
        `Step: ${stepDetected ? "DETECTED" : "NO"} | ` +
        `Total Steps: ${counter.getStepCount()}`
    );
});

console.log("--------------------------------------");
console.log(`FINAL STEP COUNT: ${counter.getStepCount()}`);
console.log("======================================");
