class StepCounter {
    constructor(threshold = 1.5) {
        this.threshold = threshold;
        this.stepCount = 0;
        this.readyForStep = true;
    }

    processAcceleration(acceleration) {
        if (acceleration >= this.threshold && this.readyForStep) {
            this.stepCount++;
            this.readyForStep = false;
            return true;
        }

        // Signal must fall below threshold before another
        // step can be detected.
        if (acceleration < this.threshold) {
            this.readyForStep = true;
        }

        return false;
    }

    getStepCount() {
        return this.stepCount;
    }

    reset() {
        this.stepCount = 0;
        this.readyForStep = true;
    }
}

module.exports = StepCounter;
