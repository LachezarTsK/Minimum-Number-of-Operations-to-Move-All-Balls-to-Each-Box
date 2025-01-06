
package main

import "fmt"

func minOperations(boxes string) []int {
    numberOfBoxes := len(boxes)
    minOperationsToMoveAllBallsToEachBox := make([]int, numberOfBoxes)

    fillMinOperations(1, numberOfBoxes, minOperationsToMoveAllBallsToEachBox, boxes)
    fillMinOperations(numberOfBoxes-2, -1, minOperationsToMoveAllBallsToEachBox, boxes)

    return minOperationsToMoveAllBallsToEachBox
}

func fillMinOperations(start int, end int, minOperationsToMoveAllBallsToEachBox []int, boxes string) {
    countEncounteredBalls := 0
    accumulatedOperations := 0
    step := 1
    if end == -1 {
        step = -1
    }
    i := start

    for i != end {
        countEncounteredBalls += int(boxes[i-step] - '0')
        accumulatedOperations += countEncounteredBalls
        minOperationsToMoveAllBallsToEachBox[i] += accumulatedOperations
        i += step
    }
}
