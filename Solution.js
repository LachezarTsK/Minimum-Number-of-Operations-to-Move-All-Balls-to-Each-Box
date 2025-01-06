
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    const numberOfBoxes = boxes.length;
    const minOperationsToMoveAllBallsToEachBox = new Array(numberOfBoxes).fill(0);

    fillMinOperations(1, numberOfBoxes, minOperationsToMoveAllBallsToEachBox, boxes);
    fillMinOperations(numberOfBoxes - 2, -1, minOperationsToMoveAllBallsToEachBox, boxes);

    return minOperationsToMoveAllBallsToEachBox;
};

/**
 * @param {number} start
 * @param {number} end
 * @param {number[]} minOperationsToMoveAllBallsToEachBox 
 * @param {string} boxes 
 * @return {void}
 */
function fillMinOperations(start, end, minOperationsToMoveAllBallsToEachBox, boxes) {
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
