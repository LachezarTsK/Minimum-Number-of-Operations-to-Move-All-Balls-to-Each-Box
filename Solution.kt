
class Solution {

    fun minOperations(boxes: String): IntArray {
        val numberOfBoxes = boxes.length
        val minOperationsToMoveAllBallsToEachBox = IntArray(numberOfBoxes)

        fillMinOperations(1, numberOfBoxes, minOperationsToMoveAllBallsToEachBox, boxes)
        fillMinOperations(numberOfBoxes - 2, -1, minOperationsToMoveAllBallsToEachBox, boxes)

        return minOperationsToMoveAllBallsToEachBox
    }

    private fun fillMinOperations(start: Int, end: Int, minOperationsToMoveAllBallsToEachBox: IntArray, boxes: String): Unit {
        var countEncounteredBalls = 0
        var accumulatedOperations = 0
        val step = if (end != -1) 1 else -1
        var i = start

        while (i != end) {
            countEncounteredBalls += boxes[i - step] - '0'
            accumulatedOperations += countEncounteredBalls
            minOperationsToMoveAllBallsToEachBox[i] += accumulatedOperations
            i += step
        }
    }
}
