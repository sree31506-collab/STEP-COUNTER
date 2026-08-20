# Step Counter Using JavaScript

## Project Overview

The Step Counter is a JavaScript-based project that detects and counts
walking steps using simulated accelerometer data.

The project uses a threshold-based step detection algorithm. When the
acceleration value crosses a predefined threshold, a step is detected.

This project also includes a testbench and simulation environment to
verify the operation of the step counter.

---

## Features

- Detects steps from acceleration data
- Counts the total number of steps
- Uses a configurable acceleration threshold
- Prevents multiple counts from a single acceleration peak
- Supports counter reset
- Includes automated test cases
- Includes simulation output

---

## Technology Used

- JavaScript
- Node.js
- GitHub
- Simulated accelerometer data

---

## Working Principle

The system receives acceleration values as input.

A threshold value of 1.5 is used in the default implementation.

### Step Detection

If:

    acceleration >= threshold

and the system is ready to detect a new step, the step counter
is incremented.

After detecting a step, the acceleration must fall below the
threshold before another step can be detected.

This prevents several consecutive high acceleration values from
being counted as multiple steps.

---

## Algorithm

1. Initialize the step count to zero.
2. Set the acceleration threshold to 1.5.
3. Read the acceleration value.
4. Compare the acceleration with the threshold.
5. If the acceleration is above the threshold and the system is
   ready, detect a step.
6. Increase the step count.
7. Wait for the acceleration to fall below the threshold.
8. Repeat for every sensor reading.
9. Display the final step count.

---

## Project Structure

    step-counter/
    |
    |-- README.md
    |-- package.json
    |
    |-- src/
    |   `-- stepCounter.js
    |
    |-- test/
    |   `-- stepCounter.test.js
    |
    |-- simulation/
    |   `-- simulation.js
    |
    `-- output/
        `-- simulation-output.txt

---

## Installation

Install Node.js on your computer.

Clone the repository:

    git clone YOUR_GITHUB_REPOSITORY_URL

Go into the project directory:

    cd step-counter

No external npm packages are required.

---

## Running the Testbench

Run:

    npm test

The testbench checks different conditions including:

- No movement
- One step
- Three steps
- Five steps
- Continuous acceleration
- Counter reset

---

## Running the Simulation

Run:

    npm run simulate

The simulation generates accelerometer readings and displays:

- Sample number
- Acceleration value
- Step detection status
- Current total step count

---

## Example

Input:

    0.2, 0.4, 1.8, 2.1, 0.3, 1.9, 2.3, 0.2

Output:

    Step detected at 1.8
    Step detected at 1.9

Final Step Count:

    2

---

## Test Results

The testbench verifies that the step counter correctly identifies
steps under different simulated conditions.

Expected result:

    PASS: No movement
    PASS: One step
    PASS: Three steps
    PASS: Five steps
    PASS: Continuous high acceleration

---

## Advantages

- Simple implementation
- Easy to understand
- Easy to test
- Does not require additional hardware
- Can be extended to real sensor data

---

## Limitations

This project uses simulated acceleration data rather than a real
accelerometer.

Real-world step counters may require additional signal processing,
noise filtering, calibration, and sensor fusion for improved accuracy.

---

## Future Improvements

Possible improvements include:

- Using a real smartphone accelerometer
- Adding a graphical user interface
- Displaying steps in real time
- Adding distance calculation
- Adding calorie estimation
- Adding daily and weekly statistics
- Storing step history
- Adding graphs for acceleration data

---

## Conclusion

The JavaScript Step Counter demonstrates how accelerometer data can
be processed to detect walking steps.

The project includes the main algorithm, testbench, simulation, and
simulation output, making it suitable for demonstrating software
based sensor-data processing.

---

## Author

Your Name

## License

MIT License
