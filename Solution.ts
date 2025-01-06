
function minOperations(boxes: string): number[] {
    const numberOfBoxes = boxes.length;
    const minOperationsToMoveAllBallsToEachBox = new Array<number>(numberOfBoxes).fill(0);

    fillMinOperations(1, numberOfBoxes, minOperationsToMoveAllBallsToEachBox, boxes);
    fillMinOperations(numberOfBoxes - 2, -1, minOperationsToMoveAllBallsToEachBox, boxes);

    return minOperationsToMoveAllBallsToEachBox;
};

function fillMinOperations(start: number, end: number, minOperationsToMoveAllBallsToEachBox: number[], boxes: string): void {
    const ASCII_ZERO = 48;
    let countEncounteredBalls = 0;
    let accumulatedOperations = 0;
    let step = (end !== -1) ? 1 : -1;

    for (let i = start; i !== end; i += step) {
        countEncounteredBalls += boxes.codePointAt(i - step) - ASCII_ZERO;
        accumulatedOperations += countEncounteredBalls;
        minOperationsToMoveAllBallsToEachBox[i] += accumulatedOperations;
    }
}
